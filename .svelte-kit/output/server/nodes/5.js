import * as universal from '../entries/pages/(app)/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/(app)/+page.ts";
export const imports = ["_app/immutable/nodes/5.a62e6277.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js"];
export const stylesheets = [];
export const fonts = [];
