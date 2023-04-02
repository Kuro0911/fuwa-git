<script>
	import { db } from '../../../../../lib/firebase';
	import { collection, setDoc, doc, updateDoc } from 'firebase/firestore';
	import { current_user } from '../../../../../lib/utils/store';

	let user_id = '';
	current_user.subscribe((val) => {
		user_id = val;
	});

	let user_name = '';
	const handleUsername = (e) => {
		user_name = e.target.value;
	};

	const addNameToDetails = async () => {
		try {
			const detailsRef = doc(db, user_id, 'details');
			await updateDoc(detailsRef, {
				name: user_name
			});
		} catch (error) {
			eonsole.log(error);
		}
	};
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col">
	<ul class="steps steps-vertical lg:steps-horizontal mb-12">
		<li class="step step-primary">Email / Phone Number</li>
		<li class="step step-primary">OTP</li>
		<li class="step step-primary">Details</li>
		<li class="step">All Set</li>
	</ul>
	<div class="card w-96 bg-neutral-focus shadow-xl h-72">
		<div class="card-body h-full">
			<h1 class="card-title mb-12">Enter your Name</h1>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-accent w-full max-w-xs mb-12 py-6"
				on:change={handleUsername}
			/>
			<div class="card-actions justify-end">
				<a href="./fin">
					<button class="btn btn-primary" on:click={addNameToDetails}>Next</button>
				</a>
			</div>
		</div>
	</div>
</div>
