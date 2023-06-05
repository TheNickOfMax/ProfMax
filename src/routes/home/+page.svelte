<script lang="ts">
	import { SvelteComponent, onMount } from 'svelte';
	let articles: any[] = [];

	async function Mnt() {
		let imports: Record<string, () => Promise<unknown>> = import.meta.glob('./articles/*.svelte');
		for (let key in imports) {
			let mod: any = await imports[key]();
			const { default: Component } = mod;
			articles.push(Component);
		}
	}
	onMount(Mnt);
</script>

<head>
	<title>Домашняя</title>
</head>
<div>
	{#each articles as article}
		<svelte:component
			this={article}
			on:load={() => {
				alert(article);
			}}
		/>
	{/each}
</div>

<style lang="scss">
</style>
