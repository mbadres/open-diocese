<script lang="ts">
	import Footer from '$lib/components/components/Footer.svelte';
	import Header from '$lib/components/components/Header.svelte';
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
