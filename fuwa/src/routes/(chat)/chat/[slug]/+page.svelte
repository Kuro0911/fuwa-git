<script>
	import { db } from '$lib/firebase';
	import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
	import { page } from '$app/stores';
	import Active from '$lib/assets/svg/active.svelte';
	import NotActive from '$lib/assets/svg/not_active.svelte';
	import Avatar from '$lib/components/(chat)/Avatar/Avatar.svelte';
	import Search from '$lib/assets/svg/search.svelte';
	import Gallery from '$lib/assets/svg/gallery.svelte';
	import Mic from '$lib/assets/svg/mic.svelte';
	import Phone from '$lib/assets/svg/phone.svelte';
	import Hamburger from '$lib/assets/svg/hamburger.svelte';
	import { current_user, final_chats } from '$lib/utils/store';

	let user;
	current_user.subscribe((val) => {
		user = val;
	});
	let processed_chats;
	final_chats.subscribe((val) => {
		processed_chats = val;
	});
	let message = '';

	const handleChange = (e) => {
		message = e.target.value;
	};
	const sendMessage = () => {
		let date = new Date();
		let timestamp = date[Symbol.toPrimitive]('number').toString();

		// add to doc using the primitive date as key and also the message as given belo
		let new_message = {};
		new_message[timestamp] = user + '$' + message;
		console.log(new_message);
		// push this shit in the document;
		const docRefSender = doc(db, user, 'chatpool', $page.data.friend.id, 'messages');
		const docRefReciever = doc(db, $page.data.friend.id, 'chatpool', user, 'messages');
		updateDoc(docRefSender, new_message)
			.then((docRefSender) => {
				console.log('A New Document Field has been added to an existing document');
			})
			.catch((error) => {
				console.log(error);
			});
		updateDoc(docRefReciever, new_message)
			.then((docRefReciever) => {
				console.log('A New Document Field has been added to an existing document');
			})
			.catch((error) => {
				console.log(error);
			});
		message = '';
	};
</script>

<div class="wrap">
	<div class="navbar">
		<div class="left">
			<div class="icon">
				{#if $page.data.friend.active}
					<Active />
				{:else}
					<NotActive />
				{/if}
			</div>
		</div>
		<div class="center">
			<Avatar
				name={$page.data.friend.name}
				src={$page.data.friend.profile_picture}
				size="w-20"
				show_name="false"
			/>
			<span class="font-sans text-xl font-bold">{$page.data.friend.name}</span>
		</div>
		<div class="right">
			<div class="icon">
				<Search />
			</div>
			<div class="icon">
				<Gallery />
			</div>
			<div class="icon">
				<Mic />
			</div>
			<div class="icon">
				<Phone />
			</div>
			<div class="icon">
				<Hamburger />
			</div>
		</div>
	</div>

	<div class="p-4">
		{#if processed_chats.length > 0}
			{#each processed_chats as chat}
				{#if chat.hash === $page.params.slug}
					<!-- chat for the sender -->
					<div class="chat chat-start">
						<div class="chat-image avatar">
							<div class="w-12 rounded-full">
								<img src={$page.data.friend.profile_picture} alt="pfp" />
							</div>
						</div>
						<div class="chat-bubble chat-bubble-primary">{chat.msg}</div>
					</div>
				{:else}
					<!-- chat for the reciver -->
					<div class="chat chat-end">
						<div class="chat-image avatar">
							<div class="w-12 rounded-full">
								<img src={$page.data.details.profile_picture} alt="pfp" />
							</div>
						</div>
						<div class="chat-bubble chat-bubble-accent">{chat.msg}</div>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</div>
<div class="input-box">
	<input class="text-input" placeholder="Type" bind:value={message} on:input={handleChange} />
	<button class="btn btn-accent rounded-full w-32" on:click={sendMessage}>Send</button>
</div>

<style lang="scss">
	.wrap {
		height: 90%;
	}
	.input-box {
		height: 10%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.text-input {
		background-color: white;
		height: 2em;
		width: 80%;
		margin-right: 0.75em;
		border-radius: 20px;
		padding: 1em;
		color: #000;
	}

	.navbar {
		width: 100%;
		display: flex;
	}
	.left {
		width: 10%;
	}
	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 60%;
	}
	.right {
		width: 30%;
		display: flex;
		justify-content: center;
	}
	.icon {
		margin: 0.65em;
	}
</style>
