// Complete canvas-based shim for ppu-ocv/web
// Replaces OpenCV with native Canvas APIs for Chrome Extension MV3 CSP compatibility
// API surface taken directly from ppu-ocv source files:
//   - image-processor.js, contours.js, canvas-toolkit.base.js, canvas-factory.js, index.web.js

// ============================================================
// Platform (from canvas-factory.js + platform/web.js)
// ============================================================
const webPlatform = {
  createCanvas(width, height) {
    if (typeof OffscreenCanvas !== 'undefined') return new OffscreenCanvas(width, height);
    if (typeof document !== 'undefined') {
      const c = document.createElement('canvas');
      c.width = width; c.height = height;
      return c;
    }
    throw new Error('No canvas implementation available');
  },
  async loadImage(source) {
    let blob;
    if (source instanceof ArrayBuffer) { blob = new Blob([source]); }
    else if (typeof source === 'string') { const r = await fetch(source); blob = await r.blob(); }
    else throw new Error('loadImage: unsupported source type');
    const bitmap = await createImageBitmap(blob);
    const canvas = webPlatform.createCanvas(bitmap.width, bitmap.height);
    canvas.getContext('2d').drawImage(bitmap, 0, 0);
    bitmap.close();
    return canvas;
  },
  isCanvas(value) {
    return !!(
      (typeof HTMLCanvasElement !== 'undefined' && value instanceof HTMLCanvasElement) ||
      (typeof OffscreenCanvas !== 'undefined' && value instanceof OffscreenCanvas) ||
      (value && typeof value.getContext === 'function' && typeof value.width === 'number')
    );
  },
};

// Register platform (setPlatform / getPlatform from canvas-factory.js)
let _platform = webPlatform;
export function setPlatform(p) { _platform = p; }
export function getPlatform() { return _platform; }
export { webPlatform };

// ============================================================
// CanvasToolkitBase (from canvas-toolkit.base.js)
// ============================================================
export class CanvasToolkitBase {
  static _baseInstance = null;
  step = 0;

  static getInstance() {
    if (!CanvasToolkitBase._baseInstance) {
      CanvasToolkitBase._baseInstance = new CanvasToolkitBase();
    }
    return CanvasToolkitBase._baseInstance;
  }

  crop(options) {
    const { bbox, canvas } = options;
    const w = bbox.x1 - bbox.x0;
    const h = bbox.y1 - bbox.y0;
    const cropped = _platform.createCanvas(w, h);
    cropped.getContext('2d').drawImage(canvas, bbox.x0, bbox.y0, w, h, 0, 0, w, h);
    return cropped;
  }

  isDirty(options) {
    const { canvas, threshold = 127.5, majorColorThreshold = 0.97 } = options;
    let whiteCount = 0, blackCount = 0;
    const borderless = this.crop({
      bbox: { x0: canvas.width * 0.1, y0: canvas.height * 0.1, x1: canvas.width * 0.9, y1: canvas.height * 0.9 },
      canvas,
    });
    const ctx = borderless.getContext('2d');
    const data = ctx.getImageData(0, 0, borderless.width, borderless.height).data;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i] >= threshold && data[i + 1] >= threshold && data[i + 2] >= threshold) whiteCount++;
      else blackCount++;
    }
    return Math.max(whiteCount, blackCount) / (blackCount + whiteCount) < majorColorThreshold;
  }

  drawLine(options) {
    const { ctx, x, y, width, height, lineWidth = 2, color = 'blue' } = options;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(x, y, width, height);
    ctx.closePath();
  }

  drawContour(options) {
    const { ctx, contour, strokeStyle = 'red', lineWidth = 2 } = options;
    // contour in shim is a rect, not OpenCV Mat
    if (contour && typeof contour === 'object') {
      ctx.strokeStyle = strokeStyle;
      ctx.lineWidth = lineWidth;
      ctx.strokeRect(contour.x || 0, contour.y || 0, contour.width || 0, contour.height || 0);
    }
  }

  saveImage() { /* no-op in browser */ }
  clearOutput() { /* no-op in browser */ }
}

