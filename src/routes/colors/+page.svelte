<script lang="ts">
	import { mergeAttrs } from 'melt';
	import { Tooltip } from 'melt/components';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const { colors, shades, colorData } = data;

	let tooltipText = $state('');
	let tooltipTimeout = $state<NodeJS.Timeout | undefined>(undefined);
</script>

<svelte:head>
	<title>Colors</title>
	<meta name="description" content="Custom Tailwind color palette" />
</svelte:head>

<div
	class="grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4 bg-white p-10 font-medium text-blue-950 dark:bg-blue-950 dark:text-white"
>
	<div class="z-9 bg-white dark:bg-blue-950">&nbsp;</div>
	<div
		class="grid grid-cols-11 justify-items-center gap-1.5 bg-white font-medium text-blue-950 *:rotate-180 *:[writing-mode:vertical-lr] max-sm:py-1 sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] dark:bg-blue-950 dark:text-white"
	>
		{#each shades as shade}
			<div>{shade}</div>
		{/each}
	</div>
	{#each colors as color}
		<p class="font-medium text-blue-950 capitalize sm:pr-12 dark:text-white">{color}</p>
		<div class="grid grid-cols-11 gap-1.5 sm:gap-4">
			{#each shades as shade}
				<div class="contents">
					<Tooltip openDelay={0} closeOnPointerDown={false}>
						{#snippet children(tooltip)}
							<button
								aria-label="{color}-{shade}"
								class="aspect-1/1 w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
								{...mergeAttrs(tooltip.trigger, {
									style: `background-color: ${colorData[color]?.[shade]}`,
									onpointerenter: () => {
										tooltipText = '';
										clearTimeout(tooltipTimeout);
									},
									onpointerdown: () => {
										navigator.clipboard.writeText(colorData[color]?.[shade]);
										tooltipText = 'Copied OKLCH value!';
										tooltipTimeout = setTimeout(() => {
											tooltipText = '';
										}, 1300);
									}
								})}
							></button>
							<div
								class="rounded-full border border-blue-950 bg-blue-950/90 px-2 py-1 text-center font-mono text-xs/6 font-medium whitespace-nowrap text-white opacity-100 inset-ring inset-ring-white/10"
								{...tooltip.content}
							>
								<p>{tooltipText || colorData[color]?.[shade]}</p>
							</div>
						{/snippet}
					</Tooltip>
				</div>
			{/each}
		</div>
	{/each}
	<div
		class="pt-2 text-center text-blue-500 italic max-sm:hidden sm:col-span-2 md:col-span-1 md:col-start-2 dark:text-blue-400"
	>
		Click to copy the OKLCH value.
	</div>
</div>
