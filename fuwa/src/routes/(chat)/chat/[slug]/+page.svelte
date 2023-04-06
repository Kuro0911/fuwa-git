<script>
	import { MOCK_USER } from '$lib/utils/data-store';
	import { page } from '$app/stores';
	import Active from '$lib/assets/svg/active.svelte';
	import NotActive from '$lib/assets/svg/not_active.svelte';
	import Avatar from '$lib/components/(chat)/Avatar/Avatar.svelte';
	import Search from '$lib/assets/svg/search.svelte';
	import Gallery from '$lib/assets/svg/gallery.svelte';
	import Mic from '$lib/assets/svg/mic.svelte';
	import Phone from '$lib/assets/svg/phone.svelte';
	import Hamburger from '$lib/assets/svg/hamburger.svelte';

	function sortObject(obj) {
		return Object.keys(obj)
			.sort()
			.reduce(function (result, key) {
				result[key] = obj[key];
				return result;
			}, {});
	}

	let param = $page.params.slug;
	let curr = $page.data.details;
	let chats = $page.data.chats[param];
	let data = $page.data.friends;
	let frnd = data.find((f) => f.id === param);
	let message = '';
	chats[0] = sortObject(chats[0]);

	let processed_chats = [];
	for (const t in chats[0]) {
		let chatRef = chats[0][t].split('$');
		processed_chats.push({ hash: chatRef[0], msg: chatRef[1] });
	}
	const handleChange = (e) => {
		message = e.target.value;
	};
	const sendMessage = () => {
		let date = new Date();
		let key = date[Symbol.toPrimitive]('number');

		// add to doc using the primitive date as key and also the message as given belo
		console.log(key);
		console.log(message);
		let new_message = { key: message };
		// push this shit in the document;
	};
</script>

<div class="wrap">
	<div class="navbar">
		<div class="left">
			<div class="icon">
				{#if frnd.active}
					<Active />
				{:else}
					<NotActive />
				{/if}
			</div>
		</div>
		<div class="center">
			<Avatar name={frnd.name} src={frnd.profile_picture} size="w-20" show_name="false" />
			<span class="font-sans text-xl font-bold">{frnd.name}</span>
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
		{#each processed_chats as chat}
			{#if chat.hash === param}
				<!-- chat for the sender -->
				<div class="chat chat-start">
					<div class="chat-image avatar">
						<div class="w-12 rounded-full">
							<img src={frnd.profile_picture} alt="pfp" />
						</div>
					</div>
					<div class="chat-bubble chat-bubble-primary">{chat.msg}</div>
				</div>
			{:else}
				<!-- chat for the reciver -->
				<div class="chat chat-end">
					<div class="chat-image avatar">
						<div class="w-12 rounded-full">
							<img src={curr.profile_picture} alt="pfp" />
						</div>
					</div>
					<div class="chat-bubble chat-bubble-accent">{chat.msg}</div>
				</div>
			{/if}
		{/each}
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
