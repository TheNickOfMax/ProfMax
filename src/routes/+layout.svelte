<script>
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
	import SidePanel from '../components/SidePanel.svelte';
</script>

<Navbar />
<div class="col-container">
	<SidePanel />
	<slot />
</div>
