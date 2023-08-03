import { prisma, pagination, json } from '$lib/server/prisma';

export function auth() {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		const originalMethod = descriptor.value;

		descriptor.value = async function (...args: any[]) {
			const request = args[0];

			// console.log('>', request);

			const autho = await isAuthorized(request);
			if (!autho) {
				return new Response(null, { status: 401, statusText: 'Unauthorized' });
			}
			console.log('autho', autho);

			return originalMethod.apply(this, { ...args, user: autho });
		};

		return descriptor;
	};
}

export async function isAuthorized(request: any) {
	const { token, email } = getAuthCreds(request);
	const match = await prisma.users.findFirst({ where: { token, email, actived: true } });
	console.log({ where: { token, email, actived: true } }, match);

	return match ? match : null;
}

export function getAuthCreds(request: any) {
	return {
		email: request.headers['x-user']?.value,
		token: getBearerToken(request)
	};
}

export function getBearerToken(request: any) {
	const authHeader = request?.headers?.authorization?.value;
	if (authHeader && authHeader.startsWith('Bearer ')) {
		console.log('token', authHeader.substring(7));

		return authHeader.substring(7); // Extract the token part after 'Bearer '
	}

	return null; // Return null if no Bearer token is found
}
