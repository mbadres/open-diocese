import { getRequestEvent } from '$app/server';
import { env } from '$env/dynamic/private';
import { db } from '$lib/server/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';

export const auth = betterAuth({
	baseURL: env.BETTER_AUTH_URL,
	secret: env.BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: env.DATABASE_TYPE === 'mysql' ? 'mysql' : 'pg' }),
	emailAndPassword: { enabled: true },
	plugins: [sveltekitCookies(getRequestEvent)] // make sure this is the last plugin in the array
});
