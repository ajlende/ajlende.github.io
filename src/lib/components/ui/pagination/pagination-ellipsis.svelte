<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
	import RiMoreLine from 'remixicon-svelte/icons/more-line';

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLAttributes<HTMLSpanElement>>> = $props();
</script>

<span
	bind:this={ref}
	aria-hidden="true"
	data-slot="pagination-ellipsis"
	class={cn(
		"flex size-9 items-center items-center justify-center justify-center [&_svg:not([class*='size-'])]:size-4",
		className
	)}
	{...restProps}
>
	<RiMoreLine />
	<span class="sr-only">More pages</span>
</span>
