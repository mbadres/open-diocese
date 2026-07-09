<script lang="ts">
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';
	import { projectTitle } from '$lib/utilities/meta';
	import Cross from '../utilities/Cross.svelte';

	const routeModules = import.meta.glob('/src/routes/authorized/*/+page.svelte');
	const routes = Object.keys(routeModules)
		.flatMap((path) => {
			const slug = path.match(/\/routes\/authorized\/([^/]+)\/\+page\.svelte$/)?.[1];
			if (!slug) return [];
			// Guaranteed to be a valid route: the slug comes straight from an existing +page.svelte.
			return [
				{
					href: `/authorized/${slug}` as Pathname,
					label: slug.charAt(0).toUpperCase() + slug.slice(1)
				}
			];
		})
		.sort((a, b) => a.label.localeCompare(b.label));
</script>

<div class="navbar min-h-auto h-13 p-0">
	<div class="flex-none">
		<div class="flex items-center">
			<span class=" text-primary px-4 text-3xl">
				<!-- <i class="fa-solid fa-church"></i> -->
				<Cross class="w-6 h-6 text-primary" />
			</span>
			<span class="flex-none text-l font-semibold">{projectTitle}</span>
		</div>
	</div>
	<div class="grow"></div>
	<div class="flex-none"></div>
	<div class="grow"></div>
	<div class="flex-none">
		<ul class="menu menu-horizontal p-0 [&_a]:rounded-none [&_summary]:rounded-none">
			{#each routes as route (route.href)}
				<li><a href={resolve(route.href)}>{route.label}</a></li>
			{/each}
		</ul>
	</div>
</div>
