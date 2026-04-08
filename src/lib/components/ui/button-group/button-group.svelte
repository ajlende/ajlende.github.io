<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const variants = tv({
		base: "has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md flex w-fit items-stretch [&>*]:focus-visible:relative [&>*]:focus-visible:z-10 [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1",
		variants: {
			orientation: {
				horizontal:
					'[&>[data-slot]:not(:has(~[data-slot]))]:rounded-r-md! [&>[data-slot]]:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0',
				vertical:
					'[&>[data-slot]:not(:has(~[data-slot]))]:rounded-b-md! flex-col [&>[data-slot]]:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0'
			}
		},
		defaultVariants: {
			orientation: 'horizontal'
		}
	});

	type Variants = VariantProps<typeof variants>;
</script>

<script lang="ts">
	import { cn, type WithElementRef } from '$lib/utils.js';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		orientation = 'horizontal',
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & Variants = $props();
</script>

<div
	bind:this={ref}
	role="group"
	data-slot="button-group"
	data-orientation={orientation}
	class={cn(variants({ orientation }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
