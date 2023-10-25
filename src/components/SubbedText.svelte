<script lang="ts">
	export let mainText: string;
	export let sub: string;
</script>

<div class="subtitled">
	<h1>{mainText}</h1>
	<p class="sub">{sub}</p>
</div>

<style lang="scss">
	.sub {
		font-size: small;
		margin-top: -20px;
	}

	.subtitled {
		width: fit-content;
	}
</style>
