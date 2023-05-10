<script lang="ts">
	import { space } from 'svelte/internal';
	let navPages: string[] = ['About', 'Home', 'Tests'];
</script>

<nav>
	{#each navPages as pg}
		<span>
			<a href={pg.toLowerCase()}>{pg}</a>
		</span>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		position: fixed;
		top: -1%;
		right: 50%;
		left: 50%;
		text-align: center;
		margin-top: 1%;

		span {
			margin-left: 3px;
			a {
				border-radius: 6%;
				color: #fdfdfd;
				background-color: #4d9785;
				padding: 8px;
				text-decoration: none;
				font-size: larger;
				opacity: 100%;
				display: inline-block;
				transition: padding-top 0.5s ease;
			}

			:hover {
				padding-top: 40px;
			}
		}
	}
</style>
