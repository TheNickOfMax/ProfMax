<script lang="ts">
	import '../app.scss';
	import BottomBar from '../components/BottomBar.svelte';
	import Counter from '../components/Counter.svelte';
	import Navbar from '../components/Navbar.svelte';
	import SidePanel from '../components/SidePanel.svelte';
</script>

<Navbar />
<div class="col-container">
	<SidePanel />
	<slot />
	<Counter />
</div>
<!-- <BottomBar /> -->
