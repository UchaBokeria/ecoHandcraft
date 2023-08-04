import { g as generator, m as mail } from "../../../../../../chunks/generator.js";
import { p as prisma } from "../../../../../../chunks/prisma.js";
import { e as error, j as json } from "../../../../../../chunks/index.js";
async function POST({ params }) {
  const { email } = params;
  const user = await prisma.users.findUnique({ where: { email } });
  if (!user)
    throw error(403, "Bad parameter, email is wrong");
  const resetToken = generator.token();
  const reset = await prisma.users.update({
    where: { email },
    data: { reset: true, resetToken }
  });
  if (!reset)
    throw error(500, "something went wrong, user's confirmation status was not updated");
  const sent = await mail({
    to: email,
    subject: "Reset Your Greenroom.io Password",
    body: `<p style="color: black !important">
		Hello ${user?.fullname || ""}, <br><br>
		We received a request to reset the password for your Greenroom.io account. No worries, it happens to the best of us! <br><br>
		To create a new password, simply click the link below: <br><br>
		<a href="https://app.greenroom.io/changePassword/${email}/${resetToken}">https://app.greenroom.io/changePassword/${email}/${resetToken}</a> <br><br>
		This link will remain valid for the next 24 hours. If you didn't request this password reset, please ignore this email, and rest assured, your account is safe. <br><br>
		For any questions or if you're facing issues, feel free to reply to this email. We're here to assist you. <br><br>
		Remember, your security is our priority! <br><br>
		Best, <br><br>
		Ditlev <br><br>
		Greenroom.io Support Team`
  });
  if (!sent)
    throw error(500, `Email has not been sent`);
  return json({ message: "Email is sent to you, please create a new password" });
}
export {
  POST
};
