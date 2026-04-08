<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const variants = tv({
		base: 'data-[invalid=true]:text-destructive gap-3 group/field flex w-full',
		variants: {
			orientation: {
				vertical: 'cn-field-orientation-vertical flex-col [&>*]:w-full [&>.sr-only]:w-auto',
				horizontal:
					'cn-field-orientation-horizontal flex-row items-center has-[>[data-slot=field-content]]:items-start [&>[data-slot=field-label]]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
				responsive:
					'cn-field-orientation-responsive flex-col @md/field-group:flex-row @md/field-group:items-center @md/field-group:has-[>[data-slot=field-content]]:items-start [&>*]:w-full @md/field-group:[&>*]:w-auto [&>.sr-only]:w-auto @md/field-group:[&>[data-slot=field-label]]:flex-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'
			}
		},
		defaultVariants: {
			orientation: 'vertical'
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
		orientation = 'vertical',
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & Variants = $props();
</script>

<div
	bind:this={ref}
	role="group"
	data-slot="field"
	data-orientation={orientation}
	class={cn(variants({ orientation }), className)}
	{...restProps}
>
	{@render children?.()}
</div>
