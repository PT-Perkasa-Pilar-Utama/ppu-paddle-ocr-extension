// Background service worker
// Manages screenshot capture + offscreen document for OCR

let offscreenReady = false;

// Create offscreen document for OCR processing
async function ensureOffscreen() {
  const existingContexts = await chrome.runtime.getContexts({
    contextTypes: ['OFFSCREEN_DOCUMENT'],
  });

  if (existingContexts.length > 0) {
    return;
  }

  await chrome.offscreen.createDocument({
    url: 'offscreen.html',
    reasons: ['WORKERS'],
    justification: 'OCR inference using ONNX Runtime WASM',
  });
}

// Initialize offscreen on extension install/startup
chrome.runtime.onInstalled.addListener(() => {
  ensureOffscreen();
});

chrome.runtime.onStartup.addListener(() => {
  ensureOffscreen();
});

// Handle messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'CAPTURE_AND_OCR') {
    handleCaptureAndOCR().then(sendResponse).catch(err => {
      sendResponse({ error: err.message });
    });
    return true; // Keep channel open for async response
  }

  if (message.type === 'GET_STATUS') {
    // Forward to offscreen
    ensureOffscreen().then(() => {
      chrome.runtime.sendMessage({ type: 'GET_STATUS_OFFSCREEN' }, (response) => {
        sendResponse(response || { status: 'unknown' });
      });
    });
    return true;
  }

  if (message.type === 'OCR_STATUS_UPDATE') {
    // Forward status from offscreen to popup
    // (popup listens via its own onMessage handler)
    return false;
  }
});

async function handleCaptureAndOCR() {
  // 1. Ensure offscreen is ready
  await ensureOffscreen();

  // 2. Capture visible tab
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const dataUrl = await chrome.tabs.captureVisibleTab(null, { format: 'png' });

  // 3. Send to offscreen for OCR
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { type: 'RUN_OCR', dataUrl },
      (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else if (response?.error) {
          reject(new Error(response.error));
        } else {
          resolve(response);
        }
      }
    );
  });
}
