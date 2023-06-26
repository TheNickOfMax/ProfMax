<script lang="ts">
</script>

<div class="panel">
	<a href="">Статья 1</a>
	<a href="">Статья 1</a>
	<a href="">Статья 1</a>
	<a href="">Статья 1</a>
</div>

<style lang="scss">
	.panel {
		a {
			background-color: #4d9785;
			text-decoration: none;
			border-style: none;
			border-top-right-radius: 50px;
			border-bottom-right-radius: 50px;
			margin-bottom: 5px;
			height: fit-content;
			font-size: larger;
			padding-top: 10px;
			padding-bottom: 10px;
			padding-right: 20px;
			padding-left: 10px;
			width: fit-content;
			transition: padding-left 0.5s ease;
			white-space: nowrap;
		}
		:hover {
			padding-left: 50%;
		}
		margin-top: 30px;
		display: flex;
		flex-direction: column;
	}
</style>
