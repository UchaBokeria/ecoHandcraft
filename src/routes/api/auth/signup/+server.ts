import { mail } from '$lib/server/mail.js';
import { default as bcrypt } from 'bcryptjs';
import { generator } from '$lib/server/generator';
import { prisma, json, error } from '$lib/server/prisma';

export async function POST({ request }) {
	const { email, passcode, fullname } = await request.json();
	const match = await prisma.users.findUnique({ where: { email } });

	if (match) throw error(403, 'Email Already Inuse');
	const confirmedToken = generator.token();

	const sent = await mail({
		to: email,
		subject: `Welcome to Greenroom.io, ${fullname}!`,
		body: `<p style="color: black !important">Hey ${fullname},<br><br>
				We're thrilled to have you join Greenroom.io! We can't wait to see the fantastic opportunities that'll come your way.<br><br>
				To kick things off, create your startup profile and submit it for review. Don't worry, we'll make sure your profile is anonymized before publishing, keeping your privacy intact.<br><br>
				Got any questions? Just drop a line to our support team at hello@greenroom.io.<br><br>
				Welcome to our amazing Greenroom.io community!<br>
				To verify your account, click <a href="https://app.greenroom.io/confirm/${email}/${confirmedToken}"> here </a><br><br>
				Cheers,<br>
				Ditlev <br>
				& The Greenroom.io Team</p>`
	});

	if (!sent) throw error(500, `Email has not been sent`);

	const token = generator.token();
	const password = await bcrypt.hash(passcode, 10);

	const user = await prisma.users.create({
		select: { id: true, email: true, token: true, fullname: true, confirmed: false },
		data: { confirmed: false, email, password, fullname, token, confirmedToken }
	});

	return json(user);
}
