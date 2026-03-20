const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

async function build() {
  const distDir = path.join(__dirname, 'dist');

  // Clean dist
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true });
  }
  fs.mkdirSync(distDir, { recursive: true });

  const sharedConfig = {
    bundle: true,
    platform: 'browser',
    target: ['chrome120'],
    minify: false,
    sourcemap: false,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    alias: {
      'fs': './src/shims/fs.js',
      'path': './src/shims/path.js',
      'crypto': './src/shims/crypto.js',
      'os': './src/shims/os.js',
      // Canvas-based shim — real OpenCV can't run under MV3 CSP (Emscripten embind uses eval)
      'ppu-ocv/web': './src/shims/ppu-ocv-web.js',
      // WASM-only ort build — no new Function (the full bundle has embind eval)
      'onnxruntime-web': './node_modules/onnxruntime-web/dist/ort.wasm.min.mjs',
    },
    external: [
      'onnxruntime-node',
      'canvas',
    ],
    loader: {
      '.wasm': 'file',
    },
  };

  // Bundle popup.js (UI only, no heavy deps)
  console.log('Building popup.js...');
  await esbuild.build({
    ...sharedConfig,
    entryPoints: ['src/popup.js'],
    outfile: 'dist/popup.js',
    format: 'esm',
  });

  // Bundle offscreen.js (OCR engine)
  console.log('Building offscreen.js...');
  await esbuild.build({
    ...sharedConfig,
    entryPoints: ['src/offscreen.js'],
    outfile: 'dist/offscreen.js',
    format: 'esm',
  });

  // Bundle background.js (service worker)
  console.log('Building background.js...');
  await esbuild.build({
    entryPoints: ['src/background.js'],
    outfile: 'dist/background.js',
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: ['chrome120'],
    minify: false,
  });

  // Copy WASM files AND their .mjs glue scripts from onnxruntime-web
  const ortDist = path.join(__dirname, 'node_modules', 'onnxruntime-web', 'dist');
  const wasmFiles = fs.readdirSync(ortDist).filter(f =>
    f.startsWith('ort-wasm-simd-threaded') && (f.endsWith('.wasm') || f.endsWith('.mjs'))
  );
  for (const file of wasmFiles) {
    fs.copyFileSync(path.join(ortDist, file), path.join(distDir, file));
    console.log(`  Copied ${file}`);
  }

  // Copy static files
  const staticFiles = ['popup.html', 'popup.css', 'manifest.json', 'offscreen.html'];
  for (const file of staticFiles) {
    fs.copyFileSync(path.join(__dirname, file), path.join(distDir, file));
    console.log(`  Copied ${file}`);
  }

  // Copy icons
  const iconsDir = path.join(__dirname, 'icons');
  const distIconsDir = path.join(distDir, 'icons');
  fs.mkdirSync(distIconsDir, { recursive: true });
  for (const file of fs.readdirSync(iconsDir)) {
    fs.copyFileSync(path.join(iconsDir, file), path.join(distIconsDir, file));
    console.log(`  Copied icons/${file}`);
  }

  // Copy models
  const modelsDir = path.join(__dirname, 'models');
  const distModelsDir = path.join(distDir, 'models');
  fs.mkdirSync(distModelsDir, { recursive: true });
  for (const file of fs.readdirSync(modelsDir)) {
    fs.copyFileSync(path.join(modelsDir, file), path.join(distModelsDir, file));
    console.log(`  Copied models/${file}`);
  }

  console.log('\n✅ Build complete! Load "dist/" folder in chrome://extensions/');
}

build().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
