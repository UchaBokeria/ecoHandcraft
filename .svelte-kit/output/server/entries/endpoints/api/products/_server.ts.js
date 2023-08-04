import { p as prisma, a as pagination } from "../../../../chunks/prisma.js";
import { j as json } from "../../../../chunks/index.js";
async function GET({ url }) {
  return json(
    await prisma.products.findMany({
      where: { actived: true },
      ...pagination(url.searchParams.get("page"))
    })
  );
}
export {
  GET
};
