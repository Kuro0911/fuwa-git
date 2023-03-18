<script>
	import Avatar from '../Avatar/Avatar.svelte';
	import Searchbar from './Searchbar.svelte';
	import { SINGLE_USER_CHAT } from '$lib/utils/data-store';
	import Search from '$lib/assets/svg/search.svelte';
	import Gallery from '$lib/assets/svg/gallery.svelte';
	import Mic from '$lib/assets/svg/mic.svelte';
	import Phone from '$lib/assets/svg/phone.svelte';
	import Hamburger from '$lib/assets/svg/hamburger.svelte';
	import Active from '$lib/assets/svg/active.svelte';
	import NotActive from '$lib/assets/svg/not_active.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
</script>

<div class="navbar">
	<div class="left">
		<div class="left-top">
			<div class="logo-container">
				<Logo />
			</div>
		</div>
		<div class="left-bottom"><Searchbar /></div>
	</div>
	<div class="right">
		<div class="right-left">
			<div class="icon">
				{#if SINGLE_USER_CHAT.active}
					<Active />
				{:else}
					<NotActive />
				{/if}
			</div>
		</div>
		<div class="right-center">
			<Avatar
				name={SINGLE_USER_CHAT.name}
				src={SINGLE_USER_CHAT.profile_picture}
				size="w-20"
				show_name="false"
			/>
			<span class="font-sans text-xl font-bold">{SINGLE_USER_CHAT.name}</span>
		</div>
		<div class="right-right">
			<div class="icon">
				<Search />
			</div>
			<div class="icon">
				<Gallery />
			</div>
			<div class="icon">
				<Mic />
			</div>
			<div class="icon">
				<Phone />
			</div>
			<div class="icon">
				<Hamburger />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.navbar {
		background-color: black;
		height: 15vh;
		color: white;
		display: flex;
	}
	.left {
		width: 25%;
		display: flex;
		flex-direction: column;
	}
	.left-top {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.logo-container {
		margin-bottom: 1em;
		margin-right: 2em;
	}
	.left-bottom {
		width: 100%;
		margin-top: 1em;
		display: flex;
	}
	.right {
		width: 75%;
		display: flex;
	}
	.right-left {
		width: 10%;
	}
	.right-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 60%;
	}
	.right-right {
		width: 30%;
		display: flex;
		justify-content: center;
	}
	.icon {
		margin: 0.65em;
	}
</style>
