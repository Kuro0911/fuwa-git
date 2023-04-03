<script>
	let curr = 'email/phone';
	import { db, auth } from '../../../../../lib/firebase';
	import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
	import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
	import { current_user } from '../../../../../lib/utils/store';

	let user_id = '';

	current_user.subscribe((val) => {
		user_id = val;
	});

	let email = '';
	let password = '';
	let fullname = '';

	const handleEmail = (e) => {
		email = e.target.value;
	};
	const handlePassword = (e) => {
		password = e.target.value;
	};
	const handleFullName = (e) => {
		fullname = e.target.value;
	};

	onAuthStateChanged(auth, async (user) => {
		await updateProfile(auth.currentUser, {
			displayName: fullname
		});
		if (user) {
			console.log('u-email: ', user.email);
			console.log('u-dn: ', user.displayName);
		}
	});

	const signIn = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);

			addEmailToDetails();
			email = '';
			password = '';
			fullname = '';
		} catch (error) {
			console.log(error);
		}
	};

	const addEmailToDetails = async () => {
		try {
			const data = {
				active: true
			};
			const detailsRef = await setDoc(doc(db, `${email}`, 'details'), data);
			current_user.set(email);
			// console.log(detailsRef);
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
	<div class="card w-96 bg-neutral-focus shadow-xl">
		<div class="card-body h-full">
			<h1 class="card-title mb-6">Enter E-mail Address</h1>
			<input
				type="email"
				placeholder="Type here"
				class="input input-bordered input-accent w-full max-w-xs mb-12"
				bind:value={email}
				on:change={handleEmail}
			/>
			<h1 class="card-title mb-6">Enter Password</h1>
			<input
				type="password"
				placeholder="Type here"
				class="input input-bordered input-accent w-full max-w-xs mb-12"
				bind:value={password}
				on:change={handlePassword}
			/>
			<h1 class="card-title mb-6">Enter Full Name</h1>
			<input
				type="text"
				placeholder="Type here"
				class="input input-bordered input-accent w-full max-w-xs mb-12"
				bind:value={fullname}
				on:change={handleFullName}
			/>
			<div class="card-actions justify-end">
				<a href="./otp">
					<button class="btn btn-primary" on:click={signIn}>Next</button>
				</a>
			</div>
		</div>
	</div>
</div>
