<script>
	import { MOCK_USER } from '$lib/utils/data-store';
	import { page } from '$app/stores';
	import { db } from '../../../../lib/firebase';
	import { collection, addDoc, getDocs } from 'firebase/firestore';

	let message = '';
	const handleChange = (e) => {
		message = e.target.value;
	};

	const addMessage = async (e) => {
		const messageRef = await addDoc(collection(db, 'message'), {
			
		});
	};

	const sendMessage = () => {
		console.log(message);
	};
</script>

<div class="wrap">
	<!-- chat for the sender -->
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-12 rounded-full">
				<img src={MOCK_USER.profile_picture} alt="pfp" />
			</div>
		</div>
		<div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
	</div>
	<!-- chat for the reciver -->
	<div class="chat chat-end">
		<div class="chat-image avatar">
			<div class="w-12 rounded-full">
				<img src={MOCK_USER.profile_picture} alt="pfp" />
			</div>
		</div>
		<div class="chat-bubble chat-bubble-accent">Calm down, Anakin.</div>
	</div>
</div>
<div class="input-box">
	<input class="text-input" placeholder="Type" bind:value={message} on:input={handleChange} />
	<button class="btn btn-accent rounded-full w-32" on:click={sendMessage}>Send</button>
	<button />
</div>

<style lang="scss">
	.wrap {
		padding: 1em;
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
		height: 3em;
		width: 80%;
		margin-right: 0.75em;
		border-radius: 20px;
		padding: 1em;
		color: #000;
	}
</style>
