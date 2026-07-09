import { auth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (event) => {
	if (!event.locals.user) {
		return redirect(302, '/authorizer/login');
	}
	return { user: event.locals.user };
}) satisfies PageServerLoad;

export const actions: Actions = {
	signOut: async (event) => {
		await auth.api.signOut({
			headers: event.request.headers
		});
		return redirect(302, '/authorizer/login');
	}
};