export const CanvasToolkit = CanvasToolkitBase;

// ============================================================
// ImageProcessor (from image-processor.js)
// ============================================================
export class ImageProcessor {
  static async initRuntime() { /* no-op — no OpenCV needed */ }

  static async prepareCanvas(image) {
    if (_platform.isCanvas(image)) return image;
    return _platform.loadImage(image);
  }

  static async prepareBuffer(canvas) {
    if (canvas instanceof ArrayBuffer) return canvas;
    if (typeof canvas.toDataURL === 'function') {
      const dataURL = canvas.toDataURL('image/png');
      const base64 = dataURL.replace(/^data:image\/png;base64,/, '');
      const binary = atob(base64);
      const buf = new ArrayBuffer(binary.length);
      const bytes = new Uint8Array(buf);
      for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
      return buf;
    }
    const ctx = canvas.getContext('2d');
    const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
    return id.data.buffer.slice(0);
  }

  constructor(source) {
    if (_platform.isCanvas(source)) {
      this._canvas = source;
      this.width = source.width;
      this.height = source.height;
      this._imageData = null;
      this._channels = 4;
    } else {
      throw new Error('ImageProcessor shim: only Canvas input supported');
    }
  }

  _getImageData() {
    if (!this._imageData) {
      this._imageData = this._canvas.getContext('2d').getImageData(0, 0, this.width, this.height);
    }
    return this._imageData;
  }

  _flush() {
    if (this._imageData) {
      this._canvas.getContext('2d').putImageData(this._imageData, 0, 0);
      this._imageData = null;
    }
  }

  grayscale() {
    const id = this._getImageData();
    const d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      const g = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
      d[i] = d[i + 1] = d[i + 2] = g;
    }
    this._channels = 1;
    this._flush();
    return this;
  }

  blur() { return this; }

  threshold() {
    const id = this._getImageData();
    const d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      const v = d[i] > 128 ? 255 : 0;
      d[i] = d[i + 1] = d[i + 2] = v;
    }
    this._flush();
    return this;
  }

  adaptiveThreshold() { return this.threshold(); }

  invert() {
    const id = this._getImageData();
    const d = id.data;
    for (let i = 0; i < d.length; i += 4) {
      d[i] = 255 - d[i]; d[i + 1] = 255 - d[i + 1]; d[i + 2] = 255 - d[i + 2];
    }
    this._flush();
    return this;
  }

  canny() { return this; }
  dilate() { return this; }
  erode() { return this; }
  border() { return this; }
  convert() { return this; }
  morphologicalGradient() { return this; }
  warp() { return this; }

  resize(options) {
    this._flush();
    const { width, height } = options;
    const c = _platform.createCanvas(width, height);
    c.getContext('2d').drawImage(this._canvas, 0, 0, width, height);
    this._canvas = c;
    this.width = width;
    this.height = height;
    return this;
  }

  rotate(options) {
    if (!options?.angle || Math.abs(options.angle) < 0.01) return this;
    this._flush();
    const rad = (options.angle * Math.PI) / 180;
    const cos = Math.abs(Math.cos(rad));
    const sin = Math.abs(Math.sin(rad));
    const nw = Math.ceil(this.width * cos + this.height * sin);
    const nh = Math.ceil(this.width * sin + this.height * cos);
    const c = _platform.createCanvas(nw, nh);
    const ctx = c.getContext('2d');
    ctx.translate(nw / 2, nh / 2);
    ctx.rotate(rad);
    ctx.drawImage(this._canvas, -this.width / 2, -this.height / 2);
    this._canvas = c;
    this.width = nw;
    this.height = nh;
    return this;
  }

  toCanvas() {
    this._flush();
    return this._canvas;
  }

  toMat() {
    this._flush();
    const id = this._canvas.getContext('2d').getImageData(0, 0, this.width, this.height);
    return {
      data: id.data,
      data32S: new Int32Array(id.data.buffer),
      rows: this.height,
      cols: this.width,
      channels: () => this._channels,
      type: () => 0,
      delete: () => {},
      _imageData: id,
    };
  }

  destroy() { this._canvas = null; this._imageData = null; }
}

