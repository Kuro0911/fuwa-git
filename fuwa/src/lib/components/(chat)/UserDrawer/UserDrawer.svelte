<script>
	import Clock from './Clock.svelte';

	export let user;
</script>

<div class="drawer">
	<div class="top">
		<Clock />
	</div>
	<div class="bottom">
		<h1>{user.name}</h1>
	</div>
</div>

<style lang="scss">
	.drawer {
		padding: 2em;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.top {
		height: 80%;
	}
	.bottom {
		height: 20%;
		background-color: beige;
	}
</style>
