/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from './store';

let AuthCreds: { email: string; token: string } | null;
User.subscribe((v: any) => (AuthCreds = { email: v?.email, token: v?.token }));

export class http {
	static headers = {
		'X-User': `${AuthCreds?.email}`,
		'Content-Type': 'application/json',
		Authorization: `Bearer ${AuthCreds?.token}`
	};

	static async get(url: string, params = {}) {
		url += `?${Object.entries(params).map((e) => {
			return `${e[0]}=${e[1]}`;
		})}`;

		const response = await fetch(url, { method: 'GET', headers: this.headers });
		return await this.response(response);
	}

	static async post(url: string, body: any = {}) {
		const response = await fetch(url, {
			method: 'POST',
			headers: this.headers,
			body: JSON.stringify(body)
		});
		return await this.response(response);
	}

	static async put(url: string, body: any = {}) {
		const response = await fetch(url, {
			method: 'PUT',
			headers: this.headers,
			body: JSON.stringify(body)
		});
		return await this.response(response);
	}

	static async delete(url: string, body: any = {}) {
		const response = await fetch(url, {
			method: 'DELETE',
			headers: this.headers,
			body: JSON.stringify(body)
		});
		return await this.response(response);
	}

	/* Response warper */
	static response = async (response: any) => {
		return {
			status: response.status,
			result: await response.json()
		};
	};
}
