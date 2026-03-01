<script>
	import { projectTitle } from '$lib/utilities/meta';
</script>

<div class="flex items-center p-3.25 border-t-2 bg-base-300">
	<span class="font-semibold">© {new Date().getFullYear()} {projectTitle}</span>
	<div class="grow"></div>
	<div>
		<a class="p-2" href={null}>Link 1</a>
		<a class="p-2" href={null}>Link 2</a>
	</div>
</div>
