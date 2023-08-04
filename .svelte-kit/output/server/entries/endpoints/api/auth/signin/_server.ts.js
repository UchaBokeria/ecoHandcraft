import bcrypt from "bcryptjs";
import { p as prisma } from "../../../../../chunks/prisma.js";
import { e as error, j as json } from "../../../../../chunks/index.js";
async function POST({ request }) {
  const { email, passcode } = await request.json();
  const match = await prisma.users.findFirst({
    where: { email },
    select: { id: true, email: true, password: true, token: true, fullname: true, confirmed: true }
  });
  if (!match?.password)
    throw error(401, "Wrong credentials");
  if (!match?.confirmed)
    throw error(403, "Please confirm your account, by your email");
  const compare = await bcrypt.compare(passcode, match.password);
  if (!compare)
    throw error(401);
  return json({ ...match, password: void 0 });
}
export {
  POST
};
