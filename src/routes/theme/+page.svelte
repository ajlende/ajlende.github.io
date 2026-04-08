<script lang="ts">
	import { browser } from '$app/environment';
	import * as Badge from '$lib/components/ui/badge';
	import * as Button from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import * as Switch from '$lib/components/ui/switch';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { Component } from 'svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let isDarkMode = $state(browser ? document.documentElement.classList.contains('dark') : false);

	type RootComponentModule = {
		Root?: Component<Record<string, unknown>>;
	};

	type ExampleComponentModule = {
		default: Component;
	};

	const rootComponentModules = import.meta.glob('../../lib/components/ui/*/index.ts', {
		eager: true
	}) as Record<string, RootComponentModule>;
	const exampleComponentModules = import.meta.glob('../../lib/components/ui/*/example.svelte', {
		eager: true
	}) as Record<string, ExampleComponentModule>;

	function getRootComponent(componentPath: string) {
		return rootComponentModules[`../../lib/components/ui/${componentPath}/index.ts`]?.Root;
	}

	function getExampleComponent(componentPath: string) {
		return exampleComponentModules[`../../lib/components/ui/${componentPath}/example.svelte`]
			?.default;
	}

	function getVariantProps(groupName: string, option: string) {
		return { [groupName]: option };
	}

	function formatLabel(value: string) {
		return value
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	function getPreviewLabel(componentName: string, groupName: string, option: string) {
		if (groupName === 'size' && option.startsWith('icon')) {
			return '+';
		}

		return groupName === 'size' ? formatLabel(option) : componentName;
	}

	function updateDarkMode(enabled: boolean) {
		isDarkMode = enabled;

		if (!browser) return;

		document.documentElement.classList.toggle('dark', enabled);
		localStorage.setItem('darkMode', String(enabled));
	}
</script>

{#snippet previewChildren(
	componentPath: string,
	componentName: string,
	groupName: string,
	option: string
)}
	{#if componentPath === 'alert'}
		<span class="font-medium">{componentName}</span>
		<span class="text-muted-foreground block text-sm">{formatLabel(option)} state</span>
	{:else if componentPath === 'button-group'}
		<Button.Button variant="outline" size="sm">One</Button.Button>
		<Button.Button variant="outline" size="sm">Two</Button.Button>
	{:else if componentPath === 'field'}
		<span class="font-medium">{componentName}</span>
		<span class="text-muted-foreground text-sm">{formatLabel(option)} option</span>
	{:else if componentPath === 'item'}
		<span>{componentName}</span>
		<span class="text-muted-foreground">{formatLabel(option)}</span>
	{:else}
		{getPreviewLabel(componentName, groupName, option)}
	{/if}
{/snippet}

<svelte:head>
	<title>Theme and UI Demo</title>
	<meta
		name="description"
		content="A live demo of the site's theme tokens and reusable UI components."
	/>
</svelte:head>

<div
	class="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-10 md:px-10 lg:gap-10 lg:px-12"
>
	<header class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
		<div class="max-w-3xl space-y-3">
			<h1 class="font-display text-4xl font-semibold tracking-tight md:text-5xl">
				Theme tokens and UI components
			</h1>
			<p class="text-muted-foreground text-base md:text-lg">
				This page is generated from the design tokens in <code>{data.themeSourcePath}</code> and
				demonstrates the shared UI primitives available under
				<code>src/lib/components/ui</code>.
			</p>
		</div>
		<div class="flex items-center gap-3 rounded-lg border px-4 py-3">
			<div class="space-y-0.5">
				<p id="dark-mode-label" class="font-medium">Dark mode</p>
				<p class="text-muted-foreground text-sm">{isDarkMode ? 'On' : 'Off'}</p>
			</div>
			<Switch.Switch
				checked={isDarkMode}
				onCheckedChange={updateDarkMode}
				aria-labelledby="dark-mode-label"
			/>
		</div>
	</header>

	<Tabs.Root value="theme" class="gap-6">
		<Tabs.TabsList class="bg-muted/60 grid w-full max-w-md grid-cols-2">
			<Tabs.TabsTrigger value="theme">Theme</Tabs.TabsTrigger>
			<Tabs.TabsTrigger value="components">Components</Tabs.TabsTrigger>
		</Tabs.TabsList>

		<Tabs.TabsContent value="theme" class="space-y-6">
			<Card.Card>
				<Card.CardHeader>
					<Card.CardTitle>Color scales</Card.CardTitle>
					<Card.CardDescription>
						Every swatch below uses the CSS variable directly, so the preview always reflects the
						current theme values.
					</Card.CardDescription>
				</Card.CardHeader>
				<Card.CardContent class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
					{#each data.theme.colorFamilies as family (family.family)}
						<section class="bg-background rounded-xl border p-4">
							<div class="mb-3 flex items-center justify-between gap-2">
								<h2 class="font-display text-lg font-medium capitalize">{family.family}</h2>
								<Badge.Badge variant="outline">{family.colors.length} tokens</Badge.Badge>
							</div>
							<div class="space-y-2">
								{#each family.colors as color (color.name)}
									<div class="grid grid-cols-[auto_1fr] items-center gap-3">
										<div
											class="ring-border h-10 w-10 rounded-lg ring-1"
											style={`background: var(${color.name});`}
										></div>
										<div class="min-w-0">
											<p class="font-medium">{color.name}</p>
											<p class="text-muted-foreground truncate font-mono text-xs">{color.value}</p>
										</div>
									</div>
								{/each}
							</div>
						</section>
					{/each}
				</Card.CardContent>
			</Card.Card>

			<div class="grid gap-6 xl:grid-cols-[1.2fr_1fr]">
				<Card.Card>
					<Card.CardHeader>
						<Card.CardTitle>Semantic aliases and radii</Card.CardTitle>
						<Card.CardDescription>
							These tokens come from the <code>@theme inline</code> block and map component styles onto
							the site palette.
						</Card.CardDescription>
					</Card.CardHeader>
					<Card.CardContent class="space-y-6">
						<div class="space-y-3">
							<h2 class="font-display text-lg font-medium">Semantic colors</h2>
							<div class="grid gap-3 sm:grid-cols-2">
								{#each data.theme.semanticColors as color (color.name)}
									<div class="rounded-xl border p-3">
										<div class="mb-3 flex items-center gap-3">
											<div
												class="ring-border h-9 w-9 rounded-lg ring-1"
												style={`background: var(${color.name});`}
											></div>
											<p class="min-w-0 truncate font-medium">{color.name}</p>
										</div>
										<p class="text-muted-foreground font-mono text-xs">{color.value}</p>
									</div>
								{/each}
							</div>
						</div>

						<Separator />

						<div class="space-y-3">
							<h2 class="font-display text-lg font-medium">Radius scale</h2>
							<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
								{#each data.theme.radii as radius (radius.name)}
									<div class="rounded-xl border p-3">
										<div
											class="bg-muted mb-3 h-16 border"
											style={`border-radius: var(${radius.name});`}
										></div>
										<p class="font-medium">{radius.name}</p>
										<p class="text-muted-foreground font-mono text-xs">{radius.value}</p>
									</div>
								{/each}
							</div>
						</div>
					</Card.CardContent>
				</Card.Card>

				<div class="grid gap-6">
					<Card.Card>
						<Card.CardHeader>
							<Card.CardTitle>Font stacks</Card.CardTitle>
							<Card.CardDescription>
								The font variables are defined in the main <code>@theme</code> block.
							</Card.CardDescription>
						</Card.CardHeader>
						<Card.CardContent class="space-y-4">
							{#each data.theme.fonts as font (font.name)}
								<div class="rounded-xl border p-4">
									<p class="mb-2 font-medium">{font.name}</p>
									<p class="text-muted-foreground mb-3 font-mono text-xs">{font.value}</p>
									<p class="text-lg" style={`font-family: var(${font.name});`}>
										Sphinx of black quartz, judge my vow.
									</p>
								</div>
							{/each}
						</Card.CardContent>
					</Card.Card>

					<Card.Card>
						<Card.CardHeader>
							<Card.CardTitle>Core neutrals</Card.CardTitle>
							<Card.CardDescription>
								Non-scaled color tokens that are useful for contrast checks.
							</Card.CardDescription>
						</Card.CardHeader>
						<Card.CardContent class="grid gap-3 sm:grid-cols-2">
							{#each data.theme.specialColors as color (color.name)}
								<div class="rounded-xl border p-4">
									<div
										class="ring-border mb-3 h-16 rounded-lg ring-1"
										style={`background: var(${color.name});`}
									></div>
									<p class="font-medium">{color.name}</p>
									<p class="text-muted-foreground font-mono text-xs">{color.value}</p>
								</div>
							{/each}
						</Card.CardContent>
					</Card.Card>
				</div>
			</div>
		</Tabs.TabsContent>

		<Tabs.TabsContent value="components" class="space-y-6">
			<Card.Card>
				<Card.CardHeader>
					<div class="space-y-1.5">
						<Card.CardTitle>Component gallery</Card.CardTitle>
						<Card.CardDescription>
							This gallery is generated from the components under <code>src/lib/components/ui</code
							>.
						</Card.CardDescription>
					</div>
				</Card.CardHeader>
				<Card.CardContent class="grid gap-5 lg:grid-cols-2">
					{#each data.components as component (component.path)}
						{@const PreviewComponent = getRootComponent(component.path)}
						{@const ExampleComponent = getExampleComponent(component.path)}
						<section class="bg-background rounded-xl border p-4">
							<div class="mb-4 space-y-1">
								<h2 class="font-display text-lg font-medium">{component.name}</h2>
								<p class="text-muted-foreground font-mono text-xs">{component.sourcePath}</p>
							</div>

							{#if ExampleComponent}
								<div class="space-y-2">
									<ExampleComponent />
								</div>
							{:else if PreviewComponent && component.variantGroups.length > 0}
								<div class="space-y-5">
									{#each component.variantGroups as group (group.name)}
										<div class="space-y-3">
											<h3 class="font-medium">{group.name}</h3>
											<div class="flex flex-wrap items-center gap-3">
												{#each group.options as option (option)}
													<div class="space-y-2">
														<PreviewComponent {...getVariantProps(group.name, option)}>
															{@render previewChildren(
																component.path,
																component.name,
																group.name,
																option
															)}
														</PreviewComponent>
														<p class="text-muted-foreground text-center font-mono text-xs">
															{option}
														</p>
													</div>
												{/each}
											</div>
										</div>
										{#if group !== component.variantGroups.at(-1)}
											<Separator />
										{/if}
									{/each}
								</div>
							{:else}
								<p class="text-muted-foreground text-sm">
									No example component is available for this folder.
								</p>
							{/if}
						</section>
					{/each}
				</Card.CardContent>
			</Card.Card>
		</Tabs.TabsContent>
	</Tabs.Root>
</div>
