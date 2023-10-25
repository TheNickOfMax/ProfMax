<script lang="ts">
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<div>
	<SubbedText mainText="Павел Антипенко" sub="Литейщик, человек электролобзик, или просто пашка." />
	<div class="inside">
		<Tile
			title="Я Литейшик"
			mainText="Ну или че там Паша придумает, я не знаю что писать про остальных."
		/>
		<Tile
			title="Хобби"
			mainText="Люблю пилить, стругать, печатать на 3D принтере и строить самолётики"
		/>
		<Tile
			title="Что-то еще..."
			mainText="Сюда надо еще чего-то добавить. Картинки пока не работают. Нужны идеи. "
		/>
	</div>
</div>
