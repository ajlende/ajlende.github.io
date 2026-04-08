<script lang="ts">
	import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
	import { buttonVariants } from '$lib/components/ui/button/index.js';
	import { cn } from '$lib/utils.js';

	type ButtonVariantProps = NonNullable<Parameters<typeof buttonVariants>[0]>;

	let {
		ref = $bindable(null),
		class: className,
		variant = 'outline',
		size = 'default',
		...restProps
	}: AlertDialogPrimitive.CancelProps & {
		variant?: ButtonVariantProps['variant'];
		size?: ButtonVariantProps['size'];
	} = $props();
</script>

<AlertDialogPrimitive.Cancel
	bind:ref
	data-slot="alert-dialog-cancel"
	class={cn(buttonVariants({ variant, size }), 'cn-alert-dialog-cancel', className)}
	{...restProps}
/>
