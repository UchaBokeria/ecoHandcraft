

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/cart/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.bda0499f.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js"];
export const stylesheets = [];
export const fonts = [];
