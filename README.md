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
│   └── offscreen.js      # OCR engine (ppu-paddle-ocr + onnxruntime-web)
├── models/
│   ├── det.ort           # PP-OCRv6 small detection model
│   ├── rec.ort           # PP-OCRv6 small recognition model
│   └── dict.txt          # Character dictionary (unified multilingual)
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
# - det.ort (detection), rec.ort (recognition), dict.txt (dictionary)
# These are the PP-OCRv6 small models (the ppu-paddle-ocr v6 defaults) from
# ppu-paddle-ocr-models: detection/ort/PP-OCRv6_small_det.ort,
# recognition/ort/PP-OCRv6_small_rec.ort, recognition/ppocrv6_dict.txt

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
2. **Alias `onnxruntime-web`** → `ort.wasm.min.mjs` (WASM-only build, no `new Function`)
3. **Copy static assets** — the WASM binary + glue, models, icons, HTML/CSS

Since ppu-paddle-ocr v5.4.3, the web entry routes canvas access through its
platform provider, so the old `ppu-ocv/canvas` → `ppu-ocv/canvas-web` alias is
no longer needed — `ppu-paddle-ocr/web` bundles cleanly out of the box.

## Caveats & Workarounds

### 1. ONNX Runtime bundle selection

**Problem:** The default `onnxruntime-web` bundle (`ort.bundle.min.mjs`) includes WebGPU/WebGL backends that use Emscripten embind (`new Function`).

**Workaround:** Alias `onnxruntime-web` to `ort.wasm.min.mjs` — the WASM-only build with **zero** `new Function` calls. This limits execution to the WASM backend only (no WebGPU), which is fine for OCR. Only `ort-wasm-simd-threaded.mjs`/`.wasm` are copied into `dist/` — the jsep/jspi/asyncify variants are never loaded by the WASM-only build.

### 2. Models are bundled locally

MV3 CSP also restricts `connect-src`, so models cannot be fetched from GitHub at runtime. The PP-OCRv6 small models (~31MB total, `.ort` format for faster session creation) are included in the `dist/` folder and loaded via `chrome.runtime.getURL()`.

### 3. Offscreen document for persistence

Chrome extension popups are destroyed when closed. To avoid re-initializing the OCR engine on every popup open (~5s), the engine runs in a persistent offscreen document. The popup just polls for readiness and sends capture requests.

## CSP Reference

The extension uses this CSP in `manifest.json`:

```json
"content_security_policy": {
  "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
}
```

- `'self'` — only scripts from the extension's own origin
- `'wasm-unsafe-eval'` — allows `WebAssembly.compile`/`instantiate` (needed for ONNX Runtime)
- No `'unsafe-eval'` — MV3 forbids it; this is why the `ort.wasm.min.mjs` (no-embind) variant is required
