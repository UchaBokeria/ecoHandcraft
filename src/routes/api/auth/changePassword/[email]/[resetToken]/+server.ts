import { default as bcrypt } from 'bcryptjs';
import { prisma, json, error } from '$lib/server/prisma';

export async function POST({ params, request }) {
	const { email, resetToken } = params;
	const { newPassword } = await request.json();

	const password = await bcrypt.hash(newPassword, 10);
	const user = await prisma.users.updateMany({
		where: { email, resetToken },
		data: { password, reset: false, resetToken: null }
	});

	if (!user) throw error(500, `Could not reset`);
	return json(user);
}
