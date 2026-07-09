import { auth } from '$lib/server/auth';
import { fail, redirect } from '@sveltejs/kit';
import { APIError } from 'better-auth';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	if (event.locals.user) {
		return redirect(302, '/authorizer/logout');
	}
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	signUpEmail: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email')?.toString() ?? '';
		const password = formData.get('password')?.toString() ?? '';
		const name = '';

		try {
			await auth.api.signUpEmail({
				body: {
					email,
					password,
					name,
					callbackURL: '/authorized'
				}
			});
		} catch (error) {
			if (error instanceof APIError) {
				return fail(400, { message: error.message || 'Registration failed' });
			}
			return fail(500, { message: 'Unexpected error' });
		}

		return redirect(302, '/authorizer/logout');
	}
};
