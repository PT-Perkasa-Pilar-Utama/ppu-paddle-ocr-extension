// Empty shim for Node.js crypto module
export default {};
export const createHash = () => ({ update: () => ({ digest: () => '' }) });
