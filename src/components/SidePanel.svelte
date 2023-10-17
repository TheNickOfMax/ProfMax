<script lang="ts">
	import { page } from '$app/stores';
	import { pathsToHrefs } from '../utils';

	function labelFromHref (lnk:string):string {
		return lnk.replace('/' + $page.url.toString().split('/')[3] + '/', '').replaceAll("+", " ");
	}

	const rawPaths = import.meta.glob(`../routes/*/*/**.svelte`);
	let hrefs: string[] = [];

	$: {
		let current = $page.url.toString()
		hrefs = pathsToHrefs(rawPaths,current)
	}
</script>

<div class="panel">
	{#each hrefs as link}
		<a href={link}> {labelFromHref(link)} </a>
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
			margin-bottom: 5px;
			padding-bottom: 10px;
			padding-left: 10px;
			padding-right: 20px;
			padding-top: 10px;
			text-decoration: none;
			transition: padding-left 0.5s ease;
			white-space: nowrap;
			width: fit-content;
			&:hover {
				padding-left: 50%;
			}
		}
		display: flex;
		flex-direction: column;
		margin-right: 50px;
		transform: translateX(-27px);
		margin-top: -30px;
		margin-right: 10px;

		@media only screen and (max-width: 845px) {
			margin-right: 0px;
			font-size: 10px;
			margin-top: -10px;
			position: fixed;
			bottom: 50px;
			
		}
	}
</style>
