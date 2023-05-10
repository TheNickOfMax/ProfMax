<script lang="ts">
	import Navbar from '../../components/Navbar.svelte';
</script>

<head>
	<title>Домашняя</title>
</head>
<div class="container">
	<div class="col" />
	<div class="col">
		<h1>Профориентация для школьников</h1>
		<section>
			<h2>Добро пожаловать на наш сайт!</h2>
			<p>Мы поможем вам определиться с выбором профессии и планированием карьеры.</p>
			<p>
				Мы предлагаем рекомендации и советы, основанные на современных трендах и наших исследованиях
				в области трудоустройства.
			</p>
		</section>
		<section>
			<h2>Наша цель</h2>
			<p>
				Мы хотим помочь вам сделать осознанный выбор профессии, который соответствует вашим
				интересам, навыкам и потребностям рынка труда.
			</p>
			<p>
				Наши рекомендации и советы регулярно обновляются, чтобы отражать последние тенденции и
				требования рынка труда.
			</p>
			<p>
				Мы также предлагаем инструменты и ресурсы, которые помогут вам планировать свою карьеру и
				достигать поставленных целей.
			</p>
		</section>
		<section>
			<h2>Надеемся, что наш сайт будет полезным</h2>
			<p>
				Мы надеемся, что наш сайт станет для вас полезным ресурсом при выборе профессии и
				планировании карьеры.
			</p>
		</section>
	</div>
	<div class="col" />
</div>

<!--TODO:
    * Make 3-col layout default for all pages
	*THE FUCKING FIXED POSITIONING OF NAVBAR BREAKS THE FUCKING GRID I HATE FRONTEND SO FUCKING MUCH
-->
<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 4fr 1fr;
		grid-gap: 20px;
		padding: 20px;
	}
</style>
