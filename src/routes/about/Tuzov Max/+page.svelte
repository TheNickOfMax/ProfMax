<script>
	import TextTile from '../../../components/TextTile.svelte';
</script>

<div>
	<h1>Тузов Максим</h1>
	<p class="sub">Программист, атеист, анархист.</p>
	<TextTile
		title="Основные приколы"
		mainText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates at accusamus mollitia maiores cumque laudantium eum obcaecati excepturi. Qui in labore praesentium unde sunt quam veniam nam adipisci pariatur."
	/>
</div>

<style lang="scss">
	h1 {
		font-size: 40px;
	}
	.sub {
		font-size: small;
		margin-top: -20px;
	}
</style>
