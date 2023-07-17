<script lang="ts">
	let pgs = [
		{ url: 'about', name: 'Про нас' },
		{ url: 'home', name: 'Домашняя' },
		{ url: 'QnA', name: 'Задай вопрос' },
		{ url: 'resources', name: 'Ресурсы' }
	];
</script>

<nav>
	{#each pgs as pg}
		<span>
			<a href="/{pg.url}">{pg.name}</a>
		</span>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		position: fixed;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;

		span {
			margin-left: 3px;

			a {
				border-radius: 6%;
				color: #fdfdfd;
				background-color: #4d9785;
				padding: 8px;
				text-decoration: none;
				font-size: larger;
				opacity: 1;
				display: inline-block;
				white-space: nowrap;
				transition: padding-top 0.5s ease;

				&:hover {
					padding-top: 40px;
				}
			}
		}
	}
</style>
