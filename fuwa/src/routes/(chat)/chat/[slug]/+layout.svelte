<script>
	import Navbar from '$lib/components/(chat)/Navbar/Navbar.svelte';
	import ChatDrawer from '$lib/components/(chat)/ChatDrawer/ChatDrawer.svelte';
	import UserDrawer from '$lib/components/(chat)/UserDrawer/UserDrawer.svelte';
	import { MOCK_USER } from '$lib/utils/data-store';
</script>

<div class="container">
	<div class="container-left">
		<Navbar />
		<div class="wrap">
			<div class="chat-left">
				<ChatDrawer />
			</div>
			<div class="chat-center">
				<slot />
			</div>
		</div>
	</div>
	<div class="container-right">
		<UserDrawer user={MOCK_USER} />
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
	}
	.wrap {
		display: flex;
		justify-content: space-between;
	}
	.container-left {
		width: 80%;
	}
	.container-right {
		background-image: url('https://i.pinimg.com/originals/7c/67/c7/7c67c78da4a423af49d45dd926e5455c.gif');
		background-position: center;
		width: 20%;
	}
	.chat-left {
		background-color: lightblue;
		width: 20%;
	}
	.chat-center {
		background-color: pink;
		width: 80%;
	}
</style>
