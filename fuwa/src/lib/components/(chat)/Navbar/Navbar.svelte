<script>
	import Searchbar from './Searchbar.svelte';
	import Logo from '$lib/assets/svg/logo.svelte';
</script>

<div class="navbar">
	<div class="logo-container">
		<Logo />
	</div>
	<Searchbar />
</div>

<style lang="scss">
	.navbar {
		height: 15vh;
		color: white;
		display: flex;
		flex-direction: column;
		border-right: grey 1px solid;
	}
	.logo-container {
		width: 100%;
		margin-bottom: 1em;
		margin-left: 1em;
		display: flex;
		justify-content: flex-start;
	}
</style>
