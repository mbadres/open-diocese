<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';

	import favicon from '$lib/assets/cross.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>

{@render children()}
