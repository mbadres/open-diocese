<script lang="ts">
	import Coptic from '$lib/components/languages/Coptic.svelte';
	import CopticSermonMountain from '$lib/components/utilities/CopticSermonMountain.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="relative overflow-hidden bg-primary/50">
	<div class="absolute inset-0 -z-10 text-justify text-primary-content">
		<Coptic>
			<CopticSermonMountain />
		</Coptic>
	</div>
	<div>
		{@render children?.()}
	</div>
</div>
