<script lang="ts">
	import Github from 'remixicon-svelte/icons/github-fill';
	import Linkedin from 'remixicon-svelte/icons/linkedin-fill';
	import WordPress from 'remixicon-svelte/icons/wordpress-fill';
	import Moon from 'remixicon-svelte/icons/moon-fill';
	import Sun from 'remixicon-svelte/icons/sun-fill';
	import Sparkling from 'remixicon-svelte/icons/sparkling-fill';

	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import * as Select from '$lib/components/ui/select';
	import Wellfound from '$lib/icons/wellfound.svelte';

	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 50);

	type Theme = 'light' | 'dark' | 'system';
	function isValidTheme(value: unknown): value is Theme {
		return value === 'light' || value === 'dark' || value === 'system';
	}

	let initialTheme: Theme = 'system';
	if (browser) {
		const stored = localStorage.getItem('theme');
		if (isValidTheme(stored)) initialTheme = stored;
	}
	let theme = $state<Theme>(initialTheme);
	let hasAppliedInitialTheme = false;

	// Media query for system preference (only available in browser)
	let prefersDarkMedia: MediaQueryList | null = null;

	if (browser) {
		prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
	}

	function getSystemPrefersDark() {
		prefersDarkMedia ??= window.matchMedia('(prefers-color-scheme: dark)');
		return prefersDarkMedia.matches;
	}

	function getThemePrefersDark() {
		return theme === 'system' ? getSystemPrefersDark() : theme === 'dark';
	}

	function applyThemeClass(prefersDark: boolean) {
		document.documentElement.classList.toggle('dark', prefersDark);
	}

	function prefersReducedMotion() {
		return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	}

	function applyThemeWithTransition(prefersDark: boolean) {
		const isAlreadyApplied = document.documentElement.classList.contains('dark') === prefersDark;
		const startViewTransition =
			'startViewTransition' in document ? document.startViewTransition.bind(document) : undefined;
		const canTransition = hasAppliedInitialTheme;

		hasAppliedInitialTheme = true;
		if (isAlreadyApplied) return;

		if (!canTransition || !startViewTransition || prefersReducedMotion()) {
			applyThemeClass(prefersDark);
			return;
		}

		const root = document.documentElement;
		root.classList.add('theme-transition');

		const transition = startViewTransition(() => {
			applyThemeClass(prefersDark);
		});

		transition.finished.finally(() => {
			root.classList.remove('theme-transition');
		});
	}

	function handleSystemChangeEvent() {
		if (theme !== 'system') return;
		applyThemeWithTransition(getSystemPrefersDark());
	}

	// Helpers to add/remove listeners with feature detection (no casts to any)
	function addPrefListener(list: MediaQueryList, fn: (e: MediaQueryListEvent) => void) {
		// Modern API
		if ('addEventListener' in list && typeof list.addEventListener === 'function') {
			list.addEventListener('change', fn);
			return;
		}
		// Old API
		const withAddListener = list as MediaQueryList & {
			addListener?: (l: (e: MediaQueryListEvent) => void) => void;
		};
		if (typeof withAddListener.addListener === 'function') {
			withAddListener.addListener(fn);
		}
	}

	function removePrefListener(list: MediaQueryList, fn: (e: MediaQueryListEvent) => void) {
		if ('removeEventListener' in list && typeof list.removeEventListener === 'function') {
			list.removeEventListener('change', fn);
			return;
		}
		const withRemoveListener = list as MediaQueryList & {
			removeListener?: (l: (e: MediaQueryListEvent) => void) => void;
		};
		if (typeof withRemoveListener.removeListener === 'function') {
			withRemoveListener.removeListener(fn);
		}
	}

	// Apply theme whenever it (or system pref) changes.
	// We react to `theme` changes and to setup/remove listeners as needed.
	$effect(() => {
		if (!browser) return;

		// Ensure prefersDarkMedia is available
		if (!prefersDarkMedia) {
			prefersDarkMedia = window.matchMedia('(prefers-color-scheme: dark)');
		}

		// Clean up any previous listener to avoid duplicate notifications
		removePrefListener(prefersDarkMedia, handleSystemChangeEvent);

		applyThemeWithTransition(getThemePrefersDark());

		if (theme === 'system') {
			addPrefListener(prefersDarkMedia, handleSystemChangeEvent);
		}

		// Persist preference
		localStorage.setItem('theme', theme);
	});
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 {isScrolled
		? 'bg-sky-50/95 shadow-lg backdrop-blur-md dark:bg-sky-900/95'
		: 'bg-transparent'}"
>
	<!-- Brand / Site nav -->
	<div class="flex items-center space-x-6 md:space-x-8">
		<a
			href={resolve('/')}
			class="text-lg font-semibold {isScrolled
				? 'text-sky-900 dark:text-sky-50'
				: 'text-sky-50'} hover:text-sky-400">Alex Lende</a
		>
	</div>

	<!-- Utility / Social links -->
	<div class="flex items-center space-x-6">
		<a
			href="https://github.com/ajlende"
			target="_blank"
			aria-label="Alex Lende on GitHub"
			class="transition-colors {isScrolled
				? 'text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-50'
				: 'text-sky-50 hover:text-sky-400'}"
		>
			<Github class="h-6" />
		</a>
		<a
			href="https://profiles.wordpress.org/ajlende"
			target="_blank"
			aria-label="Alex Lende on WordPress.org"
			class="transition-colors {isScrolled
				? 'text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-50'
				: 'text-sky-50 hover:text-sky-400'}"
		>
			<WordPress class="h-6" />
		</a>
		<a
			href="https://linkedin.com/in/ajlende"
			target="_blank"
			aria-label="Alex Lende on LinkedIn"
			class="transition-colors {isScrolled
				? 'text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-50'
				: 'text-sky-50 hover:text-sky-400'}"
		>
			<Linkedin class="h-6" />
		</a>
		<a
			href="https://wellfound.com/u/ajlende"
			target="_blank"
			aria-label="Alex Lende on Wellfound"
			class="transition-colors {isScrolled
				? 'text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-50'
				: 'text-sky-50 hover:text-sky-400'}"
		>
			<Wellfound class="h-6" />
		</a>
		<Select.Root type="single" bind:value={theme}>
			<label for="theme-trigger" class="sr-only">Theme</label>
			<Select.Trigger
				id="theme-trigger"
				class="justify-center border-transparent bg-transparent p-0 shadow-none transition-colors hover:bg-transparent focus:outline-none dark:bg-transparent dark:hover:bg-transparent [&>svg:last-child]:hidden {isScrolled
					? 'text-sky-700 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-50'
					: 'text-sky-50 hover:text-sky-400'}"
			>
				{#if theme === 'dark'}
					<Moon class="h-6" />
				{:else if theme === 'light'}
					<Sun class="h-6" />
				{:else}
					<Sparkling class="h-6" />
				{/if}
			</Select.Trigger>

			<Select.Content preventScroll={false} align="end">
				<Select.Item value="system">System</Select.Item>
				<Select.Item value="light">Light</Select.Item>
				<Select.Item value="dark">Dark</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
</nav>
