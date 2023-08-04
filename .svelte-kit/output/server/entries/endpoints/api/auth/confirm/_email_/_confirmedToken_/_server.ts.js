import { e as error, r as redirect } from "../../../../../../../chunks/index.js";
import { p as prisma } from "../../../../../../../chunks/prisma.js";
async function GET({ params }) {
  const { email, confirmedToken } = params;
  const user = await prisma.users.updateMany({
    data: { confirmed: true, confirmedToken: null },
    where: { email, confirmedToken }
  });
  if (!user)
    throw error(500, `Could not confirm`);
  throw redirect(307, "/signin");
}
export {
  GET
};
