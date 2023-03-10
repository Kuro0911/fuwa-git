<script>
	import { MOCK_USER_CHATS } from '$lib/utils/data-store';
	import ChatItem from './ChatItem.svelte';
</script>

<div class="drawer">
	{#each MOCK_USER_CHATS as chat}
		<ChatItem user={chat} />
	{/each}
</div>

<style lang="scss">
	.drawer {
		height: 85vh;
		display: flex;
		flex-direction: column;
	}
</style>
