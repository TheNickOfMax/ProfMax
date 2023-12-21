<script>
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<head>
	<title>Тузов Максим</title>
</head>
<div>
	<SubbedText mainText="Тузов Максим" sub="Программист, оптимист :D." />
	<div class="inside">
		<img
			src="/Max.jpg"
			alt=""
			height="250px"
			style="border-radius: 20px; border-style:solid;border-color:aquamarine;"
		/>
		<Tile
			title="Я - программист"
			mainText="Создал вот этот вот самый сайт. Курсы почти не посещал, всему научился сам."
		/>
		<Tile
			title="Хобби"
			mainText="Ничем особенным, кроме програмирования на постоянной основе не увлекаюсь.
			
			В последнее время делаю 3D штуки в Blender"
		/>
		<Tile
			title="Что-то еще..."
			mainText="Сюда надо еще чего-то добавить. Картинки пока не работают. Нужны идеи. "
		/>
	</div>
</div>