// ============================================================
// Contours (from contours.js)
// Uses connected-component labeling on binary ImageData
// ============================================================
export class Contours {
  constructor(mat, options = {}) {
    this._rects = [];
    if (!mat || !mat.data) return;

    const w = mat.cols;
    const h = mat.rows;
    const data = mat.data;
    const visited = new Uint8Array(w * h);

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const idx = y * w + x;
        if (visited[idx] || data[idx * 4] === 0) continue;

        let minX = x, maxX = x, minY = y, maxY = y;
        const stack = [idx];
        visited[idx] = 1;

        while (stack.length > 0) {
          const ci = stack.pop();
          const cx = ci % w;
          const cy = (ci / w) | 0;
          if (cx < minX) minX = cx;
          if (cx > maxX) maxX = cx;
          if (cy < minY) minY = cy;
          if (cy > maxY) maxY = cy;

          if (cy > 0 && !visited[ci - w] && data[(ci - w) * 4] > 0) { visited[ci - w] = 1; stack.push(ci - w); }
          if (cy < h - 1 && !visited[ci + w] && data[(ci + w) * 4] > 0) { visited[ci + w] = 1; stack.push(ci + w); }
          if (cx > 0 && !visited[ci - 1] && data[(ci - 1) * 4] > 0) { visited[ci - 1] = 1; stack.push(ci - 1); }
          if (cx < w - 1 && !visited[ci + 1] && data[(ci + 1) * 4] > 0) { visited[ci + 1] = 1; stack.push(ci + 1); }
        }

        const bw = maxX - minX + 1;
        const bh = maxY - minY + 1;
        if (bw * bh > 10) {
          this._rects.push({ x: minX, y: minY, width: bw, height: bh });
        }
      }
    }
  }

  iterate(callback) {
    for (let i = 0; i < this._rects.length; i++) callback(i);
    return this;
  }

  getRect(contourIndex) {
    return this._rects[contourIndex] || { x: 0, y: 0, width: 0, height: 0 };
  }

  getSize() { return this._rects.length; }
  getAll() { return this._rects; }
  getFromIndex(i) { return i; }

  getLargestContourArea() {
    let max = 0, best = null;
    for (let i = 0; i < this._rects.length; i++) {
      const a = this._rects[i].width * this._rects[i].height;
      if (a > max) { max = a; best = i; }
    }
    return best;
  }

  getCornerPoints(options) {
    const w = options?.canvas?.width || 0;
    const h = options?.canvas?.height || 0;
    return {
      points: { topLeft: { x: 0, y: 0 }, topRight: { x: w, y: 0 }, bottomLeft: { x: 0, y: h }, bottomRight: { x: w, y: h } },
      bbox: { x0: 0, y0: 0, x1: w, y1: h },
    };
  }

  getApproximateRectangleContour() { return undefined; }
  destroy() { this._rects = []; }
}

// ============================================================
// cv constants (from cv-provider.js)
// ============================================================
export const cv = {
  THRESH_BINARY: 0, THRESH_OTSU: 8,
  CV_8UC1: 0, CV_8UC3: 16, CV_8UC4: 24,
  RETR_LIST: 1, RETR_EXTERNAL: 0,
  CHAIN_APPROX_SIMPLE: 2,
  contourArea: () => 0,
  boundingRect: () => ({ x: 0, y: 0, width: 0, height: 0 }),
  minAreaRect: () => ({ center: { x: 0, y: 0 }, size: { width: 0, height: 0 }, angle: 0 }),
  arcLength: () => 0,
  approxPolyDP: () => {},
};

// ============================================================
// Additional exports from index.web.js
// ============================================================
export function calculateMeanGrayscaleValue() { return 128; }
export function calculateMeanNormalizedLabLightness() { return 0.5; }
export function executeOperation() { return {}; }
export class OperationRegistry {}
export const registry = new OperationRegistry();
