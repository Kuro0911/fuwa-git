<script>
	import { db } from '$lib/firebase';
	import Navbar from '$lib/components/(chat)/Navbar/Navbar.svelte';
	import ChatDrawer from '$lib/components/(chat)/ChatDrawer/ChatDrawer.svelte';
	import UserDrawer from '$lib/components/(chat)/UserDrawer/UserDrawer.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { current_user, theme_url } from '$lib/utils/store';
	let user;
	current_user.subscribe((val) => {
		user = val;
	});

	const fetch = async () => {
		const detailsRef = await getDoc(doc(db, user, 'details'));
		return detailsRef.data();
	};
	let details = fetch();
	let url = '';
	theme_url.subscribe((val) => {
		url = val;
	});
</script>

<div class="container">
	<div class="container-left">
		<div class="wrap">
			<div class="chat-left">
				<Navbar />
				<ChatDrawer />
			</div>
			<div class="chat-center">
				<slot />
			</div>
		</div>
	</div>
	{#await details then det}
		<div class="container-right" style={`background-image: url(${url})`}>
			<UserDrawer user={det} />
		</div>
	{/await}
</div>

<style lang="scss">
	.container {
		display: flex;
		max-width: none;
	}
	.wrap {
		display: flex;
		justify-content: space-between;
	}
	.container-left {
		width: 80%;
	}
	.container-right {
		background-repeat: no-repeat;
		background-size: 100% 65vh;
		width: 20%;
	}
	.chat-left {
		width: 25%;
		background-color: black;
	}
	.chat-center {
		width: 85%;
	}
</style>
