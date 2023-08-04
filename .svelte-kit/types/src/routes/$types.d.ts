import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(app)" | "/(app)/about" | "/(app)/cart" | "/(app)/contact" | "/(app)/deilvery" | "/(app)/orders" | "/(app)/products" | "/(app)/products/[id]" | "/(app)/terms" | "/(auth)/changePassword/[email]/[resetToken]" | "/(auth)/reset" | "/(auth)/signin" | "/(auth)/signup" | "/admin" | "/admin/dashboard" | "/admin/orders" | "/admin/payments" | "/admin/products" | "/admin/reports" | "/admin/settings" | "/api" | null
type LayoutParams = RouteParams & { id?: string,email?: string,resetToken?: string }
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;