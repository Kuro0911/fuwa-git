<script>
	import { MOCK_USER_CHATS } from '$lib/utils/data-store';
	import ChatItem from './ChatItem.svelte';
	export let chats;
	console.log(chats);
</script>

<div class="drawer">
	{#each MOCK_USER_CHATS as chat}
		<a href={`/chat/${chat.id}`}>
			<ChatItem user={chat} />
		</a>
	{/each}
</div>

<style lang="scss">
	.drawer {
		height: 85vh;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}
</style>
