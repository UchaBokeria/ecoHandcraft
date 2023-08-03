import { prisma, pagination, json } from '$lib/server/prisma';

export async function GET({ url }) {
	return json(
		await prisma.products.findMany({
			where: { actived: true },
			...pagination(url.searchParams.get('page'))
		})
	);
}
