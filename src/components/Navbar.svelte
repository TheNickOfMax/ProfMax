<script lang="ts">
	let pgs = [
		//{ url: 'home', name: 'Главная' },
		{ url: 'about', name: 'Про нас' },
		{ url: 'qna', name: 'Вопросы' },
		{ url: 'resources', name: 'Источники' },
		{ url: 'gimn', name: 'Наша Гимназия' }
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
	}
	nav {
		user-select: none;
		display: flex;
		position: fixed;
		top: -5px;
		left: 50%;
		transform: translateX(-50%);
		text-align: center;

		span {
			margin-left: 3px;

			a {
				border-radius: 6px;
				color: #fdfdfd;
				background-color: #4d9785;
				padding-top: 15px;
				padding-left: 10px;
				padding-right: 10px;
				padding-bottom: 3px;
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

	@media only screen and (max-width: 845px) {
		h1 {
			display: none;
		}
		nav span {
			font-size: 11px;
		}
	}
</style>
