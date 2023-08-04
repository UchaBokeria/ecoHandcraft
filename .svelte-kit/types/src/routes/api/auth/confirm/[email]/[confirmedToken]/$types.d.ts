import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = { email: string; confirmedToken: string }
type RouteId = '/api/auth/confirm/[email]/[confirmedToken]';

export type EntryGenerator = () => Promise<Array<RouteParams>> | Array<RouteParams>;
export type RequestHandler = Kit.RequestHandler<RouteParams, RouteId>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;