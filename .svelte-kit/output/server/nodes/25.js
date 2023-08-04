

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/api/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.2a2ff137.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js"];
export const stylesheets = [];
export const fonts = [];
