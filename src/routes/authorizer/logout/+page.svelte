<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<form
	method="post"
	action="?/signOut"
	use:enhance
	class="flex min-h-screen items-center justify-center"
>
	<fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
		<p>Your user ID is {data.user.id}.</p>
		<button class="btn btn-neutral" type="submit">Sign out</button>
	</fieldset>
</form>
