<script lang="ts">
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import QuestionLineIcon from 'remixicon-svelte/icons/question-line';
	import CheckboxBlankCircleIcon from 'remixicon-svelte/icons/checkbox-blank-circle-line';
	import CheckboxCircleIcon from 'remixicon-svelte/icons/checkbox-circle-line';

	let isMobile = $state(false);

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Alert Dialog',
			href: 'https://www.shadcn-svelte.com/docs/components/alert-dialog',
			description:
				'A modal dialog that interrupts the user with important content and expects a response.'
		},
		{
			title: 'Hover Card',
			href: 'https://www.shadcn-svelte.com/docs/components/hover-card',
			description: 'For sighted users to preview content available behind a link.'
		},
		{
			title: 'Progress',
			href: 'https://www.shadcn-svelte.com/docs/components/progress',
			description:
				'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
		},
		{
			title: 'Scroll-area',
			href: 'https://www.shadcn-svelte.com/docs/components/scroll-area',
			description: 'Visually or semantically separates content.'
		},
		{
			title: 'Tabs',
			href: 'https://www.shadcn-svelte.com/docs/components/tabs',
			description:
				'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
		},
		{
			title: 'Tooltip',
			href: 'https://www.shadcn-svelte.com/docs/components/tooltip',
			description:
				'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
						className
					)}
					{...restProps}
				>
					<div class="">{title}</div>
					<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}

<NavigationMenu.Root viewport={isMobile}>
	<NavigationMenu.List class="flex-wrap">
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Home</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid gap-2 p-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
					<li class="row-span-3">
						<NavigationMenu.Link
							class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden select-none focus:shadow-md md:p-6"
						>
							{#snippet child({ props })}
								<a {...props} href="/">
									<div class="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
									<p class="text-muted-foreground text-sm leading-tight">
										Beautifully designed components built with Tailwind CSS.
									</p>
								</a>
							{/snippet}
						</NavigationMenu.Link>
					</li>
					{@render ListItem({
						href: 'https://www.shadcn-svelte.com/docs',
						title: 'Introduction',
						content: 'Re-usable components built using Bits UI and Tailwind CSS.'
					})}
					{@render ListItem({
						href: 'https://www.shadcn-svelte.com/docs/installation',
						title: 'Installation',
						content: 'How to install dependencies and structure your app.'
					})}
					{@render ListItem({
						href: 'https://www.shadcn-svelte.com/docs/components/typography',
						title: 'Typography',
						content: 'Styles for headings, paragraphs, lists...etc'
					})}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item>
			<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[300px] gap-2 p-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
					{#each components as component, i (i)}
						{@render ListItem({
							href: component.href,
							title: component.title,
							content: component.description
						})}
					{/each}
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>

		<NavigationMenu.Item>
			<NavigationMenu.Link>
				{#snippet child()}
					<a href="https://www.shadcn-svelte.com/docs" class={navigationMenuTriggerStyle()}>Docs</a>
				{/snippet}
			</NavigationMenu.Link>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>List</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[300px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/docs/components">
							<div class="font-medium">Components</div>
							<div class="text-muted-foreground">Browse all components in the library.</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/docs">
							<div class="font-medium">Documentation</div>
							<div class="text-muted-foreground">Learn how to use the library.</div>
						</NavigationMenu.Link>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/blocks">
							<div class="font-medium">Blog</div>
							<div class="text-muted-foreground">Read our latest blog posts.</div>
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>Simple</NavigationMenu.Trigger>
			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/docs/components"
							>Components</NavigationMenu.Link
						>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/docs"
							>Documentation</NavigationMenu.Link
						>
						<NavigationMenu.Link href="https://www.shadcn-svelte.com/blocks"
							>Blocks</NavigationMenu.Link
						>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
		<NavigationMenu.Item class="hidden md:block">
			<NavigationMenu.Trigger>With Icon</NavigationMenu.Trigger>

			<NavigationMenu.Content>
				<ul class="grid w-[200px] gap-4 p-2">
					<li>
						<NavigationMenu.Link
							href="https://www.shadcn-svelte.com/docs"
							class="flex-row items-center gap-2"
						>
							<QuestionLineIcon />
							Backlog
						</NavigationMenu.Link>

						<NavigationMenu.Link
							href="https://www.shadcn-svelte.com/docs"
							class="flex-row items-center gap-2"
						>
							<CheckboxBlankCircleIcon />
							To Do
						</NavigationMenu.Link>

						<NavigationMenu.Link
							href="https://www.shadcn-svelte.com/docs"
							class="flex-row items-center gap-2"
						>
							<CheckboxCircleIcon />
							Done
						</NavigationMenu.Link>
					</li>
				</ul>
			</NavigationMenu.Content>
		</NavigationMenu.Item>
	</NavigationMenu.List>
</NavigationMenu.Root>

<div class="flex items-center space-x-2">
	<Switch id="mobile-mode" bind:checked={isMobile} />
	<Label for="mobile-mode">Mobile Mode</Label>
</div>
