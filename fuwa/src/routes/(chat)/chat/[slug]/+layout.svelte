<script>
	import Navbar from '$lib/components/(chat)/Navbar/Navbar.svelte';
	import ChatDrawer from '$lib/components/(chat)/ChatDrawer/ChatDrawer.svelte';
	import UserDrawer from '$lib/components/(chat)/UserDrawer/UserDrawer.svelte';
</script>

<Navbar />
<div style="display: flex;justify-content: space-between;">
	<ChatDrawer />
	<slot />
	<UserDrawer />
</div>
