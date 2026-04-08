<script lang="ts">
	import { Badge, badgeVariants } from '$lib/components/ui/badge/index.js';
	import BadgeCheckIcon from 'remixicon-svelte/icons/checkbox-circle-line';
	let variants = Object.keys(badgeVariants.variants.variant) as Array<
		keyof typeof badgeVariants.variants.variant
	>;
</script>

<div class="flex flex-col items-center gap-2">
	<div class="flex w-full flex-wrap gap-2">
		{#each variants as variant (variant)}
			<Badge {variant}>{variant}</Badge>
		{/each}
	</div>
	<div class="flex w-full flex-wrap gap-2">
		<Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
			<BadgeCheckIcon />
			Verified
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">8</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
			99
		</Badge>
		<Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
			20+
		</Badge>
	</div>
</div>
