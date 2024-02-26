<script lang="ts">
	import SubbedText from '../../components/SubbedText.svelte';
	import Tile from '../../components/Tile.svelte';
</script>

<head>
	<title>Гимназия №70</title>
</head>
<div>
	<SubbedText mainText="Гимназия №70" sub="Место, которое невозможно забыть" />
	<div class="inrow">
		<Tile
			title="Герб"
			mainText="Наша гимназия с недавних пор является одной из немногих, что могут похвастаться наличием настоящего герба, благодаря стараниям учеников."
		/>
		<img
			src="/Gerb.jpg"
			alt=""
			height="250px"
			style="border-radius: 20px; border-style:solid;border-color:aquamarine;"
		/>
	</div>
	<SubbedText
		mainText="Летопись нашей Гимназии"
		sub="Бывают минуты, за которые можно отдать месяцы и годы."
	/>
	<div>
		<object data="/History.pdf" type="application/pdf">
			<p>Неудалось загрузить файл, но вы можете его <a href="/History.pdf">скачать</a></p>
		</object>
	</div>
</div>

<style lang="scss">
	object {
		width: 100%;
		height: 1150px;
		@media only screen and (max-width: 845px) {
			width: 300;
			height: 400;
		}
	}
</style>
