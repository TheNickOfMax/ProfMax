<script lang="ts">
	import '../app.scss';
	import BottomBar from '../components/BottomBar.svelte';
	import Navbar from '../components/Navbar.svelte';
	import SidePanel from '../components/SidePanel.svelte';
</script>

<Navbar />
<div class="col-container">
	<SidePanel />
	<slot />
</div>
<!-- <BottomBar /> -->
