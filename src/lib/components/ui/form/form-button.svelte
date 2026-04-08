<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Button> = $props();
</script>

<Button bind:ref type="submit" {...restProps} />
