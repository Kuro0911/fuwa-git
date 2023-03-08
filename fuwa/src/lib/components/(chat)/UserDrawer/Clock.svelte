<script>
	import { onMount } from 'svelte';

	let time = new Date();
	let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	$: day = time.getDay();
	$: date = time.getDate();
	$: month = time.getMonth();
	$: hours = time.getHours();
	$: minutes = time.getMinutes();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<div class="time-wrap">
	<span class="time">{hours < 10 ? '0' : ''}{hours} : {minutes < 10 ? '0' : ''}{minutes}</span>
	<span class="date">{date < 10 ? '0' : ''}{date} / {month + 1 < 10 ? '0' : ''}{month + 1}</span>
	<span class="weekday">{weekday[day]}</span>
</div>

<style lang="scss">
	.time-wrap {
		display: flex;
		flex-direction: column;
		color: white;
		line-height: 2em;
		font-family: sans-serif;
	}
	.time {
		font-weight: 500;
		font-size: 2em;
	}
	.date {
		font-weight: 500;
		font-size: 1em;
	}
	.weekday {
		font-weight: 500;
		font-size: 1em;
		margin-top: -0.75em;
	}
</style>
