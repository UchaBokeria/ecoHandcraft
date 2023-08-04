import * as server from '../entries/pages/(auth)/_layout.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(auth)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(auth)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/3.09b5da95.js","_app/immutable/chunks/scheduler.516bd69e.js","_app/immutable/chunks/index.56b521b0.js","_app/immutable/chunks/header.7be87dfd.js","_app/immutable/chunks/navigation.31bd4516.js","_app/immutable/chunks/singletons.a2b71402.js","_app/immutable/chunks/index.94a77569.js","_app/immutable/chunks/store.24a303ad.js"];
export const stylesheets = [];
export const fonts = [];
