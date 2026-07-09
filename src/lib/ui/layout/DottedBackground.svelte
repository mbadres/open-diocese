<script lang="ts">
	import type { Snippet } from 'svelte';

	let { class: className = '', children }: { class?: string; children: Snippet } = $props();
</script>

<div class="dotted-background bg-base-100 min-h-screen {className}">
	{@render children?.()}
</div>

<style>
	.dotted-background {
		background-image:
			radial-gradient(rgba(120, 90, 40, 0.05) 1px, transparent 1.4px),
			radial-gradient(rgba(120, 90, 40, 0.04) 1px, transparent 1.4px);
		background-size:
			7px 7px,
			11px 11px;
		background-position:
			0 0,
			3px 4px;
	}
</style>
