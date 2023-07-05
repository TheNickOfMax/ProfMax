<script lang="ts">
	import { loadPaths } from '../../utils';
	let modules = import.meta.glob('./*/**.svelte');
	let paths = loadPaths(modules);
	console.log(paths);
</script>
