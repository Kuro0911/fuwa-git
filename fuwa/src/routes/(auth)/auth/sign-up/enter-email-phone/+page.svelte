<script>
	let curr = 'email/phone';
	import { db } from '../../../../../lib/firebase';
	import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
	import { current_user } from '../../../../../lib/utils/store';

	let user_id = '';

	current_user.subscribe((val) => {
		user_id = val;
	});

	let email_or_mobile = '';

	const handleEmailOrMobile = (e) => {
		email_or_mobile = e.target.value;
	};

	const addEmailToDetails = async () => {
		try {
			const data = {
				active: true
			};
			const detailsRef = await setDoc(doc(db, `${email_or_mobile}`, 'details'), data);
			current_user.set(email_or_mobile);
			console.log(detailsRef);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col">
	<ul class="steps steps-vertical lg:steps-horizontal mb-12">
		<li class="step step-primary">Email / Phone Number</li>
		<li class="step">OTP</li>
		<li class="step">Details</li>
		<li class="step">All Set</li>
	</ul>
	<div class="card w-96 bg-neutral-focus shadow-xl h-72">
		<div class="card-body h-full">
			<h1 class="card-title mb-12">Enter phone no. / e-mail</h1>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-accent w-full max-w-xs mb-12"
				on:change={handleEmailOrMobile}
			/>
			<div class="card-actions justify-end">
				<a href="./otp">
					<button class="btn btn-primary" on:click={addEmailToDetails}>Next</button>
				</a>
			</div>
		</div>
	</div>
</div>
