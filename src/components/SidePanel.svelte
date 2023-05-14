<script lang="ts">
</script>

<div class="panel">
	<button>Stuff1</button>
	<button>Stuff2</button>
	<button>Stuff3</button>
	<button>Stuff4</button>
</div>

<style lang="scss">
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
		transition: padding-left 0.5s ease;
	}
	.panel {
		margin-top: 30px;
		display: block;
		:hover {
			padding-left: 50%;
		}
	}
</style>
