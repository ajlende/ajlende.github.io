<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve -- portfolio sources are external URLs */
	import * as Dialog from '$lib/components/ui/dialog';
	import type { PortfolioItem } from '$lib/portfolio';

	let {
		item,
		open = $bindable(false),
		onClose
	}: { item: PortfolioItem | undefined; open?: boolean; onClose: () => void } = $props();

	let scrollContainer = $state<HTMLDivElement>();
	let titleElement = $state<HTMLElement | null>(null);

	function focusDialogTitle(event: Event) {
		event.preventDefault();
		scrollContainer?.scrollTo({ top: 0 });
		titleElement?.focus({ preventScroll: true });
	}
</script>

<Dialog.Root bind:open onOpenChange={(nextOpen) => !nextOpen && onClose()}>
	{#if item}
		{#key item.slug}
			<Dialog.Content
				class="top-0 left-0 flex h-dvh max-h-dvh max-w-none translate-x-0 translate-y-0 flex-col gap-0 overflow-hidden rounded-none p-0 sm:top-1/2 sm:left-1/2 sm:h-auto sm:max-h-[calc(100dvh-3rem)] sm:max-w-3xl sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl [&_[data-slot=dialog-close]]:top-3 [&_[data-slot=dialog-close]]:right-3 [&_[data-slot=dialog-close]]:z-20 [&_[data-slot=dialog-close]]:size-11 [&_[data-slot=dialog-close]]:rounded-full [&_[data-slot=dialog-close]]:bg-sky-950/85 [&_[data-slot=dialog-close]]:text-white [&_[data-slot=dialog-close]]:shadow-lg [&_[data-slot=dialog-close]]:backdrop-blur-sm [&_[data-slot=dialog-close]]:hover:bg-sky-950"
				onOpenAutoFocus={focusDialogTitle}
			>
				<div bind:this={scrollContainer} class="min-h-0 overflow-y-auto overscroll-contain">
					{#if item.image}
						<div class="aspect-[16/9] w-full overflow-hidden bg-sky-100 dark:bg-sky-900">
							<img class="h-full w-full object-cover" src={item.image} alt={item.imageAlt ?? ''} />
						</div>
					{/if}
					<div class="p-6 pb-10 sm:p-10">
						<Dialog.Header class="pr-10 text-left">
							<p
								class="text-xs font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300"
							>
								{item.category}
							</p>
							<Dialog.Title
								bind:ref={titleElement}
								class="font-display text-3xl leading-tight text-sky-950 sm:text-4xl dark:text-sky-50"
								tabindex={-1}
							>
								{item.title}
							</Dialog.Title>
							<Dialog.Description class="sr-only">
								Project details and source links for {item.title}.
							</Dialog.Description>
						</Dialog.Header>

						<div class="mt-8 space-y-5 text-base leading-7 text-sky-800 dark:text-sky-100">
							{#each item.brief as paragraph (paragraph)}
								<p>{paragraph}</p>
							{/each}

							<p class="border-t border-sky-200 pt-5 text-sm leading-6 dark:border-sky-800">
								{#each item.links as link, index (link.href)}
									{#if index > 0}<span aria-hidden="true"> · </span>{/if}
									<a
										class="underline underline-offset-4 hover:text-sky-950 dark:hover:text-white"
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
									>
										{link.label}<span class="sr-only"> (opens in a new tab)</span>
									</a>
								{/each}
							</p>
						</div>
					</div>
				</div>
			</Dialog.Content>
		{/key}
	{/if}
</Dialog.Root>
