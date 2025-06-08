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
	class="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] pt-26.25 lg:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem] lg:pt-14.25 xl:grid-cols-[var(--container-2xs)_2.5rem_minmax(0,1fr)_2.5rem]"
>
	<div class="relative row-start-1 grid grid-cols-subgrid lg:col-start-3">
		<div
			class="mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 xl:max-w-5xl xl:grid-cols-[minmax(0,1fr)_var(--container-2xs)]"
		>
			<div class="px-4 pt-10 pb-24 sm:px-6 xl:pr-10">
				<div class="prose mt-10">
					<div class="my-10">
						<div class="not-prose grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-4">
							<div class="sticky top-28 z-9 bg-white lg:top-14 dark:bg-gray-950">&nbsp;</div>
							<div
								class="sticky top-28 z-9 col-start-2 grid grid-cols-11 justify-items-center gap-1.5 bg-white font-medium text-gray-950 *:rotate-180 *:[writing-mode:vertical-lr] max-sm:py-1 sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] lg:top-14 dark:bg-gray-950 dark:text-white"
							>
								{#each shades as shade}
									<div>{shade}</div>
								{/each}
							</div>
							{#each colors as color}
								<p class="font-medium text-gray-950 capitalize sm:pr-12 dark:text-white">{color}</p>
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
													<div {...tooltip.content}>
														<div {...tooltip.arrow}></div>
														<p>{tooltipText || colorData[color]?.[shade]}</p>
													</div>
												{/snippet}
											</Tooltip>
										</div>
									{/each}
								</div>
							{/each}
							<div
								class="pt-2 text-center text-gray-500 italic max-sm:hidden sm:col-span-2 md:col-span-1 md:col-start-2 dark:text-gray-400"
							>
								Click to copy the OKLCH value.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
