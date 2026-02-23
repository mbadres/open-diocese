import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';
import { env } from '$env/dynamic/private';

if (
	!env.POSTGRES_HOST ||
	!env.POSTGRES_PORT ||
	!env.POSTGRES_USER ||
	!env.POSTGRES_PASSWORD ||
	!env.POSTGRES_DB
)
	throw new Error('One or more POSTGRES_* env variables are not set');

const client = postgres(
	`postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@${env.POSTGRES_HOST}:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`
);

export const db = drizzle(client, { schema });
