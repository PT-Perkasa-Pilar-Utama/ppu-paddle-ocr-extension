// Popup UI — communicates with offscreen document via background service worker
// No OCR initialization here — the offscreen document handles that persistently

// DOM references
const btnCapture = document.getElementById('btn-capture');
const btnCaptureText = document.getElementById('btn-capture-text');
const statusDot = document.getElementById('status-dot');
const statusText = document.getElementById('status-text');
const screenshotCanvas = document.getElementById('screenshot-canvas');
const overlayCanvas = document.getElementById('overlay-canvas');
const canvasContainer = document.getElementById('canvas-container');
const placeholder = document.getElementById('placeholder');
const timingBadge = document.getElementById('timing-badge');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const resultsList = document.getElementById('results-list');
const resultsCount = document.getElementById('results-count');
const emptyState = document.getElementById('empty-state');
const jsonResult = document.getElementById('json-result');
const btnCopyJson = document.getElementById('btn-copy-json');
const copyLabel = document.getElementById('copy-label');

// --- Status ---
function setStatus(state, text) {
  statusDot.className = 'status-dot ' + state;
  statusText.textContent = text;
}

function setProgress(indeterminate) {
  if (indeterminate) {
    progressBar.classList.add('indeterminate');
    progressFill.style.width = '30%';
  } else {
    progressBar.classList.remove('indeterminate');
    progressFill.style.width = '0%';
  }
}

// --- Tabs ---
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`tab-${e.target.dataset.tab}`).classList.add('active');
  });
});

// --- Copy JSON ---
btnCopyJson.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(jsonResult.textContent);
    copyLabel.textContent = 'Copied!';
    btnCopyJson.classList.add('copied');
    setTimeout(() => {
      copyLabel.textContent = 'Copy';
      btnCopyJson.classList.remove('copied');
    }, 1500);
  } catch {
    console.error('Copy failed');
  }
});

// --- Check OCR readiness ---
async function checkStatus() {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ type: 'GET_STATUS' }, (response) => {
      resolve(response || { status: 'unknown' });
    });
  });
}

async function waitForReady() {
  setStatus('loading', 'Initializing OCR…');
  setProgress(true);

  // Poll every 500ms until ready
  while (true) {
    const resp = await checkStatus();
    if (resp.status === 'ready') {
      setStatus('ready', 'Ready');
      setProgress(false);
      btnCapture.disabled = false;
      return;
    } else if (resp.status === 'error') {
      setStatus('error', 'Init failed: ' + (resp.error || 'unknown'));
      setProgress(false);
      return;
    }
    // Still initializing, wait and retry
    await new Promise(r => setTimeout(r, 500));
  }
}

// --- Draw Bounding Boxes ---
function drawBoundingBoxes(results) {
  if (!results || !screenshotCanvas.width) return;

  const ctx = overlayCanvas.getContext('2d');
  ctx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

  const lineWidth = Math.max(2, Math.floor(overlayCanvas.width / 500));
  ctx.strokeStyle = 'rgba(239, 68, 68, 1)';
  ctx.lineWidth = lineWidth;

  results.forEach((item, i) => {
    const box = item.box;
    if (!box) return;

    ctx.beginPath();
    ctx.rect(box.x, box.y, box.width, box.height);
    ctx.stroke();

    const labelSize = Math.max(14, lineWidth * 10);
    const label = (i + 1).toString();
    ctx.font = `bold ${labelSize * 0.75}px monospace`;
    const textWidth = ctx.measureText(label).width;

    ctx.fillStyle = 'rgba(239, 68, 68, 0.9)';
    ctx.fillRect(box.x, box.y - labelSize, Math.max(labelSize, textWidth + 8), labelSize);

    ctx.fillStyle = '#ffffff';
    ctx.textBaseline = 'top';
    ctx.fillText(label, box.x + 4, box.y - labelSize + 2);
  });
}

// --- Populate Results ---
function showResults(result, elapsed) {
  const items = result.results || [];

  resultsList.innerHTML = '';
  emptyState.style.display = 'none';

  if (items.length > 0) {
    resultsCount.style.display = 'block';
    resultsCount.textContent = `${items.length} region${items.length !== 1 ? 's' : ''} · ${elapsed}ms`;

    items.forEach((item, i) => {
      const li = document.createElement('li');
      li.className = 'result-item fade-in';
      li.style.animationDelay = `${i * 30}ms`;
      li.innerHTML = `
        <span class="result-text"><span class="result-index">${i + 1}</span>${escapeHtml(item.text)}</span>
        <span class="result-conf">score: ${item.confidence.toFixed(4)}</span>
      `;
      resultsList.appendChild(li);
    });
  } else {
    resultsCount.style.display = 'none';
    const li = document.createElement('li');
    li.className = 'result-item';
    li.innerHTML = `<span class="result-text" style="color:var(--warning);">No text detected.</span>`;
    resultsList.appendChild(li);
  }

  jsonResult.textContent = JSON.stringify(result, null, 2);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Main Capture + Recognize Flow ---
btnCapture.addEventListener('click', async () => {
  btnCapture.disabled = true;
  btnCaptureText.textContent = 'Processing…';
  setStatus('loading', 'Capturing & recognizing…');
  setProgress(true);

  resultsList.innerHTML = '';
  resultsCount.style.display = 'none';
  emptyState.style.display = 'none';
  timingBadge.style.display = 'none';

  try {
    // Send capture + OCR request to background → offscreen
    const response = await new Promise((resolve, reject) => {
      chrome.runtime.sendMessage({ type: 'CAPTURE_AND_OCR' }, (resp) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
        } else if (resp?.error) {
          reject(new Error(resp.error));
        } else {
          resolve(resp);
        }
      });
    });

    const { result, elapsed, width, height } = response;

    // Draw screenshot from the dataUrl we got back
    // Re-capture for display (the offscreen already did OCR)
    const dataUrl = await new Promise((resolve, reject) => {
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, (url) => {
        if (chrome.runtime.lastError) reject(new Error(chrome.runtime.lastError.message));
        else resolve(url);
      });
    });

    const img = new Image();
    img.src = dataUrl;
    await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; });

    screenshotCanvas.width = img.width;
    screenshotCanvas.height = img.height;
    overlayCanvas.width = img.width;
    overlayCanvas.height = img.height;

    const ctx = screenshotCanvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    canvasContainer.style.display = 'flex';
    placeholder.style.display = 'none';

    // Draw bboxes + show results
    drawBoundingBoxes(result.results);
    showResults(result, elapsed);

    timingBadge.textContent = `${elapsed} ms`;
    timingBadge.style.display = 'block';

    setStatus('ready', `Done in ${elapsed}ms`);
    setProgress(false);
  } catch (err) {
    console.error('Capture/OCR error:', err);
    setStatus('error', err.message);
    setProgress(false);
  } finally {
    btnCapture.disabled = false;
    btnCaptureText.textContent = 'Capture & Recognize';
  }
});

// --- Boot: just check status, no OCR init ---
waitForReady();
