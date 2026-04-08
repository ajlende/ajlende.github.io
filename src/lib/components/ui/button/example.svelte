<script lang="ts">
	import RemixIcon from 'remixicon-svelte/icons/remix-fill';
	import { Button, buttonVariants } from '$lib/components/ui/button/index.js';
	let variants = Object.keys(buttonVariants.variants.variant) as Array<
		keyof typeof buttonVariants.variants.variant
	>;
	let sizes = Object.keys(buttonVariants.variants.size) as Array<
		keyof typeof buttonVariants.variants.size
	>;
</script>

<div class="flex flex-wrap items-center gap-2 md:flex-row">
	<div class="flex w-full flex-wrap gap-2">
		{#each variants as variant (variant)}
			<Button {variant}>{variant}</Button>
		{/each}
	</div>
	<div class="flex w-full flex-wrap gap-2">
		{#each sizes as size (size)}
			{#if size.startsWith('icon')}
				<Button {size}><RemixIcon /></Button>
			{:else}
				<Button aria-label={size} {size}>{size}</Button>
			{/if}
		{/each}
	</div>
</div>
