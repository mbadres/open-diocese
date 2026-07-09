<script>
	import { projectTitle } from '$lib/utilities/meta';
</script>

<div class="flex items-center p-3.25 bg-base-100 border-t border-base-300 text-secondary-content">
	<span class="font-semiboldd">
		<i class="fa-regular fa-copyright"></i>
		{new Date().getFullYear()}
		{projectTitle}
	</span>
	<div class="grow"></div>
	<div>
		<a class="p-2" href={null}>Link 1</a>
		<a class="p-2" href={null}>Link 2</a>
	</div>
</div>
