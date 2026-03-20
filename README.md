# PaddleOCR Chrome Extension

A Chrome Manifest V3 extension that captures webpage screenshots and extracts text using [ppu-paddle-ocr](https://www.npmjs.com/package/ppu-paddle-ocr). Displays bounding boxes on detected text regions and provides copyable results in both list and JSON format.

## Architecture

```
popup.html/js  →  background.js (service worker)  →  offscreen.js (OCR engine)
   (UI only)        (captures screenshot,              (persistent, initializes once,
                      manages offscreen doc)             runs ONNX + OCR inference)
```

- **Popup** — UI only; sends messages to the background service worker, renders results
- **Background** — Service worker; captures `chrome.tabs.captureVisibleTab`, creates/manages the offscreen document, routes messages
- **Offscreen** — Persistent offscreen document; loads ONNX Runtime + ppu-paddle-ocr, initializes once and stays alive across popup opens

## Project Structure

```
├── src/
│   ├── popup.js          # Popup UI logic (message passing, rendering)
│   ├── background.js     # Service worker (screenshot + offscreen management)
│   ├── offscreen.js      # OCR engine (ppu-paddle-ocr + onnxruntime-web)
│   └── shims/
│       ├── ppu-ocv-web.js  # Canvas-based replacement for ppu-ocv/web (see Caveats)
│       ├── fs.js           # Empty Node.js fs shim
│       ├── path.js         # Empty Node.js path shim
│       ├── crypto.js       # Empty Node.js crypto shim
│       └── os.js           # Empty Node.js os shim
├── models/
│   ├── det.onnx          # PP-OCRv5 detection model
│   ├── rec.onnx          # PP-OCRv5 recognition model
│   └── dict.txt          # Character dictionary
├── icons/                # Extension icons (16/48/128px)
├── popup.html            # Popup markup
├── popup.css             # Popup styles
├── offscreen.html        # Minimal offscreen document
├── manifest.json         # MV3 manifest
├── build.js              # esbuild bundler script
└── package.json
```

## Setup

```bash
# Install dependencies
npm install

# Download OCR models into models/
# - det.onnx (detection), rec.onnx (recognition), dict.txt (dictionary)
# These are PP-OCRv5 mobile models from ppu-paddle-ocr-models

# Build the extension
node build.js

# Load in Chrome:
# 1. Go to chrome://extensions/
# 2. Enable Developer mode
# 3. Click "Load unpacked" → select the dist/ folder
```

## Build System

The `build.js` script uses esbuild to:

1. **Bundle 3 entry points** — `popup.js`, `offscreen.js`, `background.js`
2. **Alias incompatible modules** at build time:
   - `ppu-ocv/web` → Canvas-based shim (OpenCV.js violates CSP)
   - `onnxruntime-web` → `ort.wasm.min.mjs` (WASM-only build, no `new Function`)
   - Node.js builtins (`fs`, `path`, `crypto`, `os`) → empty shims
3. **Copy static assets** — WASM files, models, icons, HTML/CSS

## Caveats & Workarounds

### 1. OpenCV.js is incompatible with MV3 CSP

Chrome Extension Manifest V3 enforces `script-src 'self' 'wasm-unsafe-eval'` — no `unsafe-eval` allowed.

**Problem:** `ppu-ocv` depends on `@techstark/opencv-js`, which is an Emscripten build of OpenCV. Emscripten's **embind** system uses `new Function()` and other dynamic code evaluation patterns internally. This violates CSP and **cannot be fixed** with build flags alone — it's baked into how embind generates JS↔WASM bindings.

We also tested [`opencv-js-wasm`](https://github.com/ttop32/opencv-js-wasm) — same issue (Emscripten embind).

**Workaround:** A canvas-based shim (`src/shims/ppu-ocv-web.js`) replaces `ppu-ocv/web` at build time via esbuild alias. It reimplements the subset of ppu-ocv's API that `ppu-paddle-ocr` uses:
- `ImageProcessor` — resize, grayscale, threshold, rotate (native Canvas2D)
- `CanvasToolkitBase` — crop, isDirty, drawLine (already pure Canvas2D in ppu-ocv)
- `Contours` — connected-component labeling (replaces OpenCV findContours)
- Platform registration — webPlatform with OffscreenCanvas support

### 2. ONNX Runtime bundle selection

**Problem:** The default `onnxruntime-web` bundle (`ort.bundle.min.mjs`) includes WebGPU/WebGL backends that use Emscripten embind (`new Function`).

**Workaround:** Alias `onnxruntime-web` to `ort.wasm.min.mjs` — the WASM-only build with **zero** `new Function` calls. This limits execution to the WASM backend only (no WebGPU), which is fine for OCR.

### 3. Models are bundled locally

MV3 CSP also restricts `connect-src`, so models cannot be fetched from GitHub at runtime. The ONNX models (~12MB total) are included in the `dist/` folder and loaded via `chrome.runtime.getURL()`.

### 4. Offscreen document for persistence

Chrome extension popups are destroyed when closed. To avoid re-initializing the OCR engine on every popup open (~5s), the engine runs in a persistent offscreen document. The popup just polls for readiness and sends capture requests.

## Library-Level TODOs

These changes to `ppu-ocv` and `ppu-paddle-ocr` would eliminate the need for shims:

### ppu-ocv

- [ ] **Lazy-load OpenCV** — Don't import `@techstark/opencv-js` at the module level. Only load it when methods that actually need it are called (`Contours`, `executeOperation`). Most of `CanvasToolkitBase` and `ImageProcessor.prepareCanvas` are already pure Canvas2D.
- [ ] **Export a CSP-safe subset** — e.g. `ppu-ocv/web/lite` that provides `CanvasToolkitBase`, `ImageProcessor` (Canvas-only ops), and platform registration without any OpenCV dependency.
- [ ] **Pluggable OpenCV provider** — Allow users to inject their own CV backend (e.g. a future Emscripten build without embind, or a WASM-native OpenCV alternative).

### ppu-paddle-ocr

- [ ] **Accept a `platform.imageProcessor` override** — Allow users to pass their own ImageProcessor/Contours/CanvasToolkit implementations, so extensions can provide CSP-safe alternatives without module aliasing.
- [ ] **Reduce OpenCV dependency surface** — Audit which OCR pipeline steps actually require OpenCV vs. Canvas2D. Detection preprocessing (resize, normalize) and recognition cropping don't need OpenCV at all.

## CSP Reference

The extension uses this CSP in `manifest.json`:

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
}
```

- `'self'` — only scripts from the extension's own origin
- `'wasm-unsafe-eval'` — allows `WebAssembly.compile`/`instantiate` (needed for ONNX Runtime)
- No `'unsafe-eval'` — MV3 forbids it; this is why OpenCV.js (Emscripten embind) cannot be used
