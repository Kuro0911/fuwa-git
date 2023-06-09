<div class="container">
	<div class="bubbles">
		<span style="--i:12;" />
		<span style="--i:14;" />
		<span style="--i:11;" />
		<span style="--i:12;" />
		<span style="--i:21;" />
		<span style="--i:26;" />
		<span style="--i:24;" />
		<span style="--i:10;" />
		<span style="--i:14;" />
		<span style="--i:13;" />
		<span style="--i:11;" />
		<span style="--i:21;" />
		<span style="--i:26;" />
		<span style="--i:24;" />
		<span style="--i:10;" />
		<span style="--i:14;" />
		<span style="--i:13;" />
		<span style="--i:11;" />
	</div>
</div>
<p class="text-2xl fixed center left-[50%] ml-[-17.5%] top-[50%]">
	Click on an Avatar or add a new friend to start chatting
</p>

<style lang="scss">
	.container {
		height: 100%;
		position: relative;
		scroll-behavior: auto;
	}
	.bubbles {
		position: relative;
		display: flex;
		justify-content: space-around;
	}
	.bubbles span {
		position: relative;
		width: 25px;
		height: 25px;
		background: #ff00e5;
		margin: 0 4px;
		border-radius: 50%;
		box-shadow: 0 0 0 10px #ff00e544, 0 0 50px #ff00e5, 0 0 100px #ff00e5;
		animation: animate 20s linear infinite;
		animation-duration: calc(200s / var(--i));
	}
	.bubbles span:nth-child(odd) {
		background: #0ce2ff;
		box-shadow: 0 0 0 10px #0ce2ff44, 0 0 50px #0ce2ff, 0 0 100px #0ce2ff;
	}
	@keyframes animate {
		0% {
			transform: translateY(100vh) scale(0);
		}
		100% {
			transform: translateY(0vh) scale(1);
		}
	}
</style>
