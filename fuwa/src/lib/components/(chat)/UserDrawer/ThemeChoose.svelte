<script>
	import { theme_url } from '$lib/utils/store';

	let items = [
		'https://media.tenor.com/ZLEbFakygbgAAAAd/relaxed.gif',
		'https://media.tenor.com/f0TnIjGwnCYAAAAC/night-aesthetic.gif',
		'https://media.tenor.com/3F5XmYhEARwAAAAd/chill-japan.gif',
		'https://media.tenor.com/lW2-RXpqnb0AAAAd/swift-key.gif',
		'https://i.pinimg.com/originals/15/d8/8b/15d88bb6a15d4141d77510c4b1ccee8b.gif',
		'https://media.tenor.com/5XeYRKLPdowAAAAd/lofi.gif',
		'https://media.tenor.com/cvrDQE3ty-UAAAAd/city-car.gif',
		'https://media.tenor.com/_f2m8iblpNUAAAAd/anime.gif'
	];
	let url = '';
	theme_url.subscribe((val) => {
		url = val;
	});

	const handleChange = (new_url) => {
		url = new_url;
		theme_url.set(new_url);
	};
</script>

<div class="w-full h-full flex flex-wrap gap-2">
	{#each items as item}
		<button on:click={() => handleChange(item)}>
			{#if item === url}
				<img
					src={item}
					alt=""
					class="w-32 h-60 rounded-md border-solid border-2 border-green-300"
				/>
			{:else}
				<img src={item} alt="" class="w-32 h-60 rounded-md " />
			{/if}
		</button>
	{/each}
</div>
