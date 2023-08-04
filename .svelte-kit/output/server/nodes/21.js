

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/payments/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/21.5c5c7b6f.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js"];
export const stylesheets = [];
export const fonts = [];
