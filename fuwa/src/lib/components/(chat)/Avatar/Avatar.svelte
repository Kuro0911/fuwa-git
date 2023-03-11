<script>
	export let name, src, size, font_size, show_name;

	function cssVariables(node, variables) {
		setCssVariables(node, variables);

		return {
			update(variables) {
				setCssVariables(node, variables);
			}
		};
	}
	function setCssVariables(node, variables) {
		for (const name in variables) {
			node.style.setProperty(`--${name}`, variables[name]);
		}
	}
</script>

<div class="tag">
	<div class="avatar">
		<div class={`rounded-full ${size}`}>
			<img {src} alt="user" />
		</div>
	</div>
	<span
		class={`user_name ${show_name === 'false' ? 'hidden' : ''}`}
		use:cssVariables={{ font_size }}>{name}</span
	>
</div>

<style>
	.tag {
		display: flex;
		align-items: center;
		position: relative;
		z-index: 999;
	}
	.user_name {
		font-size: var(--font_size);
		margin-left: 0.5em;
		color: white;
	}
</style>
