<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';

	import { browser } from '$app/environment';

	// Track window scroll to apply background / shadow styles
	let scrollY = $state(0);
	let isScrolled = $derived(scrollY > 50);

	// Detect & toggle dark-mode preference
	let isDarkMode = $state(browser ? document.documentElement.classList.contains('dark') : false);

	$effect(() => {
		if (browser) {
			isDarkMode = document.documentElement.classList.contains('dark');
		}
	});

	function updateDarkMode() {
		if (!browser) return;
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('darkMode', String(isDarkMode));
	}

	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		updateDarkMode();
	}

	function scrollToSection(event: MouseEvent) {
		event.preventDefault();
		const target = event.currentTarget as HTMLAnchorElement;
		const selector = target.getAttribute('href') ?? '';
		const el = document.querySelector(selector);
		if (el) el.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY />

<nav
	class="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 {isScrolled
		? 'bg-blue-50/95 shadow-lg backdrop-blur-md dark:bg-blue-900/95'
		: 'bg-transparent'}"
>
	<!-- Brand / Site nav -->
	<div class="flex items-center space-x-6 md:space-x-8">
		<a
			href="/"
			class="text-lg font-semibold {isScrolled
				? 'text-blue-900 dark:text-blue-50'
				: 'text-blue-50'} hover:text-blue-400">Alex Lende</a
		>
		<a
			href="#expertise"
			onclick={scrollToSection}
			class="text-sm transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}">Expertise</a
		>
		<a
			href="#portfolio"
			onclick={scrollToSection}
			class="text-sm transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}">Portfolio</a
		>
		<a
			href="#contact"
			onclick={scrollToSection}
			class="text-sm transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}">Contact</a
		>
		<a
			href="https://ajlende.blog"
			target="_blank"
			rel="noopener noreferrer"
			class="text-sm transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}">Blog</a
		>
	</div>

	<!-- Utility / Social links -->
	<div class="flex items-center space-x-6">
		<button
			onclick={toggleDarkMode}
			aria-label="Toggle dark mode"
			class="transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}"
		>
			{#if isDarkMode}
				<Sun class="h-6 w-6" />
			{:else}
				<Moon class="h-6 w-6" />
			{/if}
		</button>
		<a
			href="https://github.com/ajlende"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Alex Lende on GitHub"
			class="transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}"
		>
			<Github class="h-6 w-6" />
		</a>
		<a
			href="https://linkedin.com/in/ajlende"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Alex Lende on LinkedIn"
			class="transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}"
		>
			<Linkedin class="h-6 w-6" />
		</a>
		<a
			href="https://wellfound.com/u/ajlende"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Alex Lende on Wellfound"
			class="transition-colors {isScrolled
				? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
				: 'text-blue-50 hover:text-blue-400'}"
		>
			<Briefcase class="h-6 w-6" />
		</a>
	</div>
</nav>
