<script lang="ts">
	let pgs = [
		{ url: 'about', name: 'Про нас' },
		{ url: 'home', name: 'Домашняя' },
		{ url: 'QnA', name: 'Задай вопрос' },
		{ url: 'resources', name: 'Ресурсы' }
	];
</script>

<h1><a href="/home/">PROFMAX</a></h1>
<nav>
	{#each pgs as pg}
		<span>
			<a href="/{pg.url}">{pg.name}</a>
		</span>
	{/each}
</nav>

<style lang="scss">
	h1 {
		a {
			text-decoration: none;
		}
		margin: 0px;
		padding-bottom: 0px;
		@media only screen and (max-width: 845px) {
        	display: none;
		}

	}
	nav {
		user-select: none;
		display: flex;
		position: fixed;
		top: -4px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;

		span {
			margin-left: 3px;

			a {
				border-radius: 6px;
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
			@media only screen and (max-width: 845px) {
				font-size: 11px;
			}
		}
	}
</style>
