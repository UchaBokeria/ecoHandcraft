import { prisma, pagination } from '$lib/server/prisma';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url }) {
	return {
		page: url.searchParams.get('page') || 1,
		products: await prisma.products.findMany({
			...pagination(url.searchParams.get('page') || 1)
		})
	};
}
