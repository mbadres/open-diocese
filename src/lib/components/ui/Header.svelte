<script>
	import Cross from '$lib/components/utilities/Cross.svelte';
	import { projectTitle } from '$lib/utilities/meta';
</script>

<div class="navbar min-h-auto h-13">
	<div class="flex-none">
		<div class="flex items-center">
			<Cross class="w-5 h-5 mx-4 text-primary" />
			<span class="flex-none text-l font-semibold">{projectTitle}</span>
		</div>
	</div>
	<div class="flex-1"></div>
	<div class="flex-none"></div>
	<div class="flex-1"></div>
	<div class="flex-none">
		<ul class="menu menu-horizontal">
			<li><a href={null}>Link</a></li>
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
