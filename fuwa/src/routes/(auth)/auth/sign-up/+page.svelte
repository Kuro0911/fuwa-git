<script>
	let curr = 'email/phone';
	import { db, auth } from '$lib/firebase';
	import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
	import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
	import { current_user } from '$lib/utils/store';

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
	<div class="card w-96 h-80 bg-neutral-focus shadow-xl">
		<div class="carousel carousel-vertical rounded-box">
			<div class="carousel-item h-full">
				<div class="card-body">
					<h1 class="card-title mb-6">Enter E-mail Address</h1>
					<input
						type="email"
						placeholder="Type here"
						class="input w-full max-w-xs mb-12"
						bind:value={email}
						on:change={handleEmail}
					/>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Next</button>
					</div>
				</div>
			</div>
			<div class="carousel-item h-full">
				<div class="card-body">
					<h1 class="card-title mb-6">Enter Password</h1>
					<input
						type="password"
						placeholder="Type here"
						class="input input-bordered input-accent w-full max-w-xs mb-12"
						bind:value={password}
						on:change={handlePassword}
					/>
					<div class="card-actions justify-end">
						<button class="btn btn-primary">Next</button>
					</div>
				</div>
			</div>
			<div class="carousel-item h-full">
				<div class="card-body ">
					<h1 class="card-title mb-6">Enter Full Name</h1>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered input-accent w-full max-w-xs mb-12"
						bind:value={fullname}
						on:change={handleFullName}
					/>
					<div class="card-actions justify-end">
						<button class="btn btn-primary" on:click={signIn}>Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

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
