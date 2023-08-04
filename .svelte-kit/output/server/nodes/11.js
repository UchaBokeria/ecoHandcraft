import * as server from '../entries/pages/(app)/products/_page.server.ts.js';

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(app)/products/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(app)/products/+page.server.ts";
export const imports = ["_app/immutable/nodes/11.27a27a1c.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js","_app/immutable/chunks/http.37c70d3b.js","_app/immutable/chunks/store.24a303ad.js","_app/immutable/chunks/index.94a77569.js","_app/immutable/chunks/navigation.31bd4516.js","_app/immutable/chunks/singletons.a2b71402.js"];
export const stylesheets = [];
export const fonts = [];
