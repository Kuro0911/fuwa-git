<script>
	import { auth } from '$lib/firebase';
	import { signInWithEmailAndPassword } from 'firebase/auth';

	let email = '';
	let password = '';

	const logIn = async () => {
		try {
			const userLogIn = await signInWithEmailAndPassword(auth, email, password);
			console.log('User Log-in Successful!');
			console.log(userLogIn);
		} catch (error) {
			console.log(error);
		}
	};
</script>

Log-In Screen to be Made
<!-- Just add logIn function as onclick on the submit button -->
