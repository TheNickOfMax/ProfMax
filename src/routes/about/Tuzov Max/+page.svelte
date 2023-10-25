<script>
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<div>
	<SubbedText mainText="Тузов Максим" sub="Программист, анархист, оптимист :D." />
	<div class="inside">
		<Tile
			title="Я программист"
			mainText="Являюсь главным программистом проекта. Создал вот этот вот самый сайт. Курсы почти не посещал, всему научился сам."
		/>
		<Tile
			title="Хобби"
			mainText="Ничем особенным, кроме програмирования на постоянной основе не увлекаюсь.
			
			В последнее время делаю 3D штуки в Blender и сейчас прохожу DUSK"
		/>
		<Tile
			title="Что-то еще..."
			mainText="Сюда надо еще чего-то добавить. Картинки пока не работают. Нужны идеи. "
		/>
	</div>
</div>
