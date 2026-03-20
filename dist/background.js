var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/background.js
var require_background = __commonJS({
  "src/background.js"() {
    async function ensureOffscreen() {
      const existingContexts = await chrome.runtime.getContexts({
        contextTypes: ["OFFSCREEN_DOCUMENT"]
      });
      if (existingContexts.length > 0) {
        return;
      }
      await chrome.offscreen.createDocument({
        url: "offscreen.html",
        reasons: ["WORKERS"],
        justification: "OCR inference using ONNX Runtime WASM"
      });
    }
    chrome.runtime.onInstalled.addListener(() => {
      ensureOffscreen();
    });
    chrome.runtime.onStartup.addListener(() => {
      ensureOffscreen();
    });
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === "CAPTURE_AND_OCR") {
        handleCaptureAndOCR().then(sendResponse).catch((err) => {
          sendResponse({ error: err.message });
        });
        return true;
      }
      if (message.type === "GET_STATUS") {
        ensureOffscreen().then(() => {
          chrome.runtime.sendMessage({ type: "GET_STATUS_OFFSCREEN" }, (response) => {
            sendResponse(response || { status: "unknown" });
          });
        });
        return true;
      }
      if (message.type === "OCR_STATUS_UPDATE") {
        return false;
      }
    });
    async function handleCaptureAndOCR() {
      await ensureOffscreen();
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const dataUrl = await chrome.tabs.captureVisibleTab(null, { format: "png" });
      return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage(
          { type: "RUN_OCR", dataUrl },
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
  }
});
export default require_background();
