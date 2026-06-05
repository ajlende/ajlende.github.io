<script lang="ts">
	import ArrowLeft from 'remixicon-svelte/icons/arrow-left-line';
	import FilePdf from 'remixicon-svelte/icons/file-pdf-2-fill';
	import Home from 'remixicon-svelte/icons/home-4-line';
	import SendPlane from 'remixicon-svelte/icons/send-plane-line';

	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import Footer from './Footer.svelte';
	import Hero from './Hero.svelte';
	import Logo from './Logo.svelte';
	import Navbar from './Navbar.svelte';

	const status = $derived(page.status);
	const isNotFound = $derived(status === 404);
	const message = $derived(
		page.error?.message || 'The page you were looking for is not available.'
	);
	const currentPath = $derived(page.url.pathname);

	const primaryLinks = [
		{
			path: '/',
			label: 'Go home',
			description: 'Start again from the main page.',
			icon: Home
		},
		{
			path: '/resume',
			label: 'View resume',
			description: 'Jump straight to experience and background.',
			icon: FilePdf
		},
		{
			path: '/#contact',
			label: 'Start a conversation',
			description: 'Reach out if you were looking for something specific.',
			icon: SendPlane
		}
	] as const;
</script>

<svelte:head>
	<title>{status} | Alex Lende</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<Navbar />

<Hero>
	<section aria-labelledby="error-heading" class="max-w-4xl px-4 text-center sm:px-6">
		<Logo class="mx-auto fill-sky-50" width="8em" height="8em" />
		<p class="mt-8 text-sm font-medium tracking-[0.16em] text-sky-200 uppercase">
			{status}
			{isNotFound ? 'Not found' : 'Page error'}
		</p>
		<h1
			id="error-heading"
			class="font-display mt-4 text-5xl font-medium drop-shadow-lg sm:text-7xl"
		>
			{isNotFound ? 'That page has moved on.' : 'Something went sideways.'}
		</h1>
		<p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-sky-100 drop-shadow sm:text-xl">
			{isNotFound
				? "The address may have changed, or the page may not exist anymore. Here's the quickest way back."
				: message}
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<Button href={resolve('/')} size="xl" class="bg-sky-50 text-sky-950 hover:bg-sky-100">
				<Home aria-hidden="true" />
				Home
			</Button>
			<Button
				href={resolve('/#contact')}
				size="xl"
				variant="outline"
				class="border-sky-50 bg-transparent text-sky-50 hover:bg-sky-50/10 hover:text-sky-50"
			>
				<SendPlane aria-hidden="true" />
				Contact
			</Button>
		</div>
	</section>
</Hero>

<main class="text-sky-950 dark:text-sky-50">
	<section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="next-heading">
		<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
			<div>
				<p class="text-sm font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
					Find your way back
				</p>
				<h2 id="next-heading" class="font-display mt-4 text-4xl font-medium">
					The useful doors are still open.
				</h2>
				<p class="mt-5 max-w-prose text-lg leading-8 text-sky-800 dark:text-sky-100">
					You tried to visit <span class="font-medium break-all">{currentPath}</span>. If this link
					came from somewhere on the site, the source may need a tune-up.
				</p>
			</div>

			<div class="grid gap-4">
				{#each primaryLinks as link (link.path)}
					{@const Icon = link.icon}
					<a
						href={resolve(link.path)}
						class="group grid gap-2 rounded-lg border border-sky-200 bg-white p-5 shadow-sm transition hover:border-sky-400 hover:shadow-md dark:border-sky-800 dark:bg-sky-950 dark:hover:border-sky-500"
					>
						<div class="flex items-center gap-3">
							<Icon class="h-5 text-sky-700 dark:text-sky-300" />
							<h3
								class="font-display text-xl font-medium group-hover:text-sky-700 dark:group-hover:text-sky-200"
							>
								{link.label}
							</h3>
						</div>
						<p class="text-sky-800 dark:text-sky-100">{link.description}</p>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<div class="mx-auto max-w-4xl border-t border-sky-200 dark:border-sky-800"></div>

	<section class="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8" aria-labelledby="help-heading">
		<div class="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
			<h2 id="help-heading" class="font-display text-3xl font-medium">
				Looking for a project, source link, or old page?
			</h2>
			<div class="space-y-5 text-lg leading-8 text-sky-800 dark:text-sky-100">
				<p>
					The home page has the broadest overview of what I work on, and the resume page has the
					most direct career summary.
				</p>
				<p>
					If you expected a specific page to exist, send me the address and I can point you to the
					right place.
				</p>
				<Button href={resolve('/')} variant="outline" class="mt-2">
					<ArrowLeft aria-hidden="true" />
					Back to the main page
				</Button>
			</div>
		</div>
	</section>
</main>

<Footer />
