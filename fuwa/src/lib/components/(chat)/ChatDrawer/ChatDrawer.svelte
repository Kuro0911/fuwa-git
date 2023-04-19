<script>
	import { db } from '$lib/firebase';
	import { doc, getDoc, onSnapshot } from 'firebase/firestore';
	import ChatItem from './ChatItem.svelte';
	import AddNew from './addNew.svelte';
	import { current_user } from '$lib/utils/store';
	let friends = [];
	let details;
	let user;
	current_user.subscribe((val) => {
		user = val;
	});
	const fetchFriendDetails = async (details) => {
		let temp = [];
		for (var i = 0; i < details.friends.length; i++) {
			let friend = details.friends[i];
			const friendRef = await getDoc(doc(db, friend, 'details'));
			let friendData = friendRef.data();
			temp.push({ ...friendData, id: friend });
		}
		return temp;
	};
	const chatRef = doc(db, user, 'details');
	onSnapshot(chatRef, (docsSnap) => {
		friends = [];
		friends = fetchFriendDetails(docsSnap.data());
	});
</script>

<div class="drawer">
	{#await friends then f}
		{#each f as friend}
			<a href={`/chat/${friend.id}`}>
				<ChatItem user={friend} />
			</a>
		{/each}
	{/await}
	<AddNew />
</div>

<style lang="scss">
	.drawer {
		height: 85vh;
		display: flex;
		flex-direction: column;
		overflow: scroll;
		border-right: grey 1px solid;
	}
</style>
