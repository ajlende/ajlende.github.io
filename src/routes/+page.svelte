<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Code from '@lucide/svelte/icons/code';
	import Palette from '@lucide/svelte/icons/palette';
	import Users from '@lucide/svelte/icons/users';
	import Zap from '@lucide/svelte/icons/zap';
	import Globe from '@lucide/svelte/icons/globe';
	import Database from '@lucide/svelte/icons/database';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Eye from '@lucide/svelte/icons/eye';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import Moon from '@lucide/svelte/icons/moon';
	import Sun from '@lucide/svelte/icons/sun';
	import Logo from './Logo.svelte';

	import { browser } from '$app/environment';
	import { randomCircularPointDistribution } from '$lib/random';

	let clientWidth = $state(0);
	let clientHeight = $state(0);
	let scrollY = $state(0);

	let isDarkMode = $state(browser ? document.documentElement.classList.contains('dark') : false);
	let isScrolled = $derived(scrollY > 50);

	$effect(() => {
		if (browser) {
			isDarkMode = document.documentElement.classList.contains('dark');
		}
	});

	// Update dark mode class on document
	function updateDarkMode() {
		if (browser) {
			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
			localStorage.setItem('darkMode', isDarkMode.toString());
		}
	}

	// Toggle dark mode
	function toggleDarkMode() {
		isDarkMode = !isDarkMode;
		updateDarkMode();
	}

	function scrollToSection(event: MouseEvent) {
		event.preventDefault();
		const target = event.currentTarget as HTMLAnchorElement;
		const section = document.querySelector(target.getAttribute('href') || '');
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}

	// Match Tailwind v4 breakpoints (except for 640px)
	let width = $derived(Math.ceil(clientWidth / 256) * 256);
	let height = $derived(Math.ceil(clientHeight / 256) * 256);

	let radius = $derived(Math.ceil(Math.sqrt((width / 2) * (width / 2) + height * height)));
	let diameter = $derived(radius * 2);

	let viewBox = $derived(`${-radius} ${-radius} ${diameter} ${diameter}`);
	let smallStars = $derived(randomCircularPointDistribution(80, radius));
	let mediumStars = $derived(randomCircularPointDistribution(40, radius));
	let largeStars = $derived(randomCircularPointDistribution(20, radius));
</script>

<svelte:window bind:scrollY />

