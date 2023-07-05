<script lang="ts">
	import { loadPaths } from '../../utils';
	import { getContext, setContext } from 'svelte';

	let modules = import.meta.glob('./*/**.svelte');
	let paths = loadPaths(modules);
	setContext('panelPaths', paths);
</script>

<head>
	<title>Домашняя</title>
</head>
<div />

<style lang="scss">
</style>
