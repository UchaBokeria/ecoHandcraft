import bcrypt from "bcryptjs";
import { p as prisma } from "../../../../../../../chunks/prisma.js";
import { e as error, j as json } from "../../../../../../../chunks/index.js";
async function POST({ params, request }) {
  const { email, resetToken } = params;
  const { newPassword } = await request.json();
  const password = await bcrypt.hash(newPassword, 10);
  const user = await prisma.users.updateMany({
    where: { email, resetToken },
    data: { password, reset: false, resetToken: null }
  });
  if (!user)
    throw error(500, `Could not reset`);
  return json(user);
}
export {
  POST
};
