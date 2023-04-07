<script>
	import { getHash } from '$lib/utils/hash';
	import { db, auth } from '$lib/firebase.js';
	import { arrayUnion, getDoc, updateDoc, doc } from 'firebase/firestore';

	let email = '';
	let friendError = '';
	const handleEmail = (e) => {
		email = e.target.value;
	};
	const handleAddFriend = async () => {
		try {
			let friendHash = getHash(email);
			let currUserHash = getHash(auth.currentUser.email);
			console.log(friendHash);
			console.log(currUserHash);

			const friendDocCheckRef = doc(db, friendHash, 'details');
			const friendDocSnap = await getDoc(friendDocCheckRef);
			if (!friendDocSnap.exists()) {
				friendError = 'Email not registered with any user';
				return;
			}
			const currUserDocRef = doc(db, currUserHash, 'details');
			const friendDocRef = doc(db, friendHash, 'details');

			await updateDoc(currUserDocRef, {
				friends: arrayUnion(friendHash)
			});

			await updateDoc(friendDocRef, {
				friends: arrayUnion(currUserHash)
			});
			console.log('Added Succesfully');
		} catch (error) {
			console.log(error);
			friendError = 'Could not add friend';
		}

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
