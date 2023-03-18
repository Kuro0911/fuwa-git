<script>
	export let user;
	import { page } from '$app/stores';
</script>

<div class="tag">
	<div class="avatar">
		<div class={`rounded-full w-10`}>
			<img src={user.profile_picture} alt="user" />
		</div>
	</div>
	<div class="flex flex-col ml-4 w-full">
		<div class="flex justify-between w-full">
			<span class="user_name">{user.name}</span>
			<span class="time">{user.last_message_time}</span>
		</div>
		<div>
			<p class="message">
				{user.last_message.length > 22
					? user.last_message.substring(0, 22) + '...'
					: user.last_message}
			</p>
		</div>
	</div>
</div>
<div class="flex justify-end w-full">
	<div class={`line ${user.id === $page.params.slug ? 'act' : ''}`} />
</div>

<style lang="scss">
	.chat {
		height: 4em;
		padding: 0.25em;
		background-color: black;
	}
	.line {
		height: 1px;
		width: 80%;
		background-color: lightgray;
	}
	.act {
		background-color: #ff00e5;
	}
	.tag {
		display: flex;
		align-items: center;
		padding: 0.5em;
	}
	.user_name {
		font-size: 1em;
		color: white;
	}
</style>
