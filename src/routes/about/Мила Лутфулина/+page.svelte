<script lang="ts">
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<head>
	<title>Лутфулина Мила</title>
</head>
<div>
	<SubbedText mainText="Лутфуллина Мила" sub="Чай, музыка и никакого насилия." />
	<div class="inrow">
		<img
			src="/Mila.jpg"
			alt=""
			height="250px"
			style="border-radius: 20px; border-style:solid;border-color:aquamarine;"
		/>
		<Tile title="Я - филолог" mainText="Пишу много, в том числе и о гимназии" />
		<Tile title="Хобби" mainText="Занимаюсь барабанами, читаю, сплю иногда" />
		<Tile
			title="О себе"
			mainText="Меланхоличный холерик, как говорили классики. Люблю людей, но не люблю жару и алгебру. "
		/>
	</div>
	<a href="mailto:lutfullinadjamila.prof@mail.ru" style="margin-top: 10px; display:flex"
		>lutfullinadjamila.prof@mail.ru</a
	>
</div>
