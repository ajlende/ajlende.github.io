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

	import { browser } from '$app/environment';
	import Logo from '$lib/components/Logo.svelte';
	import { randomCircularPointDistribution } from '$lib/utils/random';

	let clientWidth = $state(0);
	let clientHeight = $state(0);
	let scrollY = $state(0);
	let mouseX = $state(0);
	let mouseY = $state(0);

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

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
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

<svelte:window bind:scrollY on:mousemove={handleMouseMove} />

<!-- Sticky Navigation -->
<nav
	class="fixed top-0 right-0 left-0 z-50 mx-auto flex h-16 items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 {isScrolled
		? 'bg-blue-50/95 shadow-lg backdrop-blur-md dark:bg-blue-900/95'
		: 'bg-transparent'}"
>
	<!-- Primary site links -->
	<ul class="flex items-center space-x-6 md:space-x-8">
		<li>
			<a
				href="/"
				class="text-lg font-semibold text-blue-50 transition-all duration-300 hover:scale-105 hover:text-yellow-400 {isScrolled
					? 'text-blue-900 dark:text-blue-50'
					: ''}"
			>
				Alex Lende
			</a>
		</li>
		<li>
			<a
				href="#services"
				onclick={scrollToSection}
				class="text-sm transition-all duration-300 hover:scale-105 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				Expertise
			</a>
		</li>
		<li>
			<a
				href="#portfolio"
				onclick={scrollToSection}
				class="text-sm transition-all duration-300 hover:scale-105 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				Portfolio
			</a>
		</li>
		<li>
			<a
				href="#contact"
				onclick={scrollToSection}
				class="text-sm transition-all duration-300 hover:scale-105 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				Contact
			</a>
		</li>
		<li>
			<a
				href="https://ajlende.blog"
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm transition-all duration-300 hover:scale-105 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				Blog
			</a>
		</li>
	</ul>

	<!-- Utility controls and social links -->
	<ul class="flex items-center space-x-6">
		<li>
			<button
				onclick={toggleDarkMode}
				class="transition-all duration-300 hover:scale-110 hover:rotate-180 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				{#if isDarkMode}
					<Sun class="h-6 w-6" />
				{:else}
					<Moon class="h-6 w-6" />
				{/if}
				<span class="sr-only">Toggle dark mode</span>
			</button>
		</li>
		<li>
			<a
				href="https://github.com/ajlende"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-all duration-300 hover:scale-110 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				<Github class="h-6 w-6" />
				<span class="sr-only">GitHub</span>
			</a>
		</li>
		<li>
			<a
				href="https://linkedin.com/in/ajlende"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-all duration-300 hover:scale-110 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				<Linkedin class="h-6 w-6" />
				<span class="sr-only">LinkedIn</span>
			</a>
		</li>
		<li>
			<a
				href="https://wellfound.com/u/ajlende"
				target="_blank"
				rel="noopener noreferrer"
				class="transition-all duration-300 hover:scale-110 hover:text-yellow-400 {isScrolled
					? 'text-blue-700 hover:text-yellow-600 dark:text-blue-200 dark:hover:text-yellow-400'
					: 'text-blue-50 hover:text-yellow-400'}"
			>
				<Briefcase class="h-6 w-6" />
				<span class="sr-only">Wellfound</span>
			</a>
		</li>
	</ul>
</nav>

