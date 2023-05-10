<script lang="ts">
	import Welcome from '../../components/Welcome.svelte';
</script>

<head>
	<title>Домашняя</title>
</head>
<div class="container">
	<div class="col" />
	<Welcome />
	<div class="col" />
</div>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		grid-gap: 20px;
		padding: 20px;
	}
</style>
