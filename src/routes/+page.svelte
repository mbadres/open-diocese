<script lang="ts">
	import Footer from '$lib/ui/components/Footer.svelte';
	import Header from '$lib/ui/components/Header.svelte';
	import Title from '$lib/ui/components/Title.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />
	<div class="grow">
		<Title>Home</Title>
	</div>
	<Footer />
</div>
