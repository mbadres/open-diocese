<script lang="ts">
	let { children } = $props();
</script>

<span class="has-text-right scheherazade-new-regular">
	{@render children?.()}
</span>

<style>
	@font-face {
		font-family: 'Scheherazade New Regular';
		font-style: normal;
		font-weight: 400;
		src: local('Scheherazade New Regular'), url(/fonts/scheherazade-new-regular.ttf);
	}

	.scheherazade-new-regular {
		font-family: 'Scheherazade New Regular';
	}
</style>
