<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<form
	method="post"
	action="?/signUpEmail"
	use:enhance
	class="flex min-h-screen items-center justify-center"
>
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
		<label class="label" for="email">Email</label>
		<input id="email" name="email" type="email" class="input" placeholder="example@email.com" />
		<label class="label" for="password">Password</label>
		<input id="password" name="password" type="password" class="input" placeholder="Password" />
		<p class="text-error">{form?.message ?? ''}</p>
		<button class="btn btn-neutral" type="submit">Sign Up</button>
	</fieldset>
</form>
