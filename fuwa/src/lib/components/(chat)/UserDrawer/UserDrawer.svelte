<script>
	import Clock from './Clock.svelte';
	import LeftArrow from '$lib/assets/svg/leftArrow.svelte';
	import Avatar from '../Avatar/Avatar.svelte';
	import { db, auth } from '$lib/firebase';
	import { signOut } from 'firebase/auth';

	const userSignOut = async () => {
		console.log('Current User: ', auth.currentUser.displayName);
		try {
			const userLogOut = await signOut(auth);
			console.log('User Signed Out Succesfully!');
			console.log(userLogOut);
		} catch (error) {
			console.log(error);
		}
	};

	export let user;
</script>

<div class="drawer drawer-end">
	<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content">
		<div class="user-drawer">
			<div class="top">
				<Clock />
			</div>
			<div class="bottom">
				<Avatar name={user.name} src={user.profile_picture} size="w-20" font_size="1.55em" />
				<div class="menu">
					<span>Change Profile Picture</span>
					<span>Change Username</span>
					<label for="my-drawer-4">Settings</label>
				</div>
				<div class="log-out">
					<a href="/auth">
						<button class="log-out-btn" on:click={userSignOut}>Log Out</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="drawer-side">
		<label for="my-drawer-4" class="drawer-overlay" />
		<div class="settings">
			<div class="menu-top">
				<label for="my-drawer-4" class="menu-back"><LeftArrow /></label>
				<span class="menu-head">Settings</span>
			</div>
			<div class="menu-drawer">
				<span>Theme</span>
				<span>Live Wallpaper</span>
				<span>Privacy</span>
				<span>Security</span>
				<span>Notifications</span>
				<span>About</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.user-drawer {
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}
	.top {
		padding: 2em;
		height: 65%;
	}
	.bottom {
		height: 35%;
		padding: 1em;
		background-color: #161616;
	}

	.menu {
		display: flex;
		flex-direction: column;
		color: white;
		font-family: sans-serif;
		margin-top: 1em;
		line-height: 2em;
	}
	.log-out {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
	}
	.log-out-btn {
		background: #a020f0;
		border-radius: 15px;
		border: 0;
		width: 125px;
		height: 35px;
		color: white;
		font-size: 1em;
		margin-top: 1em;
	}
	.settings {
		background-color: #161616;
		width: 100%;
		height: 100%;
		padding: 0.75em;
	}
	.menu-top {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.menu-head {
		width: 90%;
		text-align: center;
		font-size: 20px;
		line-height: 23px;
		color: white;
	}
	.menu-back {
		width: 10%;
	}
	.menu-drawer {
		display: flex;
		flex-direction: column;
		color: white;
		font-family: sans-serif;
		line-height: 3em;
		font-size: 1.25em;
	}
</style>
