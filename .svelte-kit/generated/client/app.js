export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [3];

export const dictionary = {
		"/(app)": [5,[2]],
		"/(app)/about": [6,[2]],
		"/admin": [~18,[4]],
		"/admin/dashboard": [19,[4]],
		"/admin/orders": [20,[4]],
		"/admin/payments": [21,[4]],
		"/admin/products": [22,[4]],
		"/admin/reports": [23,[4]],
		"/admin/settings": [24,[4]],
		"/api": [25],
		"/(app)/cart": [7,[2]],
		"/(auth)/changePassword/[email]/[resetToken]": [14,[3]],
		"/(app)/contact": [8,[2]],
		"/(app)/deilvery": [9,[2]],
		"/(app)/orders": [10,[2]],
		"/(app)/products": [~11,[2]],
		"/(app)/products/[id]": [12,[2]],
		"/(auth)/reset": [15,[3]],
		"/(auth)/signin": [16,[3]],
		"/(auth)/signup": [17,[3]],
		"/(app)/terms": [13,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';