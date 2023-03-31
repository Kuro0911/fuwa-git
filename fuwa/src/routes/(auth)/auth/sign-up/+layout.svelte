<script>
	import { page } from '$app/stores';
	console.log($page);
</script>

<div class="w-screen h-screen flex items-center justify-center flex-col">
	<ul class="steps steps-vertical lg:steps-horizontal mb-12">
		<li class="step step-primary">Email / Phone Number</li>
		<li class="step">OTP</li>
		<li class="step">Details</li>
		<li class="step">All Set</li>
	</ul>
	<slot />
</div>
