<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<button class="btn btn-neutral mt-4">
	{@render children()}
</button>
