<script lang="ts">
	let collapsed: boolean = true;
	export let title: string;
</script>

<div
	class="framed"
	on:click={() => {
		collapsed = !collapsed;
	}}
	on:keypress={() => {}}
	style="margin-top: 6px;"
>
	{#if collapsed}
		<div class="inrow">
			<img
				src="/arrow-right.png"
				width="25px"
				height="25px"
				style="filter: invert(1); margin-top:14px; margin-right:10px"
				alt=""
			/>
			<h3>{title}</h3>
		</div>
	{:else}
		<div class="inrow">
			<img
				src="/arrow-down.png"
				width="25px"
				height="25px"
				style="filter: invert(1); margin-top:14px; margin-right:10px"
				alt=""
			/>
			<h3>{title}</h3>
		</div>
		<slot />
	{/if}
</div>
