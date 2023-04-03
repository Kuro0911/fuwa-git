<script>
	let query = '';
	const handleChange = (e) => {
		query = e.target.value;
	};
	const handleSearch = () => {
		console.log(query);
	};
</script>

<div class="searchbar">
	<button class="search-btn" on:click={handleSearch}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5"
			fill="none"
			viewBox="0 0 24 24"
			stroke="black"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/></svg
		>
	</button>
	<input class="search" type="text" bind:value={query} on:input={handleChange} />
</div>

<style lang="scss">
	.searchbar {
		background-color: white;
		display: flex;
		width: 90%;
		height: 2em;
		border-radius: 20px;
	}
	.search {
		background-color: white;
		color: black;
		width: 100%;
		margin-left: 0.25em;
		border-radius: 20px;
	}
	.search:focus {
		outline: none;
	}
	.search-btn {
		width: 1.75em;
		border-radius: 20px 0 0 20px;
		margin: 0.5em;
	}
</style>
