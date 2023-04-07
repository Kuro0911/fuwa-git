<script>
	import { MOCK_USER_CHATS } from '$lib/utils/data-store';
	import ChatItem from './ChatItem.svelte';
	import AddNew from './addNew.svelte';
	import { page } from '$app/stores';
	let friends = $page.data.friends;
	console.log(friends);
</script>

<div class="drawer">
	{#each friends as friend}
		<a href={`/chat/${friend.id}`}>
			<ChatItem user={friend} />
		</a>
	{/each}
	<AddNew />
</div>

<style lang="scss">
	.drawer {
		height: 85vh;
		display: flex;
		flex-direction: column;
		overflow: scroll;
	}
</style>
