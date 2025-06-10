<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col bg-blue-50 dark:bg-blue-950">
	{@render children()}
</div>
