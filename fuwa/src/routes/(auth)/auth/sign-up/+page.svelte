<script>
	let curr = 'email/phone';
	import { db, auth, storage } from '$lib/firebase';
	import { collection, addDoc, getDocs, setDoc, doc, updateDoc } from 'firebase/firestore';
	import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth';
	import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
	import { current_user } from '$lib/utils/store';
	import { goto } from '$app/navigation';
	import { getHash } from '$lib/utils/hash';
	import EllipseUp from '$lib/assets/svg/ellipse-up.svelte';

	let user_id = '';

	current_user.subscribe((val) => {
		user_id = val;
	});

	let email = '';
	let password = '';
	let fullname = '';

	let uploadImageData;
	let container;
	let image;
	let placeholder;
	let showImage = false;
	let pfp_url = '';

	const onChange = async () => {
		const file = uploadImageData.files[0];
		// console.log(uploadImageData);

		try {
			if (uploadImageData === null) return;
			const emailHash = getHash(email);
			const imageRef = ref(storage, `${emailHash}`);
			uploadBytes(imageRef, file).then((snapshot) => {
				getDownloadURL(snapshot.ref).then((url) => {
					pfp_url = url;
				});
			});
			console.log(pfp_url);
			// const currUserDocRef = doc(db, `${emailHash}`, details);
		} catch (error) {
			console.log(error);
		}

		if (file) {
			showImage = true;

			const reader = new FileReader();
			reader.addEventListener('load', function () {
				image.setAttribute('src', reader.result);
			});
			reader.readAsDataURL(file);

			return;
		}
		showImage = false;
	};

	const handleEmail = (e) => {
		email = e.target.value;
	};
	const handlePassword = (e) => {
		password = e.target.value;
	};
	const handleFullName = (e) => {
		fullname = e.target.value;
	};

	// check this shit out nigg

	// #############################
	onAuthStateChanged(auth, async (user) => {
		await updateProfile(auth.currentUser, {
			displayName: fullname
		});
		if (user) {
			console.log('u-email: ', user.email);
			console.log('u-dn: ', user.displayName);
		}
	});
	// #############################

	const signIn = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			addEmailToDetails();
			current_user.set(getHash(email));
			goto('/chat');
			email = '';
			password = '';
			fullname = '';
		} catch (error) {
			console.log(error);
			// add something to show failure
			goto('/auth');
		}
	};

	const addEmailToDetails = async () => {
		try {
			const data = {
				active: true,
				name: fullname,
				profile_picture: pfp_url,
				friends: []
			};
			const emailHash = getHash(email);
			const detailsRef = await setDoc(doc(db, `${emailHash}`, 'details'), data);
			const chatRef = await setDoc(doc(db, `${emailHash}`, 'chatpool'), {});
			// add the chat pool too
			current_user.set(email);
			// console.log(detailsRef);
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col">
	<EllipseUp />
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
					<div class="card-actions justify-end items-center">
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
					<div class="card-actions justify-between items-center">
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
				<div class="card-body">
					<h1 class="card-title">Enter Full Name and Profile Picture</h1>
					<div class="flex flex-row justify-center items-center">
						<div class="w-4/5 h-32 flex justify-start items-center">
							<input
								type="text"
								placeholder="Type here"
								class="input w-10/12 text-black"
								bind:value={fullname}
								on:change={handleFullName}
							/>
						</div>
						<div class="w-1/5 mr-2 flex justify-center items-center h-32">
							<label class="w-52 h-2">
								<div class="avatar" bind:this={container}>
									<div class="w-44 rounded-full mt-[-6em] ring ring-primary">
										{#if showImage}
											<img bind:this={image} src="" alt="Preview" />
										{:else}
											<img
												src="https://api.dicebear.com/6.x/icons/svg?seed=aaaaaaaaaaaaaaaaaa&scale=60&backgroundColor[]"
												alt=""
											/>
										{/if}
									</div>
								</div>
								<input
									bind:this={uploadImageData}
									type="file"
									on:change={onChange}
									class="opacity-0"
								/>
							</label>
						</div>
					</div>

					<div class="card-actions justify-between items-center mt-8 z-0 ">
						<a href="#password">
							<button class="btn btn-primary w-36 bg-[#A020F0]">Back</button>
						</a>
						<a href="#sign-up">
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
