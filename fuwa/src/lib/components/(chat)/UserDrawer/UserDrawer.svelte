<script>
	import Clock from './Clock.svelte';
	import Avatar from 'svelte-avatar';

	export let user;
</script>

<div class="drawer">
	<div class="top">
		<Clock />
	</div>
	<div class="bottom">
		<div class="tag">
			<Avatar name={user.name} src={user.profile_picture} size="80px" />
			<span class="user_name">{user.name}</span>
		</div>
		<div class="menu">
			<span>Change Profile Picture</span>
			<span>Change Username</span>
			<span>Settings</span>
		</div>
		<div class="log-out">
			<button class="log-out-btn">Log Out</button>
		</div>
	</div>
</div>

<style lang="scss">
	.drawer {
		height: 100%;
		display: flex;
		flex-direction: column;
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
	.tag {
		display: flex;
		align-items: center;
	}
	.user_name {
		font-size: 2.25em;
		margin-left: 0.5em;
		color: white;
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
</style>
