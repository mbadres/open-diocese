<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<form method="post" action="?/signInEmail" use:enhance>
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
		<label class="label" for="email">Email</label>
		<input id="email" type="email" class="input" placeholder="example@email.com" />
		<label class="label" for="password">Password</label>
		<input id="password" type="password" class="input" placeholder="Password" />
		<button class="btn btn-neutral mt-4" type="submit">Login</button>
		<p style="color: red">{form?.message ?? ''}</p>
	</fieldset>
</form>
