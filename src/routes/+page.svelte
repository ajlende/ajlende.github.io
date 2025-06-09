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

	let isDarkMode = $state(browser ? document.documentElement.classList.contains('dark') : false);

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

<div class="flex min-h-screen flex-col bg-white dark:bg-blue-950">
	<header class="bg-blue-50 dark:bg-blue-800">
		<div
			class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800 dark:from-black dark:via-blue-950 dark:via-60% dark:to-blue-900"
			style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%);"
		>
			<div
				bind:clientWidth
				bind:clientHeight
				class="pointer-events-none absolute h-full w-full overflow-hidden"
				aria-hidden="true"
			>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_480s_linear_infinite] fill-white dark:fill-blue-100"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each largeStars as star}<circle cx={star.x} cy={star.y} r={1.5} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_240s_linear_infinite] fill-white dark:fill-blue-100"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each mediumStars as star}<circle cx={star.x} cy={star.y} r={1} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-[-50%] animate-[spin_120s_linear_infinite] fill-white dark:fill-blue-100"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each smallStars as star}<circle cx={star.x} cy={star.y} r={0.5} />{/each}
				</svg>
			</div>
			<nav
				class="absolute top-0 right-0 left-0 mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
			>
				<div class="flex items-center space-x-6 md:space-x-8">
					<a
						href="/"
						class="text-lg font-semibold text-blue-50 hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
						>Alex Lende</a
					>
					<a
						href="#services"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						Services
					</a>
					<a
						href="#portfolio"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						Portfolio
					</a>
					<a
						href="#contact"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						Contact
					</a>
				</div>
				<div class="flex items-center space-x-6">
					<button
						onclick={toggleDarkMode}
						aria-label="Toggle dark mode"
						class="text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
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
						class="text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						<Github class="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on LinkedIn"
						class="text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						<Linkedin class="h-6 w-6" />
					</a>
					<a
						href="https://wellfound.com/u/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on Wellfound"
						class="text-blue-50 transition-colors hover:text-blue-400 dark:text-blue-100 dark:hover:text-blue-300"
					>
						<Briefcase class="h-6 w-6" />
					</a>
				</div>
			</nav>
			<div class="flex flex-col items-center justify-center gap-4 text-center">
				<Logo class="fill-blue-50 dark:fill-blue-100" width="10em" height="10em" />
				<h1 class="font-serif text-9xl font-bold text-blue-50 drop-shadow-lg dark:text-blue-100">
					Alex Lende
				</h1>
				<div class="font-serif text-4xl text-blue-50 drop-shadow dark:text-blue-100">
					Technical Consultant
				</div>
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
					Building the Future of Web Applications
				</h2>
				<p class="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-blue-700 dark:text-blue-200">
					I'm a principal software engineer with over 10 years of experience crafting sophisticated
					web applications, interactive 3D experiences, and scalable technical solutions. I help
					startups achieve technical excellence and enterprise teams tackle their most complex
					challenges.
				</p>
				<div class="mb-12">
					<a
						href="#contact"
						onclick={scrollToSection}
						class="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
					>
						Let's Discuss Your Project
						<ArrowRight class="ml-2 h-5 w-5" />
					</a>
				</div>
				<div class="mt-16 grid gap-8 md:grid-cols-3">
					<div
						class="rounded-2xl border border-blue-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-blue-700 dark:bg-blue-900/80"
					>
						<Zap class="mx-auto mb-4 h-12 w-12 text-yellow-500 dark:text-yellow-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Technical Leadership
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Architecting scalable solutions and mentoring development teams across global
							organizations.
						</p>
					</div>
					<div
						class="rounded-2xl border border-yellow-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-yellow-700 dark:bg-blue-900/80"
					>
						<Globe class="mx-auto mb-4 h-12 w-12 text-blue-500 dark:text-blue-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Full-Stack Expertise
						</h3>
						<p class="text-blue-700 dark:text-blue-200">
							From React frontends to Node.js backends, delivering complete web application
							solutions.
						</p>
					</div>
					<div
						class="rounded-2xl border border-red-200 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-red-700 dark:bg-blue-900/80"
					>
						<Eye class="mx-auto mb-4 h-12 w-12 text-red-500 dark:text-red-400" />
						<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">3D & WebGL</h3>
						<p class="text-blue-700 dark:text-blue-200">
							Creating immersive 3D experiences and data visualizations that bring applications to
							life.
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
						Core Services
					</h2>
					<p class="mx-auto max-w-2xl text-xl text-blue-700 dark:text-blue-200">
						Specialized solutions for modern web development challenges
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
									Full-Stack Web Development
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								End-to-end web application development using modern frameworks like React, Svelte,
								and Node.js. From responsive user interfaces to scalable backend architectures, I
								deliver complete solutions that grow with your business.
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
									3D & WebGL Development
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Interactive 3D experiences, data visualizations, and WebGL applications that engage
								users and bring complex data to life. Specializing in Three.js, custom shaders, and
								immersive web experiences.
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
									Technical Leadership
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Strategic technical guidance for growing teams. Code reviews, architecture
								decisions, developer mentoring, and establishing engineering best practices that
								scale.
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Architecture</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Mentoring</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>Code Review</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200"
									>DevOps</span
								>
							</div>
						</div>
					</div>

					<!-- Data Visualization -->
					<div class="group relative">
						<div
							class="absolute inset-0 -rotate-1 transform rounded-3xl bg-gradient-to-r from-yellow-400 to-blue-400 transition-transform duration-300 group-hover:-rotate-2 dark:from-yellow-600 dark:to-blue-600"
						></div>
						<div class="relative rounded-3xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<div class="mb-6 flex items-center">
								<Database class="mr-4 h-10 w-10 text-blue-600 dark:text-blue-400" />
								<h3 class="text-2xl font-semibold text-blue-900 dark:text-blue-100">
									Data Visualization
								</h3>
							</div>
							<p class="mb-6 leading-relaxed text-blue-700 dark:text-blue-200">
								Transform complex datasets into intuitive, interactive visualizations. From
								healthcare analytics to business dashboards, making data accessible and actionable.
							</p>
							<div class="flex flex-wrap gap-2">
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>D3.js</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>Charts</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>Analytics</span
								>
								<span
									class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
									>Dashboards</span
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
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-800 dark:from-blue-600 dark:to-blue-800 dark:group-hover:from-blue-700 dark:group-hover:to-blue-900"
						>
							<div class="text-center text-white">
								<Palette
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">WordPress Gutenberg</div>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								WordPress Block Editor
							</h3>
							<p class="mb-4 text-blue-700 dark:text-blue-200">
								Led development of innovative editing features for WordPress Gutenberg at
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
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-red-500 to-red-700 transition-all duration-300 group-hover:from-red-600 group-hover:to-red-800 dark:from-red-600 dark:to-red-800 dark:group-hover:from-red-700 dark:group-hover:to-red-900"
						>
							<div class="text-center text-white">
								<Database
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">Healthcare Analytics</div>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Clinical Data Platform
							</h3>
							<p class="mb-4 text-blue-700 dark:text-blue-200">
								Built an abstract data visualization platform at Cerner connecting 28 unique data
								stories across 11 live data sources, revolutionizing how healthcare professionals
								access insights.
							</p>
							<div
								class="flex items-center text-red-600 transition-colors group-hover:text-red-800 dark:text-red-400 dark:group-hover:text-red-300"
							>
								<span class="text-sm font-medium">Enterprise Scale</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>

					<!-- AR/VR Healthcare -->
					<div
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-yellow-500 to-yellow-700 transition-all duration-300 group-hover:from-yellow-600 group-hover:to-yellow-800 dark:from-yellow-600 dark:to-yellow-800 dark:group-hover:from-yellow-700 dark:group-hover:to-yellow-900"
						>
							<div class="text-center text-white">
								<Eye
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">AR/VR Innovation</div>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Immersive Healthcare
							</h3>
							<p class="mb-4 text-blue-700 dark:text-blue-200">
								Premiered Cerner's first virtual reality healthcare demo at the 2018 Cerner Health
								Conference, exploring cutting-edge applications of immersive technology in clinical
								settings.
							</p>
							<div
								class="flex items-center text-yellow-600 transition-colors group-hover:text-yellow-800 dark:text-yellow-400 dark:group-hover:text-yellow-300"
							>
								<span class="text-sm font-medium">Industry First</span>
								<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</div>
						</div>
					</div>

					<!-- 3D Dental Customization -->
					<div
						class="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-blue-900"
					>
						<div
							class="flex h-48 items-center justify-center bg-gradient-to-br from-blue-500 to-yellow-500 transition-all duration-300 group-hover:from-blue-600 group-hover:to-yellow-600 dark:from-blue-600 dark:to-yellow-600 dark:group-hover:from-blue-700 dark:group-hover:to-yellow-700"
						>
							<div class="text-center text-white">
								<Cpu
									class="mx-auto mb-4 h-16 w-16 opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
								/>
								<div class="text-lg font-semibold">3D Customization</div>
							</div>
						</div>
						<div class="p-6">
							<h3 class="mb-3 text-xl font-semibold text-blue-900 dark:text-blue-100">
								Dental Brace Configurator
							</h3>
							<p class="mb-4 text-blue-700 dark:text-blue-200">
								Developed an interactive 3D visualization system for DesignerTies, enabling
								real-time customization of dental braces with instant visual feedback and
								manufacturing integration.
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
					Who I Work With
				</h2>
				<p class="mx-auto mb-16 max-w-2xl text-xl text-blue-700 dark:text-blue-200">
					I partner with forward-thinking organizations ready to push technical boundaries
				</p>

				<div class="grid gap-12 md:grid-cols-2">
					<div class="relative">
						<div
							class="absolute inset-0 rotate-2 transform rounded-2xl bg-blue-500 dark:bg-blue-600"
						></div>
						<div class="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<h3 class="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Growing Startups
							</h3>
							<p class="leading-relaxed text-blue-700 dark:text-blue-200">
								Technical leadership for startups scaling their engineering teams. I help establish
								robust architectures, implement best practices, and mentor developers to build
								products that can grow from thousands to millions of users.
							</p>
						</div>
					</div>

					<div class="relative">
						<div
							class="absolute inset-0 -rotate-2 transform rounded-2xl bg-red-200 dark:bg-red-600"
						></div>
						<div class="relative rounded-2xl bg-white p-8 shadow-lg dark:bg-blue-900">
							<h3 class="mb-4 text-2xl font-semibold text-blue-900 dark:text-blue-100">
								Enterprise Teams
							</h3>
							<p class="leading-relaxed text-blue-700 dark:text-blue-200">
								Specialized expertise for large organizations tackling complex technical challenges.
								From modernizing legacy systems to implementing cutting-edge 3D visualizations, I
								bring deep technical knowledge to mission-critical projects.
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
						Let's Build Something Amazing
					</h2>
					<p class="text-xl text-blue-700 dark:text-blue-200">
						Ready to bring your technical vision to life? Let's discuss your project.
					</p>
				</div>

				<div class="relative">
					<div
						class="absolute inset-0 rotate-1 transform rounded-2xl bg-gradient-to-r from-blue-400 to-yellow-400 dark:from-blue-600 dark:to-yellow-600"
					></div>
					<div class="relative rounded-2xl bg-white p-8 shadow-xl dark:bg-blue-900">
						<form class="space-y-6">
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
									for="project"
									class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
									>Project Type</label
								>
								<select
									id="project"
									name="project"
									class="w-full rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
								>
									<option value="">Select a project type</option>
									<option value="full-stack">Full-Stack Web Development</option>
									<option value="3d-webgl">3D/WebGL Development</option>
									<option value="leadership">Technical Leadership</option>
									<option value="data-viz">Data Visualization</option>
									<option value="other">Other/Multiple</option>
								</select>
							</div>

							<div>
								<label
									for="message"
									class="mb-2 block text-sm font-medium text-blue-900 dark:text-blue-100"
									>Project Details</label
								>
								<textarea
									id="message"
									name="message"
									rows="5"
									required
									class="w-full resize-none rounded-lg border border-blue-200 bg-white px-4 py-3 text-blue-900 transition-colors focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:border-blue-700 dark:bg-blue-800 dark:text-blue-100 dark:focus:ring-blue-400"
									placeholder="Tell me about your project, timeline, and technical requirements..."
								></textarea>
							</div>

							<button
								type="submit"
								class="w-full transform rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700"
							>
								Send Message
							</button>
						</form>
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
