<script lang="ts">
	import SubbedText from '../../../components/SubbedText.svelte';
	import Tile from '../../../components/Tile.svelte';
</script>

<div>
	<SubbedText mainText="Павел Антипенко" sub="Литейщик, моделист." />
	<div class="inside">
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
</div>
