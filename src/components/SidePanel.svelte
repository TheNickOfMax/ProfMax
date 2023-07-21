<script lang="ts">
	import { page } from '$app/stores';

	const importAll = import.meta.glob(`../routes/*/*/**.svelte`);
	let pathsToLoad: string[] = [];

	$: {
		const currentUrl = $page.url.toString().split('/')[3];
		pathsToLoad = Object.keys(importAll)
			.map((path) => path.replace('/+page.svelte', '').replace('../routes', ''))
			.filter((path) => path.includes(currentUrl));
	}
</script>

<div class="panel">
	{#each pathsToLoad as path}
		<a href={path}>{path.replace('/' + $page.url.toString().split('/')[3] + '/', '')}</a>
	{/each}
</div>

<style lang="scss">
	.panel {
		a {
			background-color: #4d9785;
			border-bottom-right-radius: 50px;
			border-style: none;
			border-top-right-radius: 50px;
			color: rgb(255, 255, 255);
			font-size: larger;
			height: fit-content;
			margin-bottom: 5px;
			padding-bottom: 10px;
			padding-left: 10px;
			padding-right: 20px;
			padding-top: 10px;
			text-decoration: none;
			transition: padding-left 0.5s ease;
			white-space: nowrap;
			width: fit-content;
		}
		:hover {
			padding-left: 50%;
		}
		display: flex;
		flex-direction: column;
		margin-right: 50px;
		transform: translateX(-27px);
		left: 0;
	}
</style>
