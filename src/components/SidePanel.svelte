<script lang="ts">
</script>

<div class="panel">
	<button>Статья 1</button>
	<button>Статья 2</button>
	<button>Статья 3</button>
	<button>Статья 4</button>
</div>

<style lang="scss">
	.panel {
		button {
			background-color: #4d9785;
			border-style: none;
			border-top-right-radius: 50px;
			border-bottom-right-radius: 50px;
			margin-bottom: 5px;
			height: fit-content;
			font-size: larger;
			padding-top: 5%;
			padding-bottom: 5%;
			padding-right: 20px;
			padding-left: 10px;
			width: fit-content;
			transition: padding-left 0.5s ease;
		}
		:hover {
			padding-left: 50%;
		}
		margin-top: 30px;
		display: flex;
		flex-direction: column;
	}
</style>
