<script>
	let OTP = ['', '', '', ''];
	const handleChange = (e, idx) => {
		OTP[idx] = e.target.value;
	};
	const Next = () => {
		console.log(OTP);
	};
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col">
	<ul class="steps steps-vertical lg:steps-horizontal mb-12">
		<li class="step step-primary">Email / Phone Number</li>
		<li class="step step-primary">OTP</li>
		<li class="step">Details</li>
		<li class="step">All Set</li>
	</ul>
	<div class="card w-96 bg-neutral-focus shadow-xl h-72">
		<div class="card-body h-full">
			<h1 class="card-title mb-12">Enter the OTP</h1>
			<div class="flex justify-evenly">
				<input
					type="text"
					class="input input-bordered input-accent w-10 max-w-xs mb-12 h-16 text-2xl p-1"
					maxlength="1"
					bind:value={OTP[0]}
					on:input={(e) => handleChange(e, 0)}
				/>
				<input
					type="text"
					class="input input-bordered input-accent w-10 max-w-xs mb-12 p-1 h-16 text-2xl"
					maxlength="1"
					bind:value={OTP[1]}
					on:input={(e) => handleChange(e, 1)}
				/>
				<input
					type="text"
					class="input input-bordered input-accent w-10 max-w-xs mb-12 p-1 h-16 text-2xl"
					maxlength="1"
					bind:value={OTP[2]}
					on:input={(e) => handleChange(e, 2)}
				/>
				<input
					type="text"
					class="input input-bordered input-accent w-10 max-w-xs mb-12 h-16 text-2xl p-1"
					maxlength="1"
					bind:value={OTP[3]}
					on:input={(e) => handleChange(e, 3)}
				/>
			</div>
			<div class="card-actions justify-end">
				<a href="./details">
					<button class="btn btn-primary" on:click={Next}>Next</button>
				</a>
			</div>
		</div>
	</div>
</div>
