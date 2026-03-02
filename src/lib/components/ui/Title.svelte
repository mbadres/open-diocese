<script lang="ts">
	import CopticBackground from '$lib/components/utilities/CopticBackground.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<CopticBackground>
	<div class="flex">
		<div class="flex-1"></div>
		<div class="flex-2 p-16 bg-primary-content text-primary text-4xl font-bold">
			{@render children()}
		</div>
	</div>
</CopticBackground>
