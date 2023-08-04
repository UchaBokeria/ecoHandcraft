import { g as generator, m as mail } from "../../../../../chunks/generator.js";
import bcrypt from "bcryptjs";
import { p as prisma } from "../../../../../chunks/prisma.js";
import { e as error, j as json } from "../../../../../chunks/index.js";
async function POST({ request }) {
  const { email, passcode, fullname } = await request.json();
  const match = await prisma.users.findUnique({ where: { email } });
  if (match)
    throw error(403, "Email Already Inuse");
  const confirmedToken = generator.token();
  const sent = await mail();
  if (!sent)
    throw error(500, `Email has not been sent`);
  const token = generator.token();
  const password = await bcrypt.hash(passcode, 10);
  const user = await prisma.users.create({
    select: { id: true, email: true, token: true, fullname: true, confirmed: false },
    data: { confirmed: false, email, password, fullname, token, confirmedToken }
  });
  return json(user);
}
export {
  POST
};
