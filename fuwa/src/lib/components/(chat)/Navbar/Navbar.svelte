<script>
	import Searchbar from './Searchbar.svelte';
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
			<span>name</span>
			<span>Avatar</span>
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
