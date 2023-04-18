<script>
	import Ellipse from '$lib/assets/svg/ellipse.svelte';
	import LoginLogo from '$lib/assets/svg/login_logo.svelte';
</script>

<div class="w-screen h-screen flex flex-row items-center overflow-hidden overflow-x-hidden">
	<div class="flex flex-col h-44 justify-around w-2/5 items-center relative z-[999]">
		<a href="auth/log-in">
			<button class="btn btn-primary rounded-full w-52 bg-[#A020F0]"> log in </button>
		</a>
		<a href="auth/sign-up#email">
			<button class="btn btn-primary rounded-full w-52 bg-[#A020F0]"> sign up </button>
		</a>
	</div>
	<div class="flex bg-black w-3/5 justify-end ">
		<div class="absolute top-[40%] w-full flex justify-center z-0">
			<LoginLogo />
		</div>
		<Ellipse />
	</div>
</div>
