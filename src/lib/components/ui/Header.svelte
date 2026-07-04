<script>
	import { projectTitle } from '$lib/utilities/meta';
	import Cross from '../utilities/Cross.svelte';
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
			<li><a class="" href={null}>Link</a></li>
			<li>
				<details>
					<summary>Parent</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a href={null}>Link 1</a></li>
						<li><a href={null}>Link 2</a></li>
					</ul>
				</details>
			</li>
		</ul>
	</div>
</div>
