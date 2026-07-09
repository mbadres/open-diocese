<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import '../app.css';

	import favicon from '$lib/assets/cross.svg';
	import DottedBackground from '$lib/ui/layout/DottedBackground.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
</svelte:head>
<DottedBackground>
	{@render children()}
</DottedBackground>
