<script>
	import Avatar from '../Avatar/Avatar.svelte';
	export let user;
</script>

<div class="chat">
	<Avatar name={user.name} src={user.profile_picture} size="w-10" font_size="1em" />
</div>

<style lang="scss">
	.chat {
		height: 4em;
		padding: 1em;
		background-color: black;
		border: 1px solid white;
	}
</style>
