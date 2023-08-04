

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.254d7bee.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js","_app/immutable/chunks/stores.6cf9bac2.js","_app/immutable/chunks/singletons.a2b71402.js","_app/immutable/chunks/index.94a77569.js"];
export const stylesheets = [];
export const fonts = [];
