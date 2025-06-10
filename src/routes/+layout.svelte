<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';

	let { children } = $props();

	// Set up view transitions
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{@render children()}
