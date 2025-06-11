<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import Code from '@lucide/svelte/icons/code';
	import Palette from '@lucide/svelte/icons/palette';
	import Users from '@lucide/svelte/icons/users';
	import Zap from '@lucide/svelte/icons/zap';
	import Globe from '@lucide/svelte/icons/globe';
	import Database from '@lucide/svelte/icons/database';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Eye from '@lucide/svelte/icons/eye';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	let scrollY = $state(0);
	let innerHeight = $state(0);

	// Update CSS custom property for parallax effects
	$effect(() => {
		document.documentElement.style.setProperty('--scroll', scrollY.toString());
	});

	function scrollToSection(event: MouseEvent) {
		event.preventDefault();
		const target = event.currentTarget as HTMLAnchorElement;
		const section = document.querySelector(target.getAttribute('href') || '');
		if (section) section.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY bind:innerHeight />

<!-- Atmospheric Background Layers -->
<div class="atmospheric-layers">
	<div class="atmosphere-layer-1"></div>
	<div class="atmosphere-layer-2"></div>
	<div class="atmosphere-layer-3"></div>
</div>

<Navbar />

<Hero />

<main class="alien-landscape">
	<!-- Initial Terrain Transition -->
	<div class="organic-divider"></div>

	<section id="about" class="vibrant-section relative py-32">
		<!-- More Flora Elements -->
		<div class="flora-container absolute top-10 left-8 h-16 w-16">
			<svg class="flora-spore" viewBox="0 0 80 80" fill="none">
				<circle cx="40" cy="40" r="15" fill="oklch(77.9% 0.1644 76deg)" opacity="0.6" />
				<circle cx="40" cy="40" r="8" fill="oklch(90.9% 0.1329 92deg)" opacity="0.8" />
				<circle cx="40" cy="40" r="3" fill="oklch(98.9% 0.0217 116deg)" />
			</svg>
		</div>

		<div class="flora-container absolute right-12 bottom-16 h-32 w-20">
			<svg class="flora-crystal" viewBox="0 0 80 120" fill="none">
				<path
					d="M40 20 L60 50 L50 90 L30 90 L20 50 Z"
					fill="oklch(84.7% 0.164 82deg)"
					opacity="0.7"
				/>
				<path d="M40 20 L55 45 L40 75 L25 45 Z" fill="oklch(96.6% 0.0612 104deg)" opacity="0.9" />
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-6">
			<div class="mb-16 text-center">
				<h2
					class="font-display mb-8 text-5xl leading-tight font-bold text-blue-50 text-blue-950 md:text-6xl dark:text-blue-50"
				>
					Building Modern Web
					<span
						class="bg-gradient-to-r from-red-400 via-yellow-400 to-red-500 bg-clip-text text-transparent"
					>
						Experiences
					</span>
				</h2>
				<p
					class="mx-auto max-w-4xl text-xl leading-relaxed text-blue-200 text-blue-800 opacity-90 md:text-2xl dark:text-blue-200"
				>
					I'm a principal software engineer with over 10 years of experience building sophisticated
					web applications, interactive 3D experiences, and scalable technical solutions. I've
					contributed to open source projects reaching millions of users and led development teams
					at major tech companies.
				</p>
			</div>

			<div class="mb-20 flex justify-center">
				<a
					href="#portfolio"
					onclick={scrollToSection}
					class="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-red-400 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/25"
				>
					<span class="text-lg">View My Work</span>
					<ArrowRight class="h-5 w-5 transition-transform group-hover:translate-x-1" />
				</a>
			</div>

			<div class="grid gap-8 md:grid-cols-3">
				<div
					class="exploration-card group rounded-3xl border border-blue-700/30 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-8 backdrop-blur-sm"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-500 transition-transform duration-300 group-hover:scale-110"
					>
						<Zap class="h-8 w-8 text-blue-950" />
					</div>
					<h3 class="font-display mb-4 text-2xl font-bold text-blue-50">Open Source Contributor</h3>
					<p class="leading-relaxed text-blue-200 opacity-90">
						Contributing to major open source projects like WordPress Gutenberg, with features used
						by millions of developers worldwide.
					</p>
				</div>

				<div
					class="exploration-card group rounded-3xl border border-blue-700/30 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-8 backdrop-blur-sm"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-red-500 transition-transform duration-300 group-hover:scale-110"
					>
						<Globe class="h-8 w-8 text-white" />
					</div>
					<h3 class="font-display mb-4 text-2xl font-bold text-blue-50">Full-Stack Development</h3>
					<p class="leading-relaxed text-blue-200 opacity-90">
						Expert in modern web technologies from React and TypeScript frontends to Node.js
						backends and cloud infrastructure.
					</p>
				</div>

				<div
					class="exploration-card group rounded-3xl border border-blue-700/30 bg-gradient-to-br from-blue-800/40 to-blue-900/60 p-8 backdrop-blur-sm"
				>
					<div
						class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-red-400 transition-transform duration-300 group-hover:scale-110"
					>
						<Eye class="h-8 w-8 text-blue-950" />
					</div>
					<h3 class="font-display mb-4 text-2xl font-bold text-blue-50">3D & WebGL</h3>
					<p class="leading-relaxed text-blue-200 opacity-90">
						Specialized in creating immersive 3D experiences and data visualizations using Three.js,
						WebGL, and custom shaders.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Organic Terrain Divider -->
	<div class="organic-divider"></div>

	<section id="expertise" class="vibrant-section relative overflow-hidden py-32">
		<!-- Large Flora Background Elements -->
		<div class="flora-container absolute -top-10 -left-20 h-96 w-80 opacity-20">
			<svg class="flora-frond" viewBox="0 0 320 380" fill="none">
				<ellipse
					cx="160"
					cy="190"
					rx="100"
					ry="180"
					fill="oklch(70.1% 0.1662 37deg)"
					opacity="0.4"
				/>
				<ellipse
					cx="160"
					cy="180"
					rx="60"
					ry="140"
					fill="oklch(77.1% 0.1598 51deg)"
					opacity="0.6"
				/>
				<ellipse cx="160" cy="170" rx="30" ry="100" fill="oklch(84.7% 0.164 82deg)" opacity="0.8" />
			</svg>
		</div>

		<div class="flora-container absolute -right-24 -bottom-16 h-80 w-72 opacity-15">
			<svg class="flora-crystal" viewBox="0 0 280 320" fill="none">
				<polygon
					points="140,40 200,120 180,240 100,240 80,120"
					fill="oklch(84.7% 0.164 82deg)"
					opacity="0.6"
				/>
				<polygon
					points="140,40 185,110 140,200 95,110"
					fill="oklch(90.9% 0.1329 92deg)"
					opacity="0.8"
				/>
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-6">
			<div class="mb-20 text-center">
				<h2 class="font-display mb-6 text-5xl font-bold text-blue-50 md:text-6xl">
					Technical
					<span
						class="bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-500 bg-clip-text text-transparent"
					>
						Expertise
					</span>
				</h2>
				<p class="text-xl text-blue-200 opacity-90 md:text-2xl">
					Core technologies and specializations I work with
				</p>
			</div>

			<div class="grid gap-12 lg:grid-cols-3">
				<div
					class="exploration-card group rounded-3xl border border-blue-600/30 bg-gradient-to-br from-slate-800/20 to-blue-900/40 p-10 backdrop-blur-md transition-all duration-300 hover:border-red-400/50"
				>
					<div
						class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-400 to-blue-600 transition-transform duration-300 group-hover:scale-110"
					>
						<Code class="h-10 w-10 text-white" />
					</div>
					<h3 class="font-display mb-6 text-3xl font-bold text-blue-50">Modern Web Development</h3>
					<p class="mb-8 leading-relaxed text-blue-200 opacity-90">
						Extensive experience with modern JavaScript frameworks and full-stack development. I
						build responsive, accessible web applications with clean architectures that scale from
						prototype to production.
					</p>
					<ul class="space-y-3">
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">React</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">TypeScript</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">Node.js</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">PostgreSQL</span>
						</li>
					</ul>
				</div>

				<div
					class="exploration-card group rounded-3xl border border-blue-600/30 bg-gradient-to-br from-slate-800/20 to-blue-900/40 p-10 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/50"
				>
					<div
						class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-400 to-yellow-500 transition-transform duration-300 group-hover:scale-110"
					>
						<Cpu class="h-10 w-10 text-white" />
					</div>
					<h3 class="font-display mb-6 text-3xl font-bold text-blue-50">
						3D Graphics & Visualization
					</h3>
					<p class="mb-8 leading-relaxed text-blue-200 opacity-90">
						Specialized in creating interactive 3D experiences and data visualizations for the web.
						From enterprise dashboards to immersive AR/VR prototypes, I bring complex data and ideas
						to life through compelling visual experiences.
					</p>
					<ul class="space-y-3">
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-red-400"></div>
							<span class="font-medium">Three.js</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-red-400"></div>
							<span class="font-medium">WebGL</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-red-400"></div>
							<span class="font-medium">GLSL</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-red-400"></div>
							<span class="font-medium">AR/VR</span>
						</li>
					</ul>
				</div>

				<div
					class="exploration-card group rounded-3xl border border-blue-600/30 bg-gradient-to-br from-slate-800/20 to-blue-900/40 p-10 backdrop-blur-md transition-all duration-300 hover:border-yellow-400/50"
				>
					<div
						class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-red-500 transition-transform duration-300 group-hover:scale-110"
					>
						<Users class="h-10 w-10 text-blue-950" />
					</div>
					<h3 class="font-display mb-6 text-3xl font-bold text-blue-50">Open Source & Community</h3>
					<p class="mb-8 leading-relaxed text-blue-200 opacity-90">
						Active contributor to major open source projects, particularly WordPress Gutenberg. I
						believe in building tools that empower developers and sharing knowledge through code,
						documentation, and community engagement.
					</p>
					<ul class="space-y-3">
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">WordPress</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">Open Source</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">Mentoring</span>
						</li>
						<li class="flex items-center gap-3 text-blue-100">
							<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
							<span class="font-medium">Code Review</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="portfolio" class="vibrant-section relative py-32">
		<!-- Spectacular Flora Garden -->
		<div class="flora-container pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
			<svg class="flora-spore absolute top-20 left-1/4 h-32 w-32" viewBox="0 0 120 120" fill="none">
				<circle cx="60" cy="60" r="40" fill="oklch(84.7% 0.164 82deg)" opacity="0.7" />
				<circle cx="50" cy="50" r="20" fill="oklch(90.9% 0.1329 92deg)" opacity="0.9" />
				<circle cx="70" cy="70" r="15" fill="oklch(96.6% 0.0612 104deg)" />
			</svg>

			<svg
				class="flora-crystal absolute top-32 right-1/3 h-40 w-24"
				viewBox="0 0 96 160"
				fill="none"
			>
				<polygon
					points="48,20 70,60 60,120 36,120 26,60"
					fill="oklch(77.1% 0.1598 51deg)"
					opacity="0.8"
				/>
				<polygon points="48,20 65,55 48,100 31,55" fill="oklch(90.9% 0.1329 92deg)" opacity="0.9" />
			</svg>

			<svg
				class="flora-frond absolute bottom-40 left-1/6 h-56 w-40"
				viewBox="0 0 160 220"
				fill="none"
			>
				<ellipse cx="80" cy="110" rx="50" ry="100" fill="oklch(70.1% 0.1662 37deg)" opacity="0.6" />
				<ellipse cx="80" cy="100" rx="30" ry="80" fill="oklch(84.7% 0.164 82deg)" opacity="0.8" />
				<circle cx="80" cy="60" r="12" fill="oklch(96.6% 0.0612 104deg)" />
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-7xl px-6">
			<div class="mb-20 text-center">
				<h2 class="font-display mb-6 text-5xl leading-tight font-bold text-blue-50 md:text-7xl">
					Portfolio
					<span
						class="animate-pulse bg-gradient-to-r from-red-400 via-red-500 via-yellow-400 to-yellow-400 bg-clip-text text-transparent"
					>
						Highlights
					</span>
				</h2>
				<p class="mx-auto max-w-3xl text-xl text-blue-200 opacity-90 md:text-2xl">
					Key projects that showcase technical excellence and innovation
				</p>
			</div>

			<div class="grid gap-8 md:grid-cols-2 lg:gap-12">
				<a
					href="/portfolio/gutenberg/"
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/30 to-slate-800/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-500/20"
				>
					<!-- Flora accent for this card -->
					<div class="flora-container absolute -top-4 -right-4 h-16 w-16 opacity-60">
						<svg class="flora-spore" viewBox="0 0 64 64" fill="none">
							<circle cx="32" cy="32" r="12" fill="oklch(84.7% 0.164 82deg)" opacity="0.8" />
							<circle cx="32" cy="32" r="6" fill="oklch(96.6% 0.0612 104deg)" />
						</svg>
					</div>

					<div class="mb-6 flex items-start gap-6">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-red-600 transition-transform duration-300 group-hover:scale-110"
						>
							<Palette class="h-8 w-8 text-white" />
						</div>
						<div
							class="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-400"
						>
							WordPress Gutenberg
						</div>
					</div>

					<div class="space-y-4">
						<h3
							class="font-display text-2xl font-bold text-blue-50 transition-colors group-hover:text-white md:text-3xl"
						>
							WordPress Block Editor
						</h3>
						<p class="leading-relaxed text-blue-200 opacity-90">
							Led development of innovative media editing features for WordPress Gutenberg at
							Automattic, including advanced image tools and SVG filters affecting millions of users
							worldwide.
						</p>
						<div class="flex items-center justify-between pt-4">
							<span class="font-semibold text-red-400">Open Source Impact</span>
							<ArrowRight
								class="h-5 w-5 text-red-400 transition-transform group-hover:translate-x-2"
							/>
						</div>
					</div>
				</a>

				<a
					href="/portfolio/cerner-media-wall/"
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/30 to-slate-800/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-500/20"
				>
					<!-- Flora accent for this card -->
					<div class="flora-container absolute -bottom-4 -left-4 h-24 w-20 opacity-50">
						<svg class="flora-crystal" viewBox="0 0 80 96" fill="none">
							<polygon
								points="40,16 56,36 48,72 32,72 24,36"
								fill="oklch(90.9% 0.1329 92deg)"
								opacity="0.8"
							/>
						</svg>
					</div>

					<div class="mb-6 flex items-start gap-6">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-red-500 transition-transform duration-300 group-hover:scale-110"
						>
							<Database class="h-8 w-8 text-blue-950" />
						</div>
						<div
							class="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm font-medium text-blue-300"
						>
							Artistic Data Visualization
						</div>
					</div>

					<div class="space-y-4">
						<h3
							class="font-display text-2xl font-bold text-blue-50 transition-colors group-hover:text-white md:text-3xl"
						>
							Cerner Innovations Media Wall
						</h3>
						<p class="leading-relaxed text-blue-200 opacity-90">
							Created abstract data visualizations at Cerner's Innovations campus, connecting 28
							unique data stories across 11 live data sources to inspire and inform.
						</p>
						<div class="flex items-center justify-between pt-4">
							<span class="font-semibold text-yellow-400">Enterprise Scale</span>
							<ArrowRight
								class="h-5 w-5 text-yellow-400 transition-transform group-hover:translate-x-2"
							/>
						</div>
					</div>
				</a>

				<a
					href="/portfolio/ar-vr-healthcare/"
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/30 to-slate-800/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-red-400/60 hover:shadow-2xl hover:shadow-red-500/20"
				>
					<!-- Flora accent for this card -->
					<div class="flora-container absolute -top-6 -left-6 h-32 w-24 opacity-40">
						<svg class="flora-frond" viewBox="0 0 96 128" fill="none">
							<ellipse
								cx="48"
								cy="64"
								rx="20"
								ry="50"
								fill="oklch(77.1% 0.1598 51deg)"
								opacity="0.7"
							/>
							<circle cx="48" cy="30" r="8" fill="oklch(96.6% 0.0612 104deg)" />
						</svg>
					</div>

					<div class="mb-6 flex items-start gap-6">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-red-500 transition-transform duration-300 group-hover:scale-110"
						>
							<Eye class="h-8 w-8 text-white" />
						</div>
						<div
							class="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-sm font-medium text-red-300"
						>
							AR/VR Innovation
						</div>
					</div>

					<div class="space-y-4">
						<h3
							class="font-display text-2xl font-bold text-blue-50 transition-colors group-hover:text-white md:text-3xl"
						>
							Immersive Healthcare
						</h3>
						<p class="leading-relaxed text-blue-200 opacity-90">
							Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health
							Conference, exploring cutting-edge applications of immersive technology in clinical
							settings.
						</p>
						<div class="flex items-center justify-between pt-4">
							<span class="font-semibold text-red-400">Industry First</span>
							<ArrowRight
								class="h-5 w-5 text-red-400 transition-transform group-hover:translate-x-2"
							/>
						</div>
					</div>
				</a>

				<a
					href="/portfolio/dental-configurator/"
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/30 to-slate-800/50 p-8 backdrop-blur-md transition-all duration-500 hover:scale-[1.02] hover:border-yellow-400/60 hover:shadow-2xl hover:shadow-yellow-500/20"
				>
					<!-- Flora accent for this card -->
					<div class="flora-container absolute -right-6 -bottom-6 h-20 w-20 opacity-50">
						<svg class="flora-spore" viewBox="0 0 80 80" fill="none">
							<circle cx="40" cy="40" r="18" fill="oklch(84.7% 0.164 82deg)" opacity="0.6" />
							<circle cx="40" cy="40" r="10" fill="oklch(90.9% 0.1329 92deg)" opacity="0.8" />
							<circle cx="40" cy="40" r="4" fill="oklch(98.9% 0.0217 116deg)" />
						</svg>
					</div>

					<div class="mb-6 flex items-start gap-6">
						<div
							class="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-red-400 transition-transform duration-300 group-hover:scale-110"
						>
							<Cpu class="h-8 w-8 text-blue-950" />
						</div>
						<div
							class="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-sm font-medium text-yellow-300"
						>
							3D Customization
						</div>
					</div>

					<div class="space-y-4">
						<h3
							class="font-display text-2xl font-bold text-blue-50 transition-colors group-hover:text-white md:text-3xl"
						>
							Dental Brace Configurator
						</h3>
						<p class="leading-relaxed text-blue-200 opacity-90">
							Developed an interactive 3D mobile app, enabling real-time customization of dental
							braces with instant visual feedback for the perfect smile.
						</p>
						<div class="flex items-center justify-between pt-4">
							<span class="font-semibold text-yellow-400">3D Innovation</span>
							<ArrowRight
								class="h-5 w-5 text-yellow-400 transition-transform group-hover:translate-x-2"
							/>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<!-- Organic Terrain Divider -->
	<div class="organic-divider"></div>

	<section id="experience" class="vibrant-section relative overflow-hidden py-32">
		<!-- Atmospheric Flora Elements -->
		<div class="flora-container absolute top-16 right-8 h-48 w-32 opacity-30">
			<svg class="flora-frond" viewBox="0 0 128 192" fill="none">
				<ellipse cx="64" cy="96" rx="40" ry="80" fill="oklch(70.1% 0.1662 37deg)" opacity="0.6" />
				<ellipse cx="64" cy="90" rx="25" ry="60" fill="oklch(84.7% 0.164 82deg)" opacity="0.8" />
				<circle cx="64" cy="50" r="10" fill="oklch(96.6% 0.0612 104deg)" />
			</svg>
		</div>

		<div class="flora-container absolute bottom-20 left-12 h-24 w-24 opacity-40">
			<svg class="flora-spore" viewBox="0 0 96 96" fill="none">
				<circle cx="48" cy="48" r="24" fill="oklch(77.9% 0.1644 76deg)" opacity="0.7" />
				<circle cx="48" cy="48" r="12" fill="oklch(90.9% 0.1329 92deg)" opacity="0.9" />
				<circle cx="48" cy="48" r="5" fill="oklch(98.9% 0.0217 116deg)" />
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-6">
			<div class="mb-16 text-center">
				<h2 class="font-display mb-6 text-5xl font-bold text-blue-50 md:text-6xl">
					Professional
					<span
						class="bg-gradient-to-r from-yellow-400 via-red-400 to-red-500 bg-clip-text text-transparent"
					>
						Experience
					</span>
				</h2>
				<p class="mx-auto max-w-4xl text-xl text-blue-200 opacity-90 md:text-2xl">
					Building impactful solutions across different scales and industries
				</p>
			</div>

			<div class="grid gap-12 md:grid-cols-2">
				<div
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/40 to-slate-800/60 p-10 backdrop-blur-md"
				>
					<div
						class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-red-400 to-red-600 transition-transform duration-300 group-hover:scale-110"
					>
						<Globe class="h-10 w-10 text-white" />
					</div>
					<h3 class="font-display mb-6 text-3xl font-bold text-blue-50">Open Source Impact</h3>
					<p class="text-lg leading-relaxed text-blue-200 opacity-90">
						Contributing to WordPress Gutenberg at Automattic, where my work on media editing
						features and SVG filters reaches millions of users worldwide. I focus on creating tools
						that empower creators and developers globally.
					</p>
				</div>

				<div
					class="exploration-card group rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/40 to-slate-800/60 p-10 backdrop-blur-md"
				>
					<div
						class="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-400 to-red-500 transition-transform duration-300 group-hover:scale-110"
					>
						<Cpu class="h-10 w-10 text-blue-950" />
					</div>
					<h3 class="font-display mb-6 text-3xl font-bold text-blue-50">Enterprise Innovation</h3>
					<p class="text-lg leading-relaxed text-blue-200 opacity-90">
						Led cutting-edge projects at Cerner, including data visualization installations and
						pioneering AR/VR healthcare applications. Experienced in building solutions that operate
						at massive scale with strict reliability requirements.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Organic Terrain Divider -->
	<div class="organic-divider"></div>

	<section id="contact" class="vibrant-section relative py-32">
		<!-- Magnificent Flora Finale -->
		<div class="flora-container absolute -top-8 -left-12 h-64 w-48 opacity-20">
			<svg class="flora-frond" viewBox="0 0 192 256" fill="none">
				<ellipse cx="96" cy="128" rx="60" ry="120" fill="oklch(70.1% 0.1662 37deg)" opacity="0.5" />
				<ellipse cx="96" cy="120" rx="40" ry="90" fill="oklch(77.1% 0.1598 51deg)" opacity="0.7" />
				<ellipse cx="96" cy="110" rx="25" ry="60" fill="oklch(84.7% 0.164 82deg)" opacity="0.9" />
				<circle cx="96" cy="60" r="15" fill="oklch(96.6% 0.0612 104deg)" />
			</svg>
		</div>

		<div class="flora-container absolute -right-16 -bottom-12 h-56 w-40 opacity-15">
			<svg class="flora-crystal" viewBox="0 0 160 224" fill="none">
				<polygon
					points="80,30 120,80 110,180 50,180 40,80"
					fill="oklch(84.7% 0.164 82deg)"
					opacity="0.7"
				/>
				<polygon
					points="80,30 110,70 80,150 50,70"
					fill="oklch(90.9% 0.1329 92deg)"
					opacity="0.9"
				/>
				<circle cx="80" cy="50" r="8" fill="oklch(98.9% 0.0217 116deg)" />
			</svg>
		</div>

		<!-- Scattered Spores -->
		<div class="flora-container absolute top-1/3 right-1/4 h-16 w-16 opacity-40">
			<svg class="flora-spore" viewBox="0 0 64 64" fill="none">
				<circle cx="32" cy="32" r="15" fill="oklch(77.9% 0.1644 76deg)" opacity="0.6" />
				<circle cx="32" cy="32" r="8" fill="oklch(90.9% 0.1329 92deg)" opacity="0.8" />
				<circle cx="32" cy="32" r="3" fill="oklch(98.9% 0.0217 116deg)" />
			</svg>
		</div>

		<div class="flora-container absolute bottom-1/3 left-1/4 h-20 w-20 opacity-35">
			<svg class="flora-spore" viewBox="0 0 80 80" fill="none">
				<circle cx="40" cy="40" r="18" fill="oklch(84.7% 0.164 82deg)" opacity="0.6" />
				<circle cx="40" cy="40" r="10" fill="oklch(90.9% 0.1329 92deg)" opacity="0.8" />
				<circle cx="40" cy="40" r="4" fill="oklch(98.9% 0.0217 116deg)" />
			</svg>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-6">
			<div class="mb-16 text-center">
				<h2 class="font-display mb-6 text-5xl leading-tight font-bold text-blue-50 md:text-7xl">
					Let's
					<span
						class="bg-gradient-to-r from-red-400 via-red-500 via-yellow-400 to-yellow-400 bg-clip-text text-transparent"
					>
						Connect
					</span>
				</h2>
				<p class="mx-auto max-w-4xl text-xl leading-relaxed text-blue-200 opacity-90 md:text-2xl">
					Interested in collaborating, discussing technology, or exploring opportunities? I'd love
					to hear from you.
				</p>
			</div>

			<div class="grid items-start gap-12 lg:grid-cols-5">
				<div class="lg:col-span-3">
					<form
						method="post"
						action="https://forms.un-static.com/forms/9f08c765086e2a71f5c3bb696226ff2546c6382f"
						class="space-y-8"
					>
						<div class="grid gap-6 md:grid-cols-2">
							<div class="space-y-2">
								<label for="name" class="block text-lg font-medium text-blue-100">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									placeholder="Your name"
									class="w-full rounded-xl border border-blue-300/60 border-blue-600/40 bg-blue-50/90 bg-blue-900/30 px-4 py-3 text-blue-50 text-blue-900 placeholder-blue-300/60 placeholder-blue-700/60 backdrop-blur-sm transition-all focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none dark:border-blue-600/40 dark:bg-blue-900/30 dark:text-blue-50 dark:placeholder-blue-300/60"
								/>
							</div>
							<div class="space-y-2">
								<label for="email" class="block text-lg font-medium text-blue-100">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									placeholder="your@email.com"
									class="w-full rounded-xl border border-blue-600/40 bg-blue-900/30 px-4 py-3 text-blue-50 placeholder-blue-300/60 backdrop-blur-sm transition-all focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none"
								/>
							</div>
						</div>

						<div class="space-y-2">
							<label for="company" class="block text-lg font-medium text-blue-100">Company</label>
							<input
								type="text"
								id="company"
								name="company"
								placeholder="Your company (optional)"
								class="w-full rounded-xl border border-blue-600/40 bg-blue-900/30 px-4 py-3 text-blue-50 placeholder-blue-300/60 backdrop-blur-sm transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
							/>
						</div>

						<div class="space-y-2">
							<label for="subject" class="block text-lg font-medium text-blue-100">Subject</label>
							<select
								id="subject"
								name="subject"
								class="w-full rounded-xl border border-blue-600/40 bg-blue-900/30 px-4 py-3 text-blue-50 backdrop-blur-sm transition-all focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 focus:outline-none"
							>
								<option value="" class="bg-blue-900 text-blue-200"
									>What would you like to discuss?</option
								>
								<option value="collaboration" class="bg-blue-900 text-blue-200"
									>Collaboration Opportunity</option
								>
								<option value="open-source" class="bg-blue-900 text-blue-200"
									>Open Source Project</option
								>
								<option value="technical" class="bg-blue-900 text-blue-200"
									>Technical Discussion</option
								>
								<option value="job" class="bg-blue-900 text-blue-200">Job Opportunity</option>
								<option value="other" class="bg-blue-900 text-blue-200">General Inquiry</option>
							</select>
						</div>

						<div class="space-y-2">
							<label for="message" class="block text-lg font-medium text-blue-100">Message</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								required
								placeholder="Tell me more about what you'd like to discuss..."
								class="w-full resize-none rounded-xl border border-blue-600/40 bg-blue-900/30 px-4 py-3 text-blue-50 placeholder-blue-300/60 backdrop-blur-sm transition-all focus:border-red-400 focus:ring-2 focus:ring-red-400/20 focus:outline-none"
							></textarea>
						</div>

						<button
							type="submit"
							class="w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:from-red-400 hover:to-red-500 hover:shadow-xl hover:shadow-red-500/30 focus:ring-4 focus:ring-red-400/30 focus:outline-none"
						>
							Send Message
						</button>
					</form>

					<div class="mt-6 text-center">
						<span class="text-sm text-blue-300/70">
							Powered by <a
								rel="nofollow"
								href="https://un-static.com"
								class="text-blue-200 underline transition-colors hover:text-yellow-400"
								>Un-static Forms</a
							>
						</span>
					</div>
				</div>

				<div class="lg:col-span-2">
					<div
						class="exploration-card rounded-3xl border border-blue-600/40 bg-gradient-to-br from-blue-800/30 to-slate-800/50 p-8 backdrop-blur-md"
					>
						<h3 class="font-display mb-6 text-2xl font-bold text-blue-50">
							Ready to Explore Together?
						</h3>
						<p class="mb-6 leading-relaxed text-blue-200 opacity-90">
							Whether you're looking to collaborate on cutting-edge projects, discuss technical
							challenges, or explore new opportunities, I'm excited to connect with fellow explorers
							of the digital frontier.
						</p>
						<div class="space-y-4">
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span class="text-blue-100">Open to collaboration</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-red-400"></div>
								<span class="text-blue-100">Technical discussions welcome</span>
							</div>
							<div class="flex items-center gap-3">
								<div class="h-2 w-2 rounded-full bg-yellow-400"></div>
								<span class="text-blue-100">Always learning something new</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	/* Global Alien World Foundation - Light Mode Default */
	:global(html) {
		min-height: 100vh;
		background: fixed
			linear-gradient(135deg, oklch(95.7% 0.0228 122deg) 0%, oklch(90.1% 0.0655 152deg) 100%);
	}

	:global(body) {
		background: transparent;
		color: oklch(33.2% 0.0579 218deg);
	}

	/* Dark Mode Override */
	:global(html.dark) {
		background: fixed
			linear-gradient(135deg, oklch(20.4% 0.0368 223deg) 0%, oklch(33.2% 0.0579 218deg) 100%);
	}

	:global(body.dark) {
		background: transparent;
		color: oklch(95.7% 0.0228 122deg);
	}

	/* Alien Landscape Background System */
	.alien-landscape {
		position: relative;
		overflow: hidden;
		min-height: 100vh;
	}

	/* Light Mode Alien Landscape (Default) */
	.alien-landscape::before {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: 
			/* Alien ground vegetation layer - light mode */
			radial-gradient(
				ellipse 100% 40% at 50% 100%,
				oklch(77.1% 0.1598 51deg / 0.3) 0%,
				oklch(83.6% 0.1438 66deg / 0.15) 30%,
				transparent 70%
			),
			/* Atmospheric sky layers - light mode */
				radial-gradient(
					ellipse 150% 60% at 30% 0%,
					oklch(84.7% 0.164 82deg / 0.15) 0%,
					transparent 50%
				),
			radial-gradient(
				ellipse 120% 80% at 70% 0%,
				oklch(90.9% 0.1329 92deg / 0.1) 0%,
				transparent 60%
			),
			/* Base alien sky gradient - light mode */
				linear-gradient(
					180deg,
					oklch(85.5% 0.0794 165deg) 0%,
					oklch(79.8% 0.0883 177deg) 50%,
					oklch(72.8% 0.0922 187deg) 100%
				);
		z-index: -4;
	}

	/* Dark Mode Alien Landscape Override */
	.dark .alien-landscape::before {
		background: 
			/* Alien ground vegetation layer - dark mode */
			radial-gradient(
				ellipse 100% 40% at 50% 100%,
				oklch(70.1% 0.1662 37deg / 0.4) 0%,
				oklch(77.1% 0.1598 51deg / 0.2) 30%,
				transparent 70%
			),
			/* Atmospheric sky layers - dark mode */
				radial-gradient(
					ellipse 150% 60% at 30% 0%,
					oklch(84.7% 0.164 82deg / 0.2) 0%,
					transparent 50%
				),
			radial-gradient(
				ellipse 120% 80% at 70% 0%,
				oklch(77.9% 0.1644 76deg / 0.15) 0%,
				transparent 60%
			),
			/* Base alien sky gradient - dark mode */
				linear-gradient(
					180deg,
					oklch(72.8% 0.0922 187deg) 0%,
					oklch(55.4% 0.085 205deg) 50%,
					oklch(33.2% 0.0579 218deg) 100%
				);
	}

	/* Enhanced atmospheric background */
	.atmospheric-layers {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: -3;
		pointer-events: none;
	}

	/* Light Mode Atmospheric Layers (Default) */
	.atmosphere-layer-1 {
		position: absolute;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			circle at 25% 15%,
			oklch(90.9% 0.1329 92deg / 0.2) 0%,
			oklch(84.7% 0.164 82deg / 0.1) 30%,
			transparent 60%
		);
		animation: drift-slow 25s ease-in-out infinite alternate;
	}

	.atmosphere-layer-2 {
		position: absolute;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			circle at 75% 70%,
			oklch(83.6% 0.1438 66deg / 0.15) 0%,
			oklch(77.1% 0.1598 51deg / 0.08) 40%,
			transparent 70%
		);
		animation: drift-medium 18s ease-in-out infinite alternate-reverse;
	}

	.atmosphere-layer-3 {
		position: absolute;
		width: 100%;
		height: 100%;
		background: radial-gradient(
			ellipse at 40% 85%,
			oklch(77.1% 0.1598 51deg / 0.12) 0%,
			oklch(70.1% 0.1662 37deg / 0.06) 50%,
			transparent 80%
		);
		animation: drift-fast 14s ease-in-out infinite alternate;
	}

	/* Dark Mode Atmospheric Layers Override */
	.dark .atmosphere-layer-1 {
		background: radial-gradient(
			circle at 25% 15%,
			oklch(90.9% 0.1329 92deg / 0.4) 0%,
			oklch(84.7% 0.164 82deg / 0.2) 30%,
			transparent 60%
		);
	}

	.dark .atmosphere-layer-2 {
		background: radial-gradient(
			circle at 75% 70%,
			oklch(83.6% 0.1438 66deg / 0.3) 0%,
			oklch(77.1% 0.1598 51deg / 0.15) 40%,
			transparent 70%
		);
	}

	.dark .atmosphere-layer-3 {
		background: radial-gradient(
			ellipse at 40% 85%,
			oklch(70.1% 0.1662 37deg / 0.25) 0%,
			oklch(62.6% 0.1627 24deg / 0.1) 50%,
			transparent 80%
		);
	}

	@keyframes drift-slow {
		0% {
			transform: translateX(-2%) translateY(-1%);
		}
		100% {
			transform: translateX(2%) translateY(1%);
		}
	}

	@keyframes drift-medium {
		0% {
			transform: translateX(1%) translateY(-2%);
		}
		100% {
			transform: translateX(-1%) translateY(2%);
		}
	}

	@keyframes drift-fast {
		0% {
			transform: translateX(-1%) translateY(1%);
		}
		100% {
			transform: translateX(1%) translateY(-1%);
		}
	}

	/* Enhanced Alien Flora System */
	.flora-container {
		position: absolute;
		pointer-events: none;
		z-index: 1;
		filter: drop-shadow(0 0 20px oklch(84.7% 0.164 82deg / 0.3));
	}

	.flora-spore {
		animation: float-spore 12s ease-in-out infinite;
		transform-origin: center;
		filter: drop-shadow(0 0 15px currentColor);
	}

	.flora-frond {
		animation: sway-frond 8s ease-in-out infinite alternate;
		transform-origin: bottom center;
		filter: drop-shadow(0 0 10px oklch(70.1% 0.1662 37deg / 0.6));
	}

	.flora-crystal {
		animation: pulse-crystal 6s ease-in-out infinite;
		transform-origin: center;
		filter: drop-shadow(0 0 25px oklch(90.9% 0.1329 92deg / 0.8));
	}

	@keyframes float-spore {
		0%,
		100% {
			transform: translateY(0px) rotate(0deg) scale(1);
			filter: drop-shadow(0 0 15px oklch(84.7% 0.164 82deg / 0.4));
		}
		25% {
			transform: translateY(-30px) rotate(90deg) scale(1.15);
			filter: drop-shadow(0 0 25px oklch(90.9% 0.1329 92deg / 0.6));
		}
		50% {
			transform: translateY(-15px) rotate(180deg) scale(0.95);
			filter: drop-shadow(0 0 20px oklch(77.1% 0.1598 51deg / 0.5));
		}
		75% {
			transform: translateY(-35px) rotate(270deg) scale(1.1);
			filter: drop-shadow(0 0 30px oklch(96.6% 0.0612 104deg / 0.7));
		}
	}

	@keyframes sway-frond {
		0% {
			transform: rotate(-8deg) scaleY(1) scaleX(0.98);
			filter: drop-shadow(0 0 10px oklch(70.1% 0.1662 37deg / 0.4));
		}
		100% {
			transform: rotate(8deg) scaleY(1.08) scaleX(1.02);
			filter: drop-shadow(0 0 20px oklch(84.7% 0.164 82deg / 0.7));
		}
	}

	@keyframes pulse-crystal {
		0%,
		100% {
			transform: scale(1) rotate(0deg);
			filter: drop-shadow(0 0 15px oklch(90.9% 0.1329 92deg / 0.6));
		}
		33% {
			transform: scale(1.3) rotate(120deg);
			filter: drop-shadow(0 0 35px oklch(96.6% 0.0612 104deg / 0.9));
		}
		66% {
			transform: scale(0.9) rotate(240deg);
			filter: drop-shadow(0 0 25px oklch(77.9% 0.1644 76deg / 0.7));
		}
	}

	/* Cinematic Full-Bleed Terrain Sections */
	.vibrant-section {
		position: relative;
		width: 100vw;
		margin-left: calc(-50vw + 50%);
		padding: 8rem 0;
		overflow: hidden;
	}

	.vibrant-section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: 
			/* Very subtle atmospheric depth - minimal visual impact */
			radial-gradient(
				ellipse 300% 80% at 20% 0%,
				oklch(72.8% 0.0922 187deg / 0.04) 0%,
				transparent 80%
			),
			radial-gradient(
				ellipse 200% 60% at 80% 100%,
				oklch(70.1% 0.1662 37deg / 0.03) 0%,
				transparent 90%
			);
		z-index: -1;
	}

	/* Ultra-subtle atmospheric enhancement */
	.vibrant-section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background:
			radial-gradient(circle at 30% 30%, oklch(84.7% 0.164 82deg / 0.015) 0%, transparent 70%),
			radial-gradient(circle at 70% 70%, oklch(77.1% 0.1598 51deg / 0.01) 0%, transparent 80%);
		z-index: -1;
		animation: subtle-atmosphere 30s ease-in-out infinite alternate;
	}

	@keyframes subtle-atmosphere {
		0% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}

	/* Organic Terrain Dividers */
	.organic-divider {
		height: 150px;
		position: relative;
		overflow: hidden;
		margin: 4rem 0;
	}

	/* Light Mode Organic Dividers (Default) */
	.organic-divider::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 Q200,130 400,90 T800,95 Q1000,75 1200,90 L1200,150 L0,150 Z' fill='oklch(77.1%25 0.1598 51deg / 0.2)' /%3E%3Cpath d='M0,120 Q300,150 600,100 T1200,110 L1200,150 L0,150 Z' fill='oklch(83.6%25 0.1438 66deg / 0.15)' /%3E%3C/svg%3E")
			no-repeat center;
		background-size: cover;
		animation: organic-flow 15s ease-in-out infinite alternate;
	}

	/* Dark Mode Organic Dividers Override */
	.dark .organic-divider::before {
		background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 Q200,130 400,90 T800,95 Q1000,75 1200,90 L1200,150 L0,150 Z' fill='oklch(70.1%25 0.1662 37deg / 0.4)' /%3E%3Cpath d='M0,120 Q300,150 600,100 T1200,110 L1200,150 L0,150 Z' fill='oklch(77.1%25 0.1598 51deg / 0.3)' /%3E%3C/svg%3E")
			no-repeat center;
		background-size: cover;
	}

	@keyframes organic-flow {
		0% {
			transform: translateX(-20px) scaleX(1.02);
		}
		100% {
			transform: translateX(20px) scaleX(0.98);
		}
	}

	/* Global Text Color Theme Support - Light Mode Default */
	.text-blue-50 {
		color: oklch(33.2% 0.0579 218deg) !important;
	}
	.text-blue-100 {
		color: oklch(29% 0.0354 243deg) !important;
	}
	.text-blue-200 {
		color: oklch(44.9% 0.0739 212deg) !important;
	}
	.text-blue-300 {
		color: oklch(55.4% 0.085 205deg) !important;
	}

	/* Dark Mode Text Color Overrides */
	.dark .text-blue-50 {
		color: oklch(95.7% 0.0228 122deg) !important;
	}
	.dark .text-blue-100 {
		color: oklch(93.5% 0.0467 137deg) !important;
	}
	.dark .text-blue-200 {
		color: oklch(85.5% 0.0794 165deg) !important;
	}
	.dark .text-blue-300 {
		color: oklch(79.8% 0.0883 177deg) !important;
	}

	/* Enhanced Interactive Cards - Light Mode Default */
	.exploration-card {
		position: relative;
		transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
		backdrop-filter: blur(12px);
		border: 2px solid oklch(72.8% 0.0922 187deg / 0.3);
		background: linear-gradient(
			135deg,
			oklch(95.7% 0.0228 122deg / 0.9) 0%,
			oklch(93.5% 0.0467 137deg / 0.95) 100%
		);
		box-shadow:
			0 8px 32px oklch(72.8% 0.0922 187deg / 0.1),
			inset 0 1px 0 oklch(93.5% 0.0467 137deg / 0.8);
		color: oklch(33.2% 0.0579 218deg);
	}

	.exploration-card:hover {
		transform: translateY(-12px) scale(1.03);
		border-color: oklch(77.1% 0.1598 51deg / 0.6);
		box-shadow:
			0 25px 50px oklch(72.8% 0.0922 187deg / 0.2),
			0 0 80px oklch(77.1% 0.1598 51deg / 0.2),
			inset 0 1px 0 oklch(90.1% 0.0655 152deg);
	}

	/* Dark Mode Cards Override */
	.dark .exploration-card {
		border: 2px solid oklch(55.4% 0.085 205deg / 0.4);
		background: linear-gradient(
			135deg,
			oklch(33.2% 0.0579 218deg / 0.8) 0%,
			oklch(29% 0.0354 243deg / 0.9) 100%
		);
		box-shadow:
			0 8px 32px oklch(20.4% 0.0368 223deg / 0.2),
			inset 0 1px 0 oklch(95.7% 0.0228 122deg / 0.1);
		color: oklch(95.7% 0.0228 122deg);
	}

	.dark .exploration-card:hover {
		border-color: oklch(77.1% 0.1598 51deg / 0.8);
		box-shadow:
			0 25px 50px oklch(20.4% 0.0368 223deg / 0.4),
			0 0 80px oklch(77.1% 0.1598 51deg / 0.3),
			inset 0 1px 0 oklch(95.7% 0.0228 122deg / 0.2);
	}

	.exploration-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		background:
			radial-gradient(circle at 30% 20%, oklch(84.7% 0.164 82deg / 0.05) 0%, transparent 50%),
			radial-gradient(circle at 70% 80%, oklch(77.1% 0.1598 51deg / 0.03) 0%, transparent 50%);
		z-index: -1;
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	.exploration-card:hover::before {
		opacity: 1;
	}

	/* Enhanced Parallax Effects for Depth */
	.parallax-slow {
		transform: translateY(calc(var(--scroll) * -0.15px)) translateX(calc(var(--scroll) * -0.05px));
	}

	.parallax-medium {
		transform: translateY(calc(var(--scroll) * -0.25px)) translateX(calc(var(--scroll) * 0.03px));
	}

	.parallax-fast {
		transform: translateY(calc(var(--scroll) * -0.4px)) translateX(calc(var(--scroll) * -0.02px));
	}

	/* Seamless Alien World Experience - Light Mode Default */
	:global(*) {
		scrollbar-width: thin;
		scrollbar-color: oklch(77.1% 0.1598 51deg / 0.6) oklch(90.1% 0.0655 152deg / 0.4);
	}

	:global(::-webkit-scrollbar) {
		width: 8px;
	}

	/* Light Mode Scrollbar (Default) */
	:global(::-webkit-scrollbar-track) {
		background: oklch(90.1% 0.0655 152deg / 0.4);
	}

	:global(::-webkit-scrollbar-thumb) {
		background: linear-gradient(
			180deg,
			oklch(77.1% 0.1598 51deg / 0.8),
			oklch(84.7% 0.164 82deg / 0.6)
		);
		border-radius: 4px;
	}

	:global(::-webkit-scrollbar-thumb:hover) {
		background: linear-gradient(
			180deg,
			oklch(77.1% 0.1598 51deg / 1),
			oklch(84.7% 0.164 82deg / 0.8)
		);
	}

	/* Dark Mode Scrollbar Override */
	:global(.dark *) {
		scrollbar-color: oklch(77.1% 0.1598 51deg / 0.5) oklch(33.2% 0.0579 218deg / 0.3);
	}

	:global(.dark ::-webkit-scrollbar-track) {
		background: oklch(33.2% 0.0579 218deg / 0.3);
	}

	:global(.dark ::-webkit-scrollbar-thumb) {
		background: linear-gradient(
			180deg,
			oklch(77.1% 0.1598 51deg / 0.7),
			oklch(84.7% 0.164 82deg / 0.5)
		);
	}

	:global(.dark ::-webkit-scrollbar-thumb:hover) {
		background: linear-gradient(
			180deg,
			oklch(90.9% 0.1329 92deg / 0.8),
			oklch(96.6% 0.0612 104deg / 0.6)
		);
	}
</style>
