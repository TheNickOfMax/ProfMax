<script lang="ts">
	import { loadPaths } from '../../utils';
	let modules = import.meta.glob('./*/**.svelte');
	let paths = loadPaths(modules);
	console.log(paths);
</script>

<head>
	<title>Тесты</title>
</head>
<div>
	<p>
		Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum libero accusantium repellat cum
		blanditiis temporibus voluptatem numquam nobis. Nulla sed aut minus nostrum esse sint recusandae
		illo aliquam delectus labore?
	</p>
</div>
