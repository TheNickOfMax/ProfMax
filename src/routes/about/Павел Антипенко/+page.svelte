<script lang="ts">
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<head>
	<title>Антипенко Павел</title>
</head>
<div>
	<div class="">
		<SubbedText mainText="Павел Антипенко" sub="Литейщик, моделист." />
	</div>
	<div class="inrow">
		<img
			src="/Pasha.jpg"
			alt=""
			height="250px"
			style="border-radius: 20px; border-style:solid;border-color:aquamarine;"
		/>
		<Tile
			title="Я - Технолог"
			mainText="Умею работать в коллективе, не боюсь браться за сложные задачи. 
			
			Владею такими программами, как: solidworks, powermill, novaflow, lvm flow, artcam, CM control, MC control."
		/>
		<Tile
			title="Хобби"
			mainText="Увлекаюсь 3D моделированием производством пресс-форм, а также проектированием лопаток турбин."
		/>
		<Tile
			title="Проектная деятельность"
			mainText="В рамках проектной деятельности, в связи с семидесятилетним юбилеем гимназии №70, разработал и создал методом художественного литья герб гимназии."
		/>
	</div>
	<a href="mailto:antipenkopavel.prof@mail.ru" style="margin-top: 10px; display:flex"
		>antipenkopavel.prof@mail.ru</a
	>
</div>
