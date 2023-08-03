import { PrismaClient } from '@prisma/client';
import { json, error } from '@sveltejs/kit';

const prisma = new PrismaClient();
export default prisma;

export { json, error, prisma };

import { DB_LIMIT } from '$env/static/private';

export const pagination = (page: unknown = 1, limit = DB_LIMIT) => {
	return { take: Number(limit), skip: (Number(page || 1) - 1) * Number(limit) };
};
