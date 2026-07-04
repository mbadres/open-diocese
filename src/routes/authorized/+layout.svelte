<script lang="ts">
	import Footer from '$lib/components/ui/Footer.svelte';
	import Header from '$lib/components/ui/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<div class="grow">
		{@render children()}
	</div>
	<Footer />
</div>
