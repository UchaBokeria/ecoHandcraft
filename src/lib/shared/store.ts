/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export interface UserInterface {
	id: string;
	email: string;
	token: string;
	fullname: string;
}

const defaultUserValue: any =
	browser && window.localStorage.getItem('User') ? window.localStorage.getItem('User') : null;

const User = writable<UserInterface | null>(defaultUserValue ? JSON.parse(defaultUserValue) : null);

User.subscribe(
	(value: UserInterface | null) =>
		browser && window.localStorage.setItem('User', JSON.stringify(value))
);

export { User };
