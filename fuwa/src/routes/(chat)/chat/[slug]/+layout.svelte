<script>
	import Navbar from '$lib/components/(chat)/Navbar/Navbar.svelte';
	import ChatDrawer from '$lib/components/(chat)/ChatDrawer/ChatDrawer.svelte';
	import UserDrawer from '$lib/components/(chat)/UserDrawer/UserDrawer.svelte';
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
		<UserDrawer />
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
		background-color: yellowgreen;
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
