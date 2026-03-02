<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';

	import { page } from '$app/state';
	import favicon from '$lib/assets/cross.svg';
	import { locales, localizeHref } from '$lib/paraglide/runtime';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

{@render children()}

<div style="display:none">
	{#each locales as locale}
		<a href={localizeHref(page.url.pathname, { locale })}>
			{locale}
		</a>
	{/each}
</div>
