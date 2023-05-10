<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
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

<!--TODO:
    * Make 3-col layout default for all pages
	*THE FUCKING FIXED POSITIONING OF NAVBAR BREAKS THE FUCKING GRID I HATE FRONTEND SO FUCKING MUCH
-->
<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		grid-gap: 20px;
		padding: 20px;
	}
</style>
