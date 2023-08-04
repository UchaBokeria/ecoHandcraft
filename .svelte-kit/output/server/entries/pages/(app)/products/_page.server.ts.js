import { p as prisma, a as pagination } from "../../../../chunks/prisma.js";
async function load({ url }) {
  return {
    page: url.searchParams.get("page") || 1,
    products: await prisma.products.findMany({
      ...pagination(url.searchParams.get("page") || 1)
    })
  };
}
export {
  load
};