<div class="flex min-h-screen flex-col bg-white dark:bg-blue-950">
	<!-- Sticky Navigation -->
	<nav
		class="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 {isScrolled
			? 'bg-blue-50/95 shadow-lg backdrop-blur-md dark:bg-blue-900/95'
			: 'bg-transparent'}"
	>
		<div class="flex items-center space-x-6 md:space-x-8">
			<a
				href="/"
				class="text-lg font-semibold text-blue-50 hover:text-blue-400 {isScrolled
					? 'text-blue-900 dark:text-blue-50'
					: ''}">Alex Lende</a
			>
			<a
				href="#services"
				onclick={scrollToSection}
				class="text-sm transition-colors {isScrolled
					? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
					: 'text-blue-50 hover:text-blue-400'}"
			>
				Expertise
			</a>
			<a
				href="#portfolio"
				onclick={scrollToSection}
				class="text-sm transition-colors {isScrolled
					? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
					: 'text-blue-50 hover:text-blue-400'}"
			>
				Portfolio
			</a>
			<a
				href="#contact"
				onclick={scrollToSection}
				class="text-sm transition-colors {isScrolled
					? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
					: 'text-blue-50 hover:text-blue-400'}"
			>
				Contact
			</a>
			<a
				href="https://ajlende.blog"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm transition-colors {isScrolled
					? 'text-blue-700 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-50'
					: 'text-blue-50 hover:text-blue-400'}"
			>
				Blog
			</a>
		</div>
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

	<header class="bg-blue-50 dark:bg-blue-800">
		<div
			class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800 dark:from-blue-950 dark:via-blue-950 dark:via-60% dark:to-blue-900"
			style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%);"
		>
			<div
				bind:clientWidth
				bind:clientHeight
				class="pointer-events-none absolute h-full w-full overflow-hidden"
				aria-hidden="true"
			>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_480s_linear_infinite] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each largeStars as star}<circle cx={star.x} cy={star.y} r={1.5} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_240s_linear_infinite] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each mediumStars as star}<circle cx={star.x} cy={star.y} r={1} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_120s_linear_infinite] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each smallStars as star}<circle cx={star.x} cy={star.y} r={0.5} />{/each}
				</svg>
			</div>
			<div class="flex flex-col items-center justify-center gap-4 text-center">
				<Logo class="fill-blue-50" width="10em" height="10em" />
				<h1 class="font-serif text-9xl font-bold text-blue-50 drop-shadow-lg">Alex Lende</h1>
				<div class="font-serif text-4xl text-blue-50 drop-shadow">Principal Software Engineer</div>
			</div>
		</div>
	</header>

	<main
		class="relative bg-[linear-gradient(var(--gradient-light-blue))] dark:bg-[linear-gradient(var(--gradient-dark-blue))]"
	>
		<!-- About Section -->
		<section class="relative overflow-hidden py-24">
			<div class="absolute inset-0 opacity-20 dark:opacity-10">
				<div
					class="absolute top-20 left-20 h-32 w-32 animate-pulse rounded-full bg-blue-400 dark:bg-blue-600"
				></div>
				<div
					class="absolute right-32 bottom-40 h-24 w-24 animate-pulse rounded-full bg-yellow-400 delay-500 dark:bg-yellow-600"
				></div>
				<div
					class="absolute top-1/2 left-1/3 h-16 w-16 animate-pulse rounded-full bg-red-400 delay-1000 dark:bg-red-600"
				></div>
			</div>
			<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 class="mb-8 font-serif text-5xl font-bold text-blue-900 dark:text-blue-100">
					Building Modern Web Experiences
				</h2>
				<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-blue-700 dark:text-blue-200">
					I'm a principal software engineer with over 10 years of experience building sophisticated
					web applications, interactive 3D experiences, and scalable technical solutions. I've
					contributed to open source projects reaching millions of users and led development teams
					at major tech companies.
				</p>
				<div class="mb-12">
					<a
						href="#portfolio"
						onclick={scrollToSection}
						class="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
					>
						View My Work
						<ArrowRight class="ml-2 h-5 w-5" />
					</a>
				</div>
				<div class="mt-16 grid gap-8 md:grid-cols-3">
					<div
						class="rounded-2xl border border-blue-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-blue-700 dark:bg-blue-900/80"
					>
						<Zap class="mx-auto mb-4 h-12 w-12 text-yellow-500 dark:text-yellow-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Open Source Contributor
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Contributing to major open source projects like WordPress Gutenberg, with features
							used by millions of developers worldwide.
						</p>
					</div>
					<div
						class="rounded-2xl border border-yellow-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-yellow-700 dark:bg-blue-900/80"
					>
						<Globe class="mx-auto mb-4 h-12 w-12 text-blue-500 dark:text-blue-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Full-Stack Development
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Expert in modern web technologies from React and TypeScript frontends to Node.js
							backends and cloud infrastructure.
						</p>
					</div>
					<div
						class="rounded-2xl border border-red-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-red-700 dark:bg-blue-900/80"
					>
						<Eye class="mx-auto mb-4 h-12 w-12 text-red-500 dark:text-red-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">3D & WebGL</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Specialized in creating immersive 3D experiences and data visualizations using
							Three.js, WebGL, and custom shaders.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Services Section -->
		<section id="services" class="py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mb-20 text-center">
					<h2 class="mb-6 font-serif text-5xl font-bold text-blue-900 dark:text-blue-100">
						Technical Expertise
					</h2>
					<p class="mx-auto max-w-2xl text-xl text-blue-700 dark:text-blue-200">
						Core technologies and specializations I work with
					</p>
				</div>

				<div class="grid gap-12 lg:grid-cols-2">
					<!-- Full-Stack Development -->
					<div class="group relative">
						<div
							class="absolute inset-0 rotate-1 transform rounded-3xl bg-gradient-to-r from-blue-400 to-blue-600 transition-transform duration-300 group-hover:rotate-2 dark:from-blue-600 dark:to-blue-800"
						></div>
						<div class="relative rounded-3xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<div class="mb-6 flex items-center">
								<Code class="mr-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
								<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
									Modern Web Development
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Extensive experience with modern JavaScript frameworks and full-stack development. I
								build responsive, accessible web applications with clean architectures that scale
								from prototype to production.
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>React</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>TypeScript</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>Node.js</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>PostgreSQL</span
								>
							</div>
						</div>
					</div>

					<!-- 3D & WebGL -->
					<div class="group relative">
						<div
							class="absolute inset-0 -rotate-1 transform rounded-3xl bg-gradient-to-r from-yellow-400 to-red-400 transition-transform duration-300 group-hover:-rotate-2 dark:from-yellow-600 dark:to-red-600"
						></div>
						<div class="relative rounded-3xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<div class="mb-6 flex items-center">
								<Cpu class="mr-4 h-10 w-10 text-red-600 dark:text-red-400" />
								<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
									3D Graphics & Visualization
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Specialized in creating interactive 3D experiences and data visualizations for the
								web. From enterprise dashboards to immersive AR/VR prototypes, I bring complex data
								and ideas to life through compelling visual experiences.
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-800 dark:text-red-200"
									>Three.js</span
								>
								<span
									class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-800 dark:text-red-200"
									>WebGL</span
								>
								<span
									class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-800 dark:text-red-200"
									>GLSL</span
								>
								<span
									class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800 dark:bg-red-800 dark:text-red-200"
									>AR/VR</span
								>
							</div>
						</div>
					</div>

					<!-- Technical Leadership -->
					<div class="group relative">
						<div
							class="absolute inset-0 rotate-1 transform rounded-3xl bg-gradient-to-r from-red-400 to-yellow-400 transition-transform duration-300 group-hover:rotate-2 dark:from-red-600 dark:to-yellow-600"
						></div>
						<div class="relative rounded-3xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<div class="mb-6 flex items-center">
								<Users class="mr-4 h-10 w-10 text-yellow-600 dark:text-yellow-400" />
								<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
									Open Source & Community
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Active contributor to major open source projects, particularly WordPress Gutenberg.
								I believe in building tools that empower developers and sharing knowledge through
								code, documentation, and community engagement.
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>WordPress</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Open Source</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Mentoring</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Code Review</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="py-24">
			<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
				<div class="mb-20 text-center">
					<h2 class="mb-6 font-serif text-5xl font-bold text-blue-900 dark:text-blue-100">
						Portfolio Highlights
					</h2>
					<p class="mx-auto max-w-2xl text-xl text-blue-700 dark:text-blue-200">
						Key projects that showcase technical excellence and innovation
					</p>
				</div>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- Gutenberg Editor -->
					<div
						class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 to-red-700 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 dark:from-red-600 dark:to-red-800 dark:group-hover:from-red-700 dark:group-hover:to-red-900"
						>
							<div class="text-center text-white">
								<Palette
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">WordPress Gutenberg</div>
							</div>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								WordPress Block Editor
							</h3>
							<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
								Led development of innovative media editing features for WordPress Gutenberg at
								Automattic, including advanced image tools and SVG filters affecting millions of
								users worldwide.
							</p>
							<div
								class="flex items-center text-blue-600 transition-colors group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-300"
							>
								<span class="text-sm font-medium">Open Source Impact</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>

					<!-- Healthcare Data Visualization -->
					<div
						class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 to-red-700 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 dark:from-red-600 dark:to-red-800 dark:group-hover:from-red-700 dark:group-hover:to-red-900"
						>
							<div class="text-center text-white">
								<Database
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">Artistic Data Visualization</div>
							</div>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Cerner Innovations Media Wall
							</h3>
							<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
								Created abstract data visualizations at Cerner's Innovations campus, connecting 28
								unique data stories across 11 live data sources to inspire and inform.
							</p>
							<div
								class="flex items-center text-blue-600 transition-colors group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-300"
							>
								<span class="text-sm font-medium">Enterprise Scale</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>

					<!-- AR/VR Healthcare -->
					<div
						class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 to-red-700 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 dark:from-red-600 dark:to-red-800 dark:group-hover:from-red-700 dark:group-hover:to-red-900"
						>
							<div class="text-center text-white">
								<Eye
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">AR/VR Innovation</div>
							</div>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Immersive Healthcare
							</h3>
							<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
								Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health
								Conference, exploring cutting-edge applications of immersive technology in clinical
								settings.
							</p>
							<div
								class="flex items-center text-blue-600 transition-colors group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-300"
							>
								<span class="text-sm font-medium">Industry First</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>

					<!-- 3D Dental Customization -->
					<div
						class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 to-red-700 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 dark:from-red-600 dark:to-red-800 dark:group-hover:from-red-700 dark:group-hover:to-red-900"
						>
							<div class="text-center text-white">
								<Cpu
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">3D Customization</div>
							</div>
						</div>
						<div class="flex flex-1 flex-col p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Dental Brace Configurator
							</h3>
							<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
								Developed an interactive 3D mobile app, enabling real-time customization of dental
								braces with instant visual feedback for the perfect smile.
							</p>
							<div
								class="flex items-center text-blue-600 transition-colors group-hover:text-blue-800 dark:text-blue-400 dark:group-hover:text-blue-300"
							>
								<span class="text-sm font-medium">3D Innovation</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Who I Work With -->
		<section class="py-24">
			<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<h2 class="mb-8 font-serif text-5xl font-bold text-blue-900 dark:text-blue-100">
					Professional Experience
				</h2>
				<p class="mx-auto mb-16 max-w-2xl text-xl text-blue-700 dark:text-blue-200">
					Building impactful solutions across different scales and industries
				</p>

				<div class="grid gap-12 md:grid-cols-2">
					<div class="relative">
						<div
							class="absolute inset-0 rotate-2 transform rounded-2xl bg-blue-500 dark:bg-blue-600"
						></div>
						<div class="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<h3 class="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Open Source Impact
							</h3>
							<p class="leading-relaxed text-blue-700 dark:text-blue-200">
								Contributing to WordPress Gutenberg at Automattic, where my work on media editing
								features and SVG filters reaches millions of users worldwide. I focus on creating
								tools that empower creators and developers globally.
							</p>
						</div>
					</div>

					<div class="relative">
						<div
							class="absolute inset-0 -rotate-2 transform rounded-2xl bg-red-200 dark:bg-red-600"
						></div>
						<div class="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<h3 class="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Enterprise Innovation
							</h3>
							<p class="leading-relaxed text-blue-700 dark:text-blue-200">
								Led cutting-edge projects at Cerner, including data visualization installations and
								pioneering AR/VR healthcare applications. Experienced in building solutions that
								operate at massive scale with strict reliability requirements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="py-24">
			<div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<h2 class="mb-6 font-serif text-5xl font-bold text-blue-900 dark:text-blue-100">
						Let's Connect
					</h2>
					<p class="text-xl text-blue-700 dark:text-blue-200">
						Interested in collaborating, discussing technology, or exploring opportunities? I'd love
						to hear from you.
					</p>
				</div>

				<div class="relative">
					<div
						class="absolute inset-0 rotate-1 transform rounded-2xl bg-gradient-to-r from-blue-400 to-yellow-400 dark:from-blue-600 dark:to-yellow-600"
					></div>
					<div class="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-blue-900">
						<form
							method="post"
							action="https://forms.un-static.com/forms/9f08c765086e2a71f5c3bb696226ff2546c6382f"
							class="space-y-6"
						>
							<div class="grid gap-6 md:grid-cols-2">
								<div>
									<label
										for="name"
										class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
										>Name</label
									>
									<input
										type="text"
										id="name"
										name="name"
										required
										class="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label
										for="email"
										class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
										>Email</label
									>
									<input
										type="email"
										id="email"
										name="email"
										required
										class="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
										placeholder="your@email.com"
									/>
								</div>
							</div>

							<div>
								<label
									for="company"
									class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
									>Company</label
								>
								<input
									type="text"
									id="company"
									name="company"
									class="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
									placeholder="Your company (optional)"
								/>
							</div>

							<div>
								<label
									for="subject"
									class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
									>Subject</label
								>
								<select
									id="subject"
									name="subject"
									class="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
								>
									<option value="">What would you like to discuss?</option>
									<option value="collaboration">Collaboration Opportunity</option>
									<option value="open-source">Open Source Project</option>
									<option value="technical">Technical Discussion</option>
									<option value="job">Job Opportunity</option>
									<option value="other">General Inquiry</option>
								</select>
							</div>

							<div>
								<label
									for="message"
									class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
									>Message</label
								>
								<textarea
									id="message"
									name="message"
									rows="5"
									required
									class="w-full resize-none rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
									placeholder="Tell me more about what you'd like to discuss..."
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
							>
								Send Message
							</button>
						</form>

						<div class="mt-6 text-center">
							<p class="text-sm text-blue-600 dark:text-blue-400">
								<small
									>Powered by <a
										rel="nofollow"
										href="https://un-static.com"
										class="transition-colors hover:text-blue-800 dark:hover:text-blue-300"
										>Un-static Forms</a
									></small
								>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="bg-blue-950 py-16 text-blue-50 dark:bg-blue-950 dark:text-blue-100">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<div class="mb-8 text-center md:mb-0 md:text-left">
					<div class="mb-4 flex items-center justify-center md:justify-start">
						<Logo class="mr-3 fill-blue-50 dark:fill-blue-100" width="2em" height="2em" />
						<span class="text-xl font-semibold">Alex Lende</span>
					</div>
					<p class="text-blue-300 dark:text-blue-200">
						Principal Software Engineer & Technical Consultant
					</p>
				</div>

				<div class="flex items-center space-x-6">
					<a
						href="https://github.com/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on GitHub"
						class="text-blue-300 transition-colors hover:text-blue-50 dark:text-blue-200 dark:hover:text-blue-100"
					>
						<Github class="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on LinkedIn"
						class="text-blue-300 transition-colors hover:text-blue-50 dark:text-blue-200 dark:hover:text-blue-100"
					>
						<Linkedin class="h-6 w-6" />
					</a>
					<a
						href="https://wellfound.com/u/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on Wellfound"
						class="text-blue-300 transition-colors hover:text-blue-50 dark:text-blue-200 dark:hover:text-blue-100"
					>
						<Briefcase class="h-6 w-6" />
					</a>
				</div>
			</div>

			<div
				class="mt-12 border-t border-blue-800 pt-8 text-center text-sm text-blue-300 dark:border-blue-700 dark:text-blue-200"
			>
				<p class="mb-2">
					Contents of this site are © Copyright 2017-{new Date().getFullYear()} Alex Lende. All rights
					reserved.
				</p>
				<p>
					<a
						href="https://github.com/ajlende/ajlende.github.io/tree/develop"
						class="transition-colors hover:text-blue-50 dark:hover:text-blue-100">Source code</a
					>
					is available under the
					<a
						href="http://opensource.org/licenses/mit-license.php"
						class="transition-colors hover:text-blue-50 dark:hover:text-blue-100">MIT license</a
					>.
				</p>
			</div>
		</div>
	</footer>
</div>