<header class="bg-blue-50 dark:bg-blue-800">
	<div
		class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800 dark:from-blue-950 dark:via-blue-950 dark:via-60% dark:to-blue-900"
		style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%)"
	>
		<div
			bind:clientWidth
			bind:clientHeight
			class="pointer-events-none absolute h-full w-full overflow-hidden"
			aria-hidden="true"
		>
			<svg
				class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_480s_linear_infinite] fill-white"
				style="transform: rotate({scrollY * 0.05}deg)"
				{viewBox}
				width={diameter}
				height={diameter}
			>
				{#each largeStars as star}<circle cx={star.x} cy={star.y} r={1.5} opacity="0.8" />{/each}
			</svg>
			<svg
				class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_240s_linear_infinite] fill-white"
				style="transform: rotate({scrollY * 0.1}deg)"
				{viewBox}
				width={diameter}
				height={diameter}
			>
				{#each mediumStars as star}<circle cx={star.x} cy={star.y} r={1} opacity="0.6" />{/each}
			</svg>
			<svg
				class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_120s_linear_infinite] fill-white"
				style="transform: rotate({scrollY * 0.15}deg)"
				{viewBox}
				width={diameter}
				height={diameter}
			>
				{#each smallStars as star}<circle cx={star.x} cy={star.y} r={0.5} opacity="0.4" />{/each}
			</svg>
		</div>
		<div class="flex flex-col items-center justify-center gap-4 text-center">
			<Logo class="fill-blue-50" width="10em" height="10em" />
			<h1 class="font-display text-9xl font-bold text-blue-50 drop-shadow-lg">Alex Lende</h1>
			<div class="font-display text-4xl text-blue-50 drop-shadow">Principal Software Engineer</div>
		</div>
	</div>
</header>

<main
	class="relative bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 dark:from-blue-800 dark:via-blue-900 dark:to-blue-950"
>
	<!-- About Section with dramatic separator -->
	<section class="relative overflow-hidden py-24">
		<div class="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2
				class="font-display mb-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-100 dark:to-blue-300"
			>
				Building Modern Web Experiences
			</h2>
			<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-blue-700 dark:text-blue-200">
				I'm a principal software engineer with over 10 years of experience building sophisticated
				web applications, interactive 3D experiences, and scalable technical solutions. I've
				contributed to open source projects reaching millions of users and led development teams at
				major tech companies.
			</p>
			<div class="mb-12">
				<a
					href="#portfolio"
					onclick={scrollToSection}
					class="inline-flex items-center rounded-full bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-110 hover:from-red-600 hover:to-red-700 hover:shadow-2xl hover:shadow-red-500/25 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800"
				>
					View My Work
					<ArrowRight class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
				</a>
			</div>
			<div class="mt-16 grid gap-8 md:grid-cols-3">
				<div
					class="group rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-100 to-blue-200 p-[2px] shadow-lg transition-all duration-500 hover:scale-105 hover:border-yellow-400 hover:shadow-2xl hover:shadow-yellow-500/20 dark:from-blue-800 dark:to-blue-900"
				>
					<div class="h-full rounded-2xl bg-white/90 p-8 backdrop-blur-sm dark:bg-blue-900/90">
						<Zap
							class="mx-auto mb-4 h-12 w-12 text-yellow-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse dark:text-yellow-400"
						/>
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Open Source Contributor
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Contributing to major open source projects like WordPress Gutenberg, with features
							used by millions of developers worldwide.
						</p>
					</div>
				</div>
				<div
					class="group rounded-2xl border-2 border-transparent bg-gradient-to-br from-yellow-100 to-yellow-200 p-[2px] shadow-lg transition-all duration-500 hover:scale-105 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/20 dark:from-yellow-800 dark:to-yellow-900"
				>
					<div class="h-full rounded-2xl bg-white/90 p-8 backdrop-blur-sm dark:bg-blue-900/90">
						<Globe
							class="mx-auto mb-4 h-12 w-12 text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse dark:text-blue-400"
						/>
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Full-Stack Development
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Expert in modern web technologies from React and TypeScript frontends to Node.js
							backends and cloud infrastructure.
						</p>
					</div>
				</div>
				<div
					class="group rounded-2xl border-2 border-transparent bg-gradient-to-br from-red-100 to-red-200 p-[2px] shadow-lg transition-all duration-500 hover:scale-105 hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/20 dark:from-red-800 dark:to-red-900"
				>
					<div class="h-full rounded-2xl bg-white/90 p-8 backdrop-blur-sm dark:bg-blue-900/90">
						<Eye
							class="mx-auto mb-4 h-12 w-12 text-red-500 transition-all duration-300 group-hover:scale-110 group-hover:animate-pulse dark:text-red-400"
						/>
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">3D & WebGL</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Specialized in creating immersive 3D experiences and data visualizations using
							Three.js, WebGL, and custom shaders.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Services Section with alien landscape separator -->
	<section id="services" class="relative py-24">
		<!-- Cinematic separator - alien terrain -->
		<div class="absolute top-0 right-0 left-0 h-32 overflow-hidden">
			<div
				class="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 dark:to-blue-950"
			></div>
			<svg class="absolute bottom-0 h-24 w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
				<path
					d="M0,40 C200,20 400,60 600,30 C800,0 1000,50 1200,20 L1200,100 L0,100 Z"
					class="fill-red-500 opacity-20"
				/>
				<path
					d="M0,60 C300,40 500,80 700,50 C900,20 1100,70 1200,40 L1200,100 L0,100 Z"
					class="fill-yellow-500 opacity-20"
				/>
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-20 text-center">
				<div class="mb-6 flex items-center justify-center">
					<h2
						class="font-display bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-100 dark:to-blue-300"
					>
						Technical Expertise
					</h2>
				</div>
				<p class="mx-auto max-w-2xl text-xl text-blue-700 dark:text-blue-200">
					Core technologies and specializations I work with
				</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-2">
				<!-- Full-Stack Development -->
				<div class="group relative">
					<div
						class="absolute inset-0 rotate-1 transform rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 dark:from-blue-600 dark:via-blue-700 dark:to-blue-800"
					></div>
					<div
						class="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
					>
						<div class="mb-6 flex items-center">
							<Code
								class="mr-4 h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:rotate-12 dark:text-blue-400"
							/>
							<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Modern Web Development
							</h3>
						</div>
						<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
							Extensive experience with modern JavaScript frameworks and full-stack development. I
							build responsive, accessible web applications with clean architectures that scale from
							prototype to production.
						</p>
						<ul class="flex list-none flex-wrap gap-2">
							<li
								class="rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-1 text-sm text-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-blue-700 dark:to-blue-800 dark:text-blue-200"
							>
								React
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-1 text-sm text-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-blue-700 dark:to-blue-800 dark:text-blue-200"
							>
								TypeScript
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-1 text-sm text-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-blue-700 dark:to-blue-800 dark:text-blue-200"
							>
								Node.js
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-blue-100 to-blue-200 px-3 py-1 text-sm text-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-blue-700 dark:to-blue-800 dark:text-blue-200"
							>
								PostgreSQL
							</li>
						</ul>
					</div>
				</div>

				<!-- 3D & WebGL -->
				<div class="group relative">
					<div
						class="absolute inset-0 -rotate-1 transform rounded-3xl bg-gradient-to-br from-yellow-400 via-red-400 to-red-500 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 dark:from-yellow-600 dark:via-red-600 dark:to-red-700"
					></div>
					<div
						class="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
					>
						<div class="mb-6 flex items-center">
							<Cpu
								class="mr-4 h-10 w-10 text-red-600 transition-transform duration-300 group-hover:rotate-12 dark:text-red-400"
							/>
							<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
								3D Graphics & Visualization
							</h3>
						</div>
						<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
							Specialized in creating interactive 3D experiences and data visualizations for the
							web. From enterprise dashboards to immersive AR/VR prototypes, I bring complex data
							and ideas to life through compelling visual experiences.
						</p>
						<ul class="flex list-none flex-wrap gap-2">
							<li
								class="rounded-full bg-gradient-to-r from-red-100 to-red-200 px-3 py-1 text-sm text-red-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-red-700 dark:to-red-800 dark:text-red-200"
							>
								Three.js
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-red-100 to-red-200 px-3 py-1 text-sm text-red-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-red-700 dark:to-red-800 dark:text-red-200"
							>
								WebGL
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-red-100 to-red-200 px-3 py-1 text-sm text-red-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-red-700 dark:to-red-800 dark:text-red-200"
							>
								GLSL
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-red-100 to-red-200 px-3 py-1 text-sm text-red-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-red-700 dark:to-red-800 dark:text-red-200"
							>
								AR/VR
							</li>
						</ul>
					</div>
				</div>

				<!-- Technical Leadership -->
				<div class="group relative lg:col-span-2 lg:mx-auto lg:max-w-2xl">
					<div
						class="absolute inset-0 rotate-1 transform rounded-3xl bg-gradient-to-br from-red-400 via-yellow-400 to-yellow-500 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 dark:from-red-600 dark:via-yellow-600 dark:to-yellow-700"
					></div>
					<div
						class="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
					>
						<div class="mb-6 flex items-center">
							<Users
								class="mr-4 h-10 w-10 text-yellow-600 transition-transform duration-300 group-hover:rotate-12 dark:text-yellow-400"
							/>
							<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Open Source & Community
							</h3>
						</div>
						<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
							Active contributor to major open source projects, particularly WordPress Gutenberg. I
							believe in building tools that empower developers and sharing knowledge through code,
							documentation, and community engagement.
						</p>
						<ul class="flex list-none flex-wrap gap-2">
							<li
								class="rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-1 text-sm text-yellow-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-yellow-700 dark:to-yellow-800 dark:text-yellow-200"
							>
								WordPress
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-1 text-sm text-yellow-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-yellow-700 dark:to-yellow-800 dark:text-yellow-200"
							>
								Open Source
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-1 text-sm text-yellow-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-yellow-700 dark:to-yellow-800 dark:text-yellow-200"
							>
								Mentoring
							</li>
							<li
								class="rounded-full bg-gradient-to-r from-yellow-100 to-yellow-200 px-3 py-1 text-sm text-yellow-800 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:from-yellow-700 dark:to-yellow-800 dark:text-yellow-200"
							>
								Code Review
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Portfolio Section with vibrant cards -->
	<section id="portfolio" class="relative py-24">
		<!-- Cinematic separator -->
		<div
			class="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
		></div>

		<div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
			<div class="mb-20 text-center">
				<div class="mb-6 flex items-center justify-center">
					<h2
						class="font-display bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-5xl font-bold text-transparent dark:from-red-400 dark:to-yellow-400"
					>
						Portfolio Highlights
					</h2>
				</div>
				<p class="mx-auto max-w-2xl text-xl text-blue-700 dark:text-blue-200">
					Key projects that showcase technical excellence and innovation
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2">
				<!-- Gutenberg Editor -->
				<a
					href="/portfolio/gutenberg/"
					class="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
				>
					<div
						class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 via-red-600 to-yellow-600 transition-all duration-300 group-hover:from-red-600 group-hover:to-yellow-700 dark:from-red-600 dark:via-red-700 dark:to-yellow-700"
						style="view-transition-name: gutenberg-card"
					>
						<div class="text-center text-white">
							<Palette
								class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-100"
								style="view-transition-name: gutenberg-icon"
							/>
							<div class="text-lg font-semibold" style="view-transition-name: gutenberg-subtitle">
								WordPress Gutenberg
							</div>
						</div>
					</div>
					<div class="flex flex-1 flex-col bg-white p-6 dark:bg-blue-900">
						<h3
							class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100"
							style="view-transition-name: gutenberg-title"
						>
							WordPress Block Editor
						</h3>
						<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
							Led development of innovative media editing features for WordPress Gutenberg at
							Automattic, including advanced image tools and SVG filters affecting millions of users
							worldwide.
						</p>
						<div
							class="flex items-center text-red-600 transition-colors group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300"
						>
							<span class="text-sm font-medium">Open Source Impact</span>
							<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
						</div>
					</div>
				</a>

				<!-- Healthcare Data Visualization -->
				<a
					href="/portfolio/cerner-media-wall/"
					class="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30"
				>
					<div
						class="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-yellow-500 transition-all duration-300 group-hover:from-blue-600 group-hover:to-yellow-600 dark:from-blue-600 dark:via-blue-700 dark:to-yellow-600"
						style="view-transition-name: media-wall-card"
					>
						<div class="text-center text-white">
							<Database
								class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-100"
								style="view-transition-name: media-wall-icon"
							/>
							<div class="text-lg font-semibold" style="view-transition-name: media-wall-subtitle">
								Artistic Data Visualization
							</div>
						</div>
					</div>
					<div class="flex flex-1 flex-col bg-white p-6 dark:bg-blue-900">
						<h3
							class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100"
							style="view-transition-name: media-wall-title"
						>
							Cerner Innovations Media Wall
						</h3>
						<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
							Created abstract data visualizations at Cerner's Innovations campus, connecting 28
							unique data stories across 11 live data sources to inspire and inform.
						</p>
						<div
							class="flex items-center text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300"
						>
							<span class="text-sm font-medium">Enterprise Scale</span>
							<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
						</div>
					</div>
				</a>

				<!-- AR/VR Healthcare -->
				<a
					href="/portfolio/ar-vr-healthcare/"
					class="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/30"
				>
					<div
						class="flex h-48 items-center justify-center bg-gradient-to-br from-yellow-500 via-red-500 to-red-600 transition-all duration-300 group-hover:from-yellow-600 group-hover:to-red-700 dark:from-yellow-600 dark:via-red-600 dark:to-red-700"
						style="view-transition-name: ar-vr-card"
					>
						<div class="text-center text-white">
							<Eye
								class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-100"
								style="view-transition-name: ar-vr-icon"
							/>
							<div class="text-lg font-semibold" style="view-transition-name: ar-vr-subtitle">
								AR/VR Innovation
							</div>
						</div>
					</div>
					<div class="flex flex-1 flex-col bg-white p-6 dark:bg-blue-900">
						<h3
							class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100"
							style="view-transition-name: ar-vr-title"
						>
							Immersive Healthcare
						</h3>
						<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
							Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health
							Conference, exploring cutting-edge applications of immersive technology in clinical
							settings.
						</p>
						<div
							class="flex items-center text-yellow-600 transition-colors group-hover:text-yellow-700 dark:text-yellow-400 dark:group-hover:text-yellow-300"
						>
							<span class="text-sm font-medium">Industry First</span>
							<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
						</div>
					</div>
				</a>

				<!-- 3D Dental Customization -->
				<a
					href="/portfolio/dental-configurator/"
					class="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
				>
					<div
						class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 transition-all duration-300 group-hover:from-red-600 group-hover:to-blue-600 dark:from-red-600 dark:via-yellow-600 dark:to-blue-600"
						style="view-transition-name: dental-card"
					>
						<div class="text-center text-white">
							<Cpu
								class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:opacity-100"
								style="view-transition-name: dental-icon"
							/>
							<div class="text-lg font-semibold" style="view-transition-name: dental-subtitle">
								3D Customization
							</div>
						</div>
					</div>
					<div class="flex flex-1 flex-col bg-white p-6 dark:bg-blue-900">
						<h3
							class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100"
							style="view-transition-name: dental-title"
						>
							Dental Brace Configurator
						</h3>
						<p class="mb-4 flex-1 text-blue-700 dark:text-blue-200">
							Developed an interactive 3D mobile app, enabling real-time customization of dental
							braces with instant visual feedback for the perfect smile.
						</p>
						<div
							class="flex items-center text-red-600 transition-colors group-hover:text-red-700 dark:text-red-400 dark:group-hover:text-red-300"
						>
							<span class="text-sm font-medium">3D Innovation</span>
							<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- Who I Work With -->
	<section class="relative py-24">
		<!-- Cinematic separator -->
		<div
			class="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
		></div>

		<div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
			<h2
				class="font-display mb-8 bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-5xl font-bold text-transparent dark:from-blue-100 dark:to-blue-300"
			>
				Professional Experience
			</h2>
			<p class="mx-auto mb-16 max-w-2xl text-xl text-blue-700 dark:text-blue-200">
				Building impactful solutions across different scales and industries
			</p>

			<div class="grid gap-12 md:grid-cols-2">
				<div class="group relative">
					<div
						class="absolute inset-0 rotate-2 transform rounded-2xl bg-gradient-to-br from-blue-500 to-yellow-500 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 dark:from-blue-600 dark:to-yellow-600"
					></div>
					<div
						class="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
					>
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

				<div class="group relative">
					<div
						class="absolute inset-0 -rotate-2 transform rounded-2xl bg-gradient-to-br from-red-500 to-blue-500 transition-all duration-500 group-hover:scale-105 group-hover:-rotate-3 dark:from-red-600 dark:to-blue-600"
					></div>
					<div
						class="relative rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
					>
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

	<!-- Contact Section with vibrant form -->
	<section id="contact" class="relative py-24">
		<!-- Cinematic separator - alien horizon -->
		<div class="absolute top-0 right-0 left-0 h-32 overflow-hidden">
			<svg class="absolute top-0 h-32 w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
				<path d="M0,80 Q300,20 600,60 T1200,40 L1200,0 L0,0 Z" class="fill-yellow-500 opacity-10" />
				<path d="M0,60 Q400,10 800,50 T1200,20 L1200,0 L0,0 Z" class="fill-red-500 opacity-10" />
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
			<div class="mb-12 text-center">
				<h2
					class="font-display mb-6 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-5xl font-bold text-transparent dark:from-red-400 dark:to-yellow-400"
				>
					Let's Connect
				</h2>
				<p class="text-xl text-blue-700 dark:text-blue-200">
					Interested in collaborating, discussing technology, or exploring opportunities? I'd love
					to hear from you.
				</p>
			</div>

			<div class="group relative">
				<div
					class="absolute inset-0 rotate-1 transform rounded-2xl bg-gradient-to-br from-red-400 via-yellow-400 to-blue-400 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 dark:from-red-600 dark:via-yellow-600 dark:to-blue-600"
				></div>
				<div
					class="relative rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 group-hover:shadow-2xl dark:bg-blue-900"
				>
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
									autocomplete="name"
									required
									class="w-full rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-blue-900 transition-all duration-300 hover:border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:hover:border-blue-600"
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
									autocomplete="email"
									class="w-full rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-blue-900 transition-all duration-300 hover:border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:hover:border-blue-600"
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
								autocomplete="organization"
								class="w-full rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-blue-900 transition-all duration-300 hover:border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:hover:border-blue-600"
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
								class="w-full rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-blue-900 transition-all duration-300 hover:border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:hover:border-blue-600"
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
								class="w-full resize-none rounded-lg border-2 border-blue-200 bg-white px-4 py-3 text-blue-900 transition-all duration-300 hover:border-blue-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:hover:border-blue-600"
								placeholder="Tell me more about what you'd like to discuss..."
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full transform rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-600 hover:to-red-700 hover:shadow-2xl hover:shadow-red-500/25 dark:from-red-600 dark:to-red-700 dark:hover:from-red-700 dark:hover:to-red-800"
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
									class="transition-colors hover:text-yellow-600 dark:hover:text-yellow-400"
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
					class="text-blue-300 transition-all duration-300 hover:scale-110 hover:text-yellow-400 dark:text-blue-200 dark:hover:text-yellow-400"
				>
					<Github class="h-6 w-6" />
					<span class="sr-only">GitHub</span>
				</a>
				<a
					href="https://linkedin.com/in/ajlende"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-300 transition-all duration-300 hover:scale-110 hover:text-yellow-400 dark:text-blue-200 dark:hover:text-yellow-400"
				>
					<Linkedin class="h-6 w-6" />
					<span class="sr-only">LinkedIn</span>
				</a>
				<a
					href="https://wellfound.com/u/ajlende"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-300 transition-all duration-300 hover:scale-110 hover:text-yellow-400 dark:text-blue-200 dark:hover:text-yellow-400"
				>
					<Briefcase class="h-6 w-6" />
					<span class="sr-only">Wellfound</span>
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
					class="transition-colors hover:text-yellow-400 dark:hover:text-yellow-400">Source code</a
				>
				is available under the
				<a
					href="http://opensource.org/licenses/mit-license.php"
					class="transition-colors hover:text-yellow-400 dark:hover:text-yellow-400">MIT license</a
				>.
			</p>
		</div>
	</div>
</footer>
