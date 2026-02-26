import { env } from '$env/dynamic/private';

async function createDb() {
	const {
		DATABASE_TYPE,
		DATABASE_HOST,
		DATABASE_PORT,
		DATABASE_USER,
		DATABASE_PASSWORD,
		DATABASE_NAME
	} = env;

	if (
		!DATABASE_TYPE ||
		!DATABASE_HOST ||
		!DATABASE_PORT ||
		!DATABASE_USER ||
		!DATABASE_PASSWORD ||
		!DATABASE_NAME
	) {
		throw new Error('One or more DATABASE_* env variables are not set');
	}

	if (DATABASE_TYPE === 'mysql') {
		const { drizzle } = await import('drizzle-orm/mysql2');
		const mysql = await import('mysql2/promise');
		const schema = await import(`./schema.${DATABASE_TYPE}`);
		const client = await mysql.default.createConnection(
			`${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
		);
		return drizzle(client, { schema, mode: 'default' });
	} else {
		const { drizzle } = await import('drizzle-orm/postgres-js');
		const postgres = await import('postgres');
		const schema = await import(`./schema.${DATABASE_TYPE}`);
		const client = postgres.default(
			`${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
		);
		return drizzle(client, { schema });
	}
}

export const db = await createDb();
