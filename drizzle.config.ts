import { defineConfig } from 'drizzle-kit';

const {
	DATABASE_TYPE,
	DATABASE_HOST,
	DATABASE_PORT,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE_NAME
} = process.env;

if (
	!DATABASE_TYPE ||
	!DATABASE_HOST ||
	!DATABASE_PORT ||
	!DATABASE_USER ||
	!DATABASE_PASSWORD ||
	!DATABASE_NAME
)
	throw new Error('One or more DATABASE_* env variables are not set');

export default defineConfig({
	schema: `./src/lib/server/db/schema.${DATABASE_TYPE}.ts`,
	dialect: DATABASE_TYPE === 'mysql' ? 'mysql' : 'postgresql',
	dbCredentials: {
		url: `${DATABASE_TYPE}://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`
	},
	verbose: true,
	strict: true
});
