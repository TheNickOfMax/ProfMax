<script lang="ts">
	import { getContext, setContext } from 'svelte';
	import '../app.scss';
	import Navbar from '../components/Navbar.svelte';
	import SidePanel from '../components/SidePanel.svelte';
	export const panelPathsContext: string[] = getContext('panelPaths');
</script>

<Navbar />
<div class="col-container">
	<SidePanel panelPaths={panelPathsContext} />
	<slot />
</div>
