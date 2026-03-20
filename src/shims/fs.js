// Empty shims for Node.js built-in modules
// These are referenced by ppu-ocv's Node.js code paths but never called in browser
export default {};
export const readFileSync = () => { throw new Error('fs not available in browser'); };
export const writeFileSync = () => { throw new Error('fs not available in browser'); };
export const existsSync = () => false;
export const mkdirSync = () => {};
export const readdirSync = () => [];
