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
	}
	.logo-container {
		margin-bottom: 1em;
		margin-right: 2em;
	}
</style>
