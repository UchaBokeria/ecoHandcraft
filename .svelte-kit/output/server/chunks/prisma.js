import { PrismaClient } from "@prisma/client";
import "./index.js";
const DB_LIMIT = "20";
const prisma = new PrismaClient();
const pagination = (page = 1, limit = DB_LIMIT) => {
  return { take: Number(limit), skip: (Number(page || 1) - 1) * Number(limit) };
};
export {
  pagination as a,
  prisma as p
};
