<script lang="ts">
	export let title: string = '';
	export let mainText: string = '';
	export let w: string = '250px';
	let arr = mainText.split(/\n|\r\n/g).map((v, i) => {
		return { text: v, br: '<br>' };
	});
</script>

<div style="width: {w};">
	<h2>{title}</h2>
	<p>
		{#each arr as { text, br }}
			{text}
			{@html br}
		{/each}
	</p>
</div>

<style lang="scss">
	div {
		background-color: rgb(15, 15, 15);
		padding: 15px;
		border-radius: 20px;
		border-style: solid;
		border-color: aquamarine;
		margin: 10px;
		h2 {
			margin: 0px;
		}
		p {
		}
	}
</style>
