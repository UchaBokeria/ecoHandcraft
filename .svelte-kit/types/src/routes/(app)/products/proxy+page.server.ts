// @ts-nocheck
import { prisma, pagination } from '$lib/server/prisma';

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export async function load({ url }) {
	return {
		page: url.searchParams.get('page') || 1,
		products: await prisma.products.findMany({
			...pagination(url.searchParams.get('page') || 1)
		})
	};
}
