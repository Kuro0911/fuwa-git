<script>
	import Avatar from '../Avatar/Avatar.svelte';
	import Searchbar from './Searchbar.svelte';
	import { SINGLE_USER_CHAT } from '$lib/utils/data-store';
</script>

<div class="navbar">
	<div class="left">
		<div class="left-top">
			<div class="logo-container">
				<h1>fuwa</h1>
			</div>
		</div>
		<div class="left-bottom"><Searchbar /></div>
	</div>
	<div class="right">
		<div class="right-left">active?</div>
		<div class="right-center">
			<Avatar
				name={SINGLE_USER_CHAT.name}
				src={SINGLE_USER_CHAT.profile_picture}
				size="w-20"
				show_name="false"
			/>
			<span class="font-sans text-xl font-bold">{SINGLE_USER_CHAT.name}</span>
		</div>
		<div class="right-right">icons</div>
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
		text-align: left;
	}
	.left-bottom {
		width: 100%;
		margin-top: 1em;
		display: flex;
		align-items: center;
		justify-content: center;
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
	}
</style>
