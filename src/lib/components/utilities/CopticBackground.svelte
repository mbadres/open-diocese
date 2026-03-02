<script lang="ts">
	import Coptic from '$lib/components/languages/Coptic.svelte';
	import CopticSermonMountain from '$lib/components/utilities/CopticSermonMountain.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="relative overflow-hidden bg-primary">
	<div class="absolute inset-0 text-justify text-primary-content opacity-20 select-none">
		<Coptic>
			<CopticSermonMountain />
		</Coptic>
	</div>
	<div class="relative text-primary-content z-10">
		{@render children?.()}
	</div>
</div>
