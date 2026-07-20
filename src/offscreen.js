// Offscreen OCR Engine — runs once, persists across popup opens
import { PaddleOcrService } from 'ppu-paddle-ocr/web';
import * as ort from 'onnxruntime-web';

// Configure ONNX Runtime for extension environment
ort.env.wasm.numThreads = 1;
ort.env.wasm.proxy = false;
ort.env.wasm.wasmPaths = chrome.runtime.getURL('/');

let ocrService = null;
let initStatus = 'initializing'; // 'initializing' | 'ready' | 'error'
let initError = null;

async function initOCR() {
  console.log('[OCR Offscreen] Starting initialization...');
  try {
    ocrService = new PaddleOcrService({
      model: {
        detection: chrome.runtime.getURL('models/det.ort'),
        recognition: chrome.runtime.getURL('models/rec.ort'),
        charactersDictionary: chrome.runtime.getURL('models/dict.txt'),
      },
      session: {
        executionProviders: ['wasm'],
      },
    });

    console.log('[OCR Offscreen] Calling initialize()...');
    await ocrService.initialize();
    console.log('[OCR Offscreen] Initialized. Running warmup...');

    // Warmup
    const warmupCanvas = new OffscreenCanvas(64, 64);
    const wctx = warmupCanvas.getContext('2d');
    wctx.fillStyle = 'white';
    wctx.fillRect(0, 0, 64, 64);
    wctx.fillStyle = 'black';
    wctx.font = '20px serif';
    wctx.fillText('A', 25, 40);
    await ocrService.recognize(warmupCanvas, { flatten: true }).catch(() => {});

    initStatus = 'ready';
    console.log('[OCR Offscreen] ✅ Ready!');
  } catch (err) {
    initStatus = 'error';
    initError = err.message;
    console.error('[OCR Offscreen] ❌ Init failed:', err);
  }
}

// Handle messages from background/popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_STATUS_OFFSCREEN') {
    sendResponse({ status: initStatus, error: initError });
    return false;
  }

  if (message.type === 'RUN_OCR') {
    if (initStatus !== 'ready') {
      sendResponse({ error: `OCR not ready (${initStatus})` });
      return false;
    }

    runOCR(message.dataUrl).then(sendResponse).catch(err => {
      sendResponse({ error: err.message });
    });
    return true; // Keep channel open for async
  }
});

async function runOCR(dataUrl) {
  console.log('[OCR Offscreen] Running OCR...');
  const t0 = performance.now();

  // Load image into OffscreenCanvas
  const response = await fetch(dataUrl);
  const blob = await response.blob();
  const bitmap = await createImageBitmap(blob);

  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0);
  bitmap.close();

  // Run OCR
  const result = await ocrService.recognize(canvas, { flatten: true, noCache: true });
  const elapsed = (performance.now() - t0).toFixed(1);

  console.log(`[OCR Offscreen] Done in ${elapsed}ms — ${result.results?.length || 0} regions`);

  return {
    result,
    elapsed,
    width: canvas.width,
    height: canvas.height,
  };
}

// Auto-initialize on load
initOCR();
