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
	<div class="card w-[40rem] h-80 bg-neutral-focus shadow-xl">
		<div class="carousel carousel-vertical rounded-box overflow-hidden">
			<div class="carousel-item h-full w-full" id="email">
				<div class="card-body">
					<h1 class="card-title mb-14">Enter E-mail Address</h1>
					<input
						type="email"
						placeholder="example@gmail.com"
						class="input w-full mb-12 text-black"
						bind:value={email}
						on:change={handleEmail}
					/>
					<div class="card-actions justify-end">
						<a href="#password">
							<button class="btn btn-primary w-36 bg-[#A020F0]">Next</button>
						</a>
					</div>
				</div>
			</div>
			<div class="carousel-item h-full" id="password">
				<div class="card-body">
					<h1 class="card-title mb-12">Enter Password</h1>
					<input
						type="password"
						placeholder="Enter Password"
						class="input w-full mb-12 text-black"
						bind:value={password}
						on:change={handlePassword}
					/>
					<div class="card-actions justify-between">
						<a href="#email">
							<button class="btn btn-primary w-36 bg-[#A020F0]">Back</button>
						</a>
						<a href="#name">
							<button class="btn btn-primary w-36 bg-[#A020F0]">Next</button>
						</a>
					</div>
				</div>
			</div>
			<div class="carousel-item h-full" id="name">
				<div class="card-body ">
					<h1 class="card-title mb-12">Enter Full Name</h1>
					<input
						type="text"
						placeholder="Type here"
						class="input w-full mb-12 text-black"
						bind:value={fullname}
						on:change={handleFullName}
					/>

					<div class="card-actions justify-between">
						<a href="#password">
							<button class="btn btn-primary w-36 bg-[#A020F0]">Back</button>
						</a>
						<a href="/chat/123">
							<button class="btn btn-primary w-36 bg-[#A020F0]" on:click={signIn}>Sign Up</button>
						</a>
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
