<script>
	import { MOCK_USER } from '$lib/utils/data-store';
	import { page } from '$app/stores';
</script>

<div class="wrap">
	<div class="chat chat-start">
		<div class="chat-image avatar">
			<div class="w-12 rounded-full">
				<img src={MOCK_USER.profile_picture} alt="pfp" />
			</div>
		</div>
		<div class="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
	</div>
	<div class="chat chat-end">
		<div class="chat-image avatar">
			<div class="w-12 rounded-full">
				<img src={MOCK_USER.profile_picture} alt="pfp" />
			</div>
		</div>
		<div class="chat-bubble chat-bubble-accent">Calm down, Anakin.</div>
	</div>
</div>

<style lang="scss">
	.wrap {
		padding: 1em;
	}
</style>
