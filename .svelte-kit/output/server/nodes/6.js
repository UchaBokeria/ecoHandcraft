

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.3b1553ba.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js"];
export const stylesheets = [];
export const fonts = [];
