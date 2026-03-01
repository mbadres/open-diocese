<script lang="ts">
	import CopticBackground from '$lib/components/utilities/CopticBackground.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<CopticBackground>
	{@render children()}
</CopticBackground>
