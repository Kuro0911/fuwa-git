<script>
	import { getHash } from '$lib/utils/hash';

	let email = '';
	const handleEmail = (e) => {
		email = e.target.value;
	};
	const handleAddFriend = () => {
		let friendHash = getHash(email);
		console.log(friendHash);
		// create new_doc for friend
	};
</script>

<label for="my-modal" class="btn mt-8">Add New Friend</label>

<input type="checkbox" id="my-modal" class="modal-toggle" />
<label for="my-modal" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<h3 class="font-bold text-lg">Enter Friend Email</h3>
		<p class="py-4">
			<input
				type="email"
				placeholder="example@gmail.com"
				class="input w-full text-black"
				bind:value={email}
				on:change={handleEmail}
			/>
		</p>
		<div class="modal-action justify-between">
			<label for="my-modal" class="btn w-32">Close</label>
			<button class="btn btn-info w-32" on:click={handleAddFriend}>Add</button>
		</div>
	</label>
</label>

<style>
	input {
		background-color: white;
		height: 3em;
		border-radius: 1em;
		padding: 1em;
	}
	input:focus {
		outline: none;
	}
</style>
