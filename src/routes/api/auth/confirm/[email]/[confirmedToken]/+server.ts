import { redirect } from '@sveltejs/kit';
import { prisma, json, error } from '$lib/server/prisma';

export async function GET({ params }) {
	const { email, confirmedToken } = params;

	const user = await prisma.users.updateMany({
		data: { confirmed: true, confirmedToken: null },
		where: { email, confirmedToken }
	});

	if (!user) throw error(500, `Could not confirm`);
	throw redirect(307, '/signin');
}
