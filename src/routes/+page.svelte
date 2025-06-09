<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Logo from './Logo.svelte';

	import { randomCircularPointDistribution } from '$lib/random';

	let clientWidth = $state(0);
	let clientHeight = $state(0);

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

<div class="flex min-h-screen flex-col bg-white">
	<header>
		<div
			class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800"
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
			<nav
				class="absolute top-0 right-0 left-0 mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
			>
				<div class="flex items-center space-x-6 md:space-x-8">
					<a href="/" class="text-lg font-semibold text-blue-50 hover:text-blue-400">Alex Lende</a>
					<a
						href="#services"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Services
					</a>
					<a
						href="#portfolio"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Portfolio
					</a>
					<a
						href="#contact"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Contact
					</a>
				</div>
				<div class="flex items-center space-x-6">
					<a
						href="https://github.com/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on GitHub"
						class="text-blue-50 transition-colors hover:text-blue-400"
					>
						<Github class="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on LinkedIn"
						class="text-blue-50 transition-colors hover:text-blue-400"
					>
						<Linkedin class="h-6 w-6" />
					</a>
					<a
						href="https://wellfound.com/u/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on Wellfound"
						class="text-blue-50 transition-colors hover:text-blue-400"
					>
						<Briefcase class="h-6 w-6" />
					</a>
				</div>
			</nav>
			<div class="flex flex-col items-center justify-center gap-4 text-center">
				<Logo class="fill-blue-50" width="10em" height="10em" />
				<h1 class="font-serif text-9xl font-bold text-blue-50 drop-shadow-lg">Alex Lende</h1>
				<div class="font-serif text-4xl text-blue-50 drop-shadow">Software Engineer</div>
			</div>
		</div>
	</header>

	<!-- TODO: Add main content styling -->
	<main class="bg-white">
		<!-- Services Section -->
		<section id="services" class="px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Expert Development Services
					</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-800">
						Delivering cutting-edge web applications and immersive 3D experiences that push the
						boundaries of what's possible in the browser.
					</p>
				</div>

				<div class="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
					<!-- Full-Stack Development -->
					<div
						class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg"
					>
						<div class="relative z-10">
							<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-2xl font-bold text-blue-950">
								Full-Stack Web Development
							</h3>
							<p class="mt-4 leading-7 text-blue-800">
								From React frontends to Node.js backends, I build scalable web applications using
								modern frameworks like SvelteKit, Next.js, and TypeScript. Expert in component
								architecture, state management, and performance optimization.
							</p>
							<ul class="mt-6 space-y-2 text-blue-700">
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
									Modern JavaScript/TypeScript ecosystems
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
									Component-driven development
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-blue-600"></span>
									API design and integration
								</li>
							</ul>
						</div>
					</div>

					<!-- WebGL & 3D Development -->
					<div
						class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 shadow-lg"
					>
						<div class="relative z-10">
							<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-600">
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-2xl font-bold text-yellow-950">
								WebGL & 3D Visualization
							</h3>
							<p class="mt-4 leading-7 text-yellow-800">
								Specialized in creating immersive 3D experiences and data visualizations using
								WebGL, Three.js, and computer graphics techniques. From AR/VR applications to
								interactive product configurators.
							</p>
							<ul class="mt-6 space-y-2 text-yellow-700">
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-600"></span>
									WebGL and Three.js expertise
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-600"></span>
									AR/VR application development
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-600"></span>
									Interactive data visualization
								</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- Additional Services -->
				<div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600"
						>
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
								/>
							</svg>
						</div>
						<h3 class="font-serif text-lg font-semibold text-blue-950">Technical Leadership</h3>
						<p class="mt-2 text-sm text-blue-700">
							Mentoring teams and establishing best practices for scalable development.
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600"
						>
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-2.25m2.25 0l.75 3 .75-3m-2.25 0L12.75 15l-1.5 1.5"
								/>
							</svg>
						</div>
						<h3 class="font-serif text-lg font-semibold text-blue-950">Performance Optimization</h3>
						<p class="mt-2 text-sm text-blue-700">
							Identifying bottlenecks and optimizing applications for maximum efficiency.
						</p>
					</div>
					<div class="text-center">
						<div
							class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600"
						>
							<svg
								class="h-6 w-6 text-white"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
						</div>
						<h3 class="font-serif text-lg font-semibold text-blue-950">System Architecture</h3>
						<p class="mt-2 text-sm text-blue-700">
							Designing robust, scalable systems that grow with your business needs.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section class="bg-gradient-to-br from-blue-50 to-yellow-50 px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="items-center lg:grid lg:grid-cols-2 lg:gap-16">
					<div>
						<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
							10+ Years of Innovation
						</h2>
						<p class="mt-6 text-xl leading-8 text-blue-800">
							As a Principal Software Engineer with a passion for cutting-edge technology, I help
							companies build exceptional digital experiences that push the boundaries of what's
							possible.
						</p>
						<p class="mt-6 text-lg leading-7 text-blue-700">
							Whether you're a startup looking for technical leadership to scale your platform, or
							an established company needing specialized expertise in modern web technologies, I
							bring deep knowledge across the full development stack.
						</p>

						<div class="mt-10 grid grid-cols-2 gap-6">
							<div>
								<dt class="font-serif text-2xl font-bold text-blue-950">50M+</dt>
								<dd class="text-blue-700">Users reached through WordPress core contributions</dd>
							</div>
							<div>
								<dt class="font-serif text-2xl font-bold text-blue-950">10+</dt>
								<dd class="text-blue-700">Years of professional development experience</dd>
							</div>
						</div>
					</div>

					<div class="mt-10 lg:mt-0">
						<div class="rounded-3xl bg-white p-8 shadow-xl">
							<h3 class="mb-6 font-serif text-xl font-bold text-blue-950">Core Expertise</h3>
							<div class="space-y-4">
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-blue-600"></span>
									<span class="text-blue-800">React, Svelte, Vue.js ecosystems</span>
								</div>
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-yellow-600"></span>
									<span class="text-blue-800">WebGL, Three.js, computer graphics</span>
								</div>
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-red-600"></span>
									<span class="text-blue-800">Node.js, TypeScript, Python</span>
								</div>
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-blue-600"></span>
									<span class="text-blue-800">WordPress & content management systems</span>
								</div>
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-yellow-600"></span>
									<span class="text-blue-800">Data visualization & analytics</span>
								</div>
								<div class="flex items-center">
									<span class="mr-4 h-3 w-3 rounded-full bg-red-600"></span>
									<span class="text-blue-800">AR/VR application development</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Technical Achievements Section -->
		<section class="border-t border-blue-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Technical Achievements
					</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-800">
						Deep technical accomplishments that demonstrate expertise in complex problem-solving and
						system design.
					</p>
				</div>

				<div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
					<!-- WebGL Innovation -->
					<div
						class="relative rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8"
					>
						<div class="mb-4 flex items-center">
							<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
								<svg
									class="h-5 w-5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.436 2.436a2.25 2.25 0 01-3.182 0l-2.436-2.436M19.8 14.5V16a2.25 2.25 0 01-2.25 2.25h-8.1A2.25 2.25 0 017.2 16v-1.5m12.6 0a2.25 2.25 0 01-2.25 2.25"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-lg font-bold text-blue-950">WebGL Performance</h3>
						</div>
						<p class="mb-4 text-blue-800">
							Achieved 60fps performance in browser-based image editing tools used by millions of
							WordPress users daily.
						</p>
						<div class="text-sm text-blue-700">
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-blue-600"></span>
								Custom GLSL shaders for image processing
							</div>
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-blue-600"></span>
								Memory-efficient texture management
							</div>
							<div class="flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-blue-600"></span>
								Cross-browser WebGL compatibility
							</div>
						</div>
					</div>

					<!-- Data Architecture -->
					<div
						class="relative rounded-2xl border border-red-200 bg-gradient-to-br from-red-50 to-red-100 p-8"
					>
						<div class="mb-4 flex items-center">
							<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
								<svg
									class="h-5 w-5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-lg font-bold text-red-950">Data Architecture</h3>
						</div>
						<p class="mb-4 text-red-800">
							Designed real-time data pipeline architecture handling critical patient metrics from
							11 disparate healthcare systems.
						</p>
						<div class="text-sm text-red-700">
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-red-600"></span>
								Sub-second latency for critical alerts
							</div>
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-red-600"></span>
								Fault-tolerant distributed processing
							</div>
							<div class="flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-red-600"></span>
								HIPAA-compliant security implementation
							</div>
						</div>
					</div>

					<!-- 3D Rendering Innovation -->
					<div
						class="relative rounded-2xl border border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100 p-8"
					>
						<div class="mb-4 flex items-center">
							<div class="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
								<svg
									class="h-5 w-5 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-lg font-bold text-yellow-950">3D Rendering</h3>
						</div>
						<p class="mb-4 text-yellow-800">
							Developed photorealistic product configurator with real-time material and lighting
							updates running at 60fps on mobile devices.
						</p>
						<div class="text-sm text-yellow-700">
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-yellow-600"></span>
								Physically-based rendering (PBR) materials
							</div>
							<div class="mb-2 flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-yellow-600"></span>
								Dynamic environment mapping
							</div>
							<div class="flex items-center">
								<span class="mr-2 h-1 w-1 rounded-full bg-yellow-600"></span>
								Optimized geometry LOD system
							</div>
						</div>
					</div>
				</div>

				<!-- Performance Metrics -->
				<div class="mt-16 rounded-3xl bg-gradient-to-r from-blue-950 to-blue-900 p-8 text-white">
					<div class="mb-8 text-center">
						<h3 class="font-serif text-2xl font-bold text-blue-50">Performance Impact</h3>
						<p class="mt-2 text-blue-200">Measurable improvements delivered across all projects</p>
					</div>
					<div class="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
						<div>
							<div class="mb-2 text-3xl font-bold text-yellow-400">60fps</div>
							<div class="text-sm text-blue-200">WebGL rendering performance</div>
						</div>
						<div>
							<div class="mb-2 text-3xl font-bold text-yellow-400">&lt;100ms</div>
							<div class="text-sm text-blue-200">Data pipeline latency</div>
						</div>
						<div>
							<div class="mb-2 text-3xl font-bold text-yellow-400">99.9%</div>
							<div class="text-sm text-blue-200">System uptime achieved</div>
						</div>
						<div>
							<div class="mb-2 text-3xl font-bold text-yellow-400">40%</div>
							<div class="text-sm text-blue-200">Bundle size reduction</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="bg-white px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Transformative Projects
					</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-800">
						From revolutionizing content creation to pioneering data visualization, here's how I've
						helped companies achieve their technical vision.
					</p>
				</div>

				<div class="mt-20 space-y-20">
					<!-- WordPress/Automattic Project -->
					<div class="items-center lg:grid lg:grid-cols-2 lg:gap-16">
						<div>
							<div
								class="mb-6 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
							>
								Content Management Platform
							</div>
							<h3 class="font-serif text-3xl font-bold text-blue-950">
								WordPress Gutenberg Editor
							</h3>
							<p class="mt-6 text-lg leading-7 text-blue-700">
								Led development of critical features for WordPress's modern block editor, serving
								over 40% of the web. Pioneered WebGL-powered image editing tools and advanced
								component architecture that handles millions of content creators daily.
							</p>
							<ul class="mt-6 space-y-3 text-blue-700">
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
									<span>Developed inline image cropping and rotation tools using WebGL</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
									<span>Implemented JSON Schema validation for WordPress core</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
									<span>Created smooth 60fps animations for enhanced user experience</span>
								</li>
							</ul>
							<div class="mt-8 flex flex-wrap gap-2">
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
									>React</span
								>
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
									>WebGL</span
								>
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
									>JSON Schema</span
								>
								<span class="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
									>WordPress</span
								>
							</div>
						</div>
						<div class="mt-10 lg:mt-0">
							<div
								class="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-blue-200 p-8"
							>
								<div class="text-center">
									<div
										class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-600"
									>
										<svg class="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
											<path
												d="M21.469 6.825c.84 1.537.84 3.413.84 7.165 0 3.752 0 5.628-.84 7.165a6.5 6.5 0 0 1-3.479 3.479c-1.537.84-3.413.84-7.165.84s-5.628 0-7.165-.84a6.5 6.5 0 0 1-3.479-3.479c-.84-1.537-.84-3.413-.84-7.165 0-3.752 0-5.628.84-7.165A6.5 6.5 0 0 1 3.66 3.341C5.197 2.501 7.073 2.501 10.825 2.501s5.628 0 7.165.84a6.5 6.5 0 0 1 3.479 3.479Z"
											/>
										</svg>
									</div>
									<p class="font-medium text-blue-800">WordPress Block Editor</p>
									<p class="mt-1 text-sm text-blue-600">Serving 40% of the web</p>
								</div>
							</div>
						</div>
					</div>

					<!-- Healthcare Data Visualization -->
					<div class="items-center lg:grid lg:grid-cols-2 lg:gap-16">
						<div class="lg:order-2">
							<div
								class="mb-6 inline-flex items-center rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800"
							>
								Healthcare Technology
							</div>
							<h3 class="font-serif text-3xl font-bold text-blue-950">Healthcare Data Platform</h3>
							<p class="mt-6 text-lg leading-7 text-blue-700">
								Built comprehensive data visualization platform for healthcare providers, connecting
								11 different live data sources into 28 unique interactive dashboards. Enabled
								real-time decision making for patient care and hospital operations.
							</p>
							<ul class="mt-6 space-y-3 text-blue-700">
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600"></span>
									<span>Developed AR/VR demonstration for patient education</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600"></span>
									<span>Created real-time data pipelines for critical patient metrics</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600"></span>
									<span>Optimized performance for hospital-wide deployment</span>
								</li>
							</ul>
							<div class="mt-8 flex flex-wrap gap-2">
								<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
									>D3.js</span
								>
								<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
									>React</span
								>
								<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
									>WebVR</span
								>
								<span class="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800"
									>Real-time Data</span
								>
							</div>
						</div>
						<div class="mt-10 lg:order-1 lg:mt-0">
							<div
								class="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-red-100 to-red-200 p-8"
							>
								<div class="text-center">
									<div
										class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-600"
									>
										<svg
											class="h-10 w-10 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
											/>
										</svg>
									</div>
									<p class="font-medium text-red-800">Healthcare Analytics</p>
									<p class="mt-1 text-sm text-red-600">Real-time patient data</p>
								</div>
							</div>
						</div>
					</div>

					<!-- 3D Product Configurator -->
					<div class="items-center lg:grid lg:grid-cols-2 lg:gap-16">
						<div>
							<div
								class="mb-6 inline-flex items-center rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
							>
								3D Visualization
							</div>
							<h3 class="font-serif text-3xl font-bold text-blue-950">3D Product Configurator</h3>
							<p class="mt-6 text-lg leading-7 text-blue-700">
								Developed interactive 3D visualization system for customizing dental braces,
								enabling customers to see real-time previews of their personalized products. Built
								with advanced WebGL techniques for photorealistic rendering.
							</p>
							<ul class="mt-6 space-y-3 text-blue-700">
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"
									></span>
									<span>Real-time 3D rendering with physically-based materials</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"
									></span>
									<span>Interactive customization interface for product variants</span>
								</li>
								<li class="flex items-start">
									<span class="mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-600"
									></span>
									<span>Optimized for mobile and desktop performance</span>
								</li>
							</ul>
							<div class="mt-8 flex flex-wrap gap-2">
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
									>Three.js</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
									>WebGL</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
									>GLSL</span
								>
								<span
									class="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800"
									>Product Design</span
								>
							</div>
						</div>
						<div class="mt-10 lg:mt-0">
							<div
								class="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-yellow-100 to-yellow-200 p-8"
							>
								<div class="text-center">
									<div
										class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-yellow-600"
									>
										<svg
											class="h-10 w-10 text-white"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
											/>
										</svg>
									</div>
									<p class="font-medium text-yellow-800">3D Configurator</p>
									<p class="mt-1 text-sm text-yellow-600">Interactive product customization</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Client Types Section -->
		<section class="bg-gradient-to-br from-blue-950 to-blue-800 px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-50 sm:text-5xl">Who I Work With</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-200">
						From early-stage startups to enterprise companies, I partner with teams that are ready
						to push technical boundaries.
					</p>
				</div>

				<div class="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
					<!-- Startups -->
					<div
						class="relative overflow-hidden rounded-3xl border border-blue-700/50 bg-blue-900/50 p-8 backdrop-blur-sm"
					>
						<div class="relative z-10">
							<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-600">
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.58-5.84a14.927 14.927 0 015.84 2.58m-2.58 5.84a6.002 6.002 0 01-5.84-2.58m5.84 2.58a6.002 6.002 0 01-2.58 5.84"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-2xl font-bold text-blue-50">Growing Startups</h3>
							<p class="mt-4 leading-7 text-blue-200">
								Technical leadership for startups scaling their platforms. I help establish solid
								architectural foundations, mentor growing development teams, and implement the
								complex features that differentiate your product.
							</p>
							<ul class="mt-6 space-y-2 text-blue-300">
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-400"></span>
									Technical strategy and architecture planning
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-400"></span>
									Team mentoring and code review processes
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-yellow-400"></span>
									MVP development to market-ready platforms
								</li>
							</ul>
						</div>
					</div>

					<!-- Enterprise -->
					<div
						class="relative overflow-hidden rounded-3xl border border-blue-700/50 bg-blue-900/50 p-8 backdrop-blur-sm"
					>
						<div class="relative z-10">
							<div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-red-600">
								<svg
									class="h-8 w-8 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.25 21h19.5m-18-18v18m2.25-18v18m13.5-18v18m2.25-18v18M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75m-3.75-16.5h3.75A2.25 2.25 0 0121 6v12a2.25 2.25 0 01-2.25 2.25h-3.75m-16.5-18h3.75A2.25 2.25 0 016 6v12a2.25 2.25 0 01-2.25 2.25H2.25A2.25 2.25 0 010 18V6a2.25 2.25 0 012.25-2.25z"
									/>
								</svg>
							</div>
							<h3 class="font-serif text-2xl font-bold text-blue-50">Enterprise Companies</h3>
							<p class="mt-4 leading-7 text-blue-200">
								Specialized expertise for complex enterprise projects. Whether you need advanced 3D
								visualizations, performance optimization, or integration with legacy systems, I
								bring the deep technical knowledge to get it done right.
							</p>
							<ul class="mt-6 space-y-2 text-blue-300">
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-red-400"></span>
									Complex system integration and optimization
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-red-400"></span>
									Advanced 3D and WebGL implementations
								</li>
								<li class="flex items-center">
									<span class="mr-3 h-2 w-2 rounded-full bg-red-400"></span>
									Performance audits and scalability solutions
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="bg-white px-4 py-24 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-3xl">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Let's Build Something Amazing
					</h2>
					<p class="mt-6 text-xl leading-8 text-blue-800">
						Ready to discuss your project? Send me a message and let's explore how we can bring your
						technical vision to life.
					</p>
				</div>

				<form class="mt-16 space-y-8">
					<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
						<div>
							<label for="name" class="block text-sm font-medium text-blue-950">Name</label>
							<div class="mt-2">
								<input
									type="text"
									name="name"
									id="name"
									required
									class="block w-full rounded-xl border-0 px-4 py-3 text-blue-950 shadow-sm ring-1 ring-blue-300 ring-inset placeholder:text-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
									placeholder="Your name"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-blue-950">Email</label>
							<div class="mt-2">
								<input
									type="email"
									name="email"
									id="email"
									required
									class="block w-full rounded-xl border-0 px-4 py-3 text-blue-950 shadow-sm ring-1 ring-blue-300 ring-inset placeholder:text-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
									placeholder="your@email.com"
								/>
							</div>
						</div>
					</div>

					<div>
						<label for="company" class="block text-sm font-medium text-blue-950">Company</label>
						<div class="mt-2">
							<input
								type="text"
								name="company"
								id="company"
								class="block w-full rounded-xl border-0 px-4 py-3 text-blue-950 shadow-sm ring-1 ring-blue-300 ring-inset placeholder:text-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
								placeholder="Your company (optional)"
							/>
						</div>
					</div>

					<div>
						<label for="project-type" class="block text-sm font-medium text-blue-950"
							>Project Type</label
						>
						<div class="mt-2">
							<select
								id="project-type"
								name="project-type"
								class="block w-full rounded-xl border-0 px-4 py-3 text-blue-950 shadow-sm ring-1 ring-blue-300 ring-inset focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
							>
								<option>Select a project type</option>
								<option>Full-Stack Web Development</option>
								<option>WebGL/3D Visualization</option>
								<option>Technical Leadership & Consulting</option>
								<option>Performance Optimization</option>
								<option>System Architecture</option>
								<option>Other</option>
							</select>
						</div>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-blue-950"
							>Project Details</label
						>
						<div class="mt-2">
							<textarea
								name="message"
								id="message"
								rows="6"
								required
								class="block w-full rounded-xl border-0 px-4 py-3 text-blue-950 shadow-sm ring-1 ring-blue-300 ring-inset placeholder:text-blue-400 focus:ring-2 focus:ring-blue-600 focus:ring-inset sm:text-sm sm:leading-6"
								placeholder="Tell me about your project, timeline, and any specific technical requirements..."
							></textarea>
						</div>
					</div>

					<div class="text-center">
						<button
							type="submit"
							class="inline-flex items-center rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
						>
							Send Message
							<svg
								class="ml-2 h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
								/>
							</svg>
						</button>
					</div>
				</form>
			</div>
		</section>
	</main>

	<footer class="bg-blue-950 px-4 py-16 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-7xl">
			<div class="flex flex-col items-center justify-between gap-8 lg:flex-row">
				<div class="text-center lg:text-left">
					<h3 class="mb-2 font-serif text-xl font-bold text-blue-50">Alex Lende</h3>
					<p class="text-blue-300">Principal Software Engineer & Technical Consultant</p>
				</div>

				<div class="flex items-center space-x-6">
					<a
						href="https://github.com/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on GitHub"
						class="text-blue-300 transition-colors hover:text-blue-100"
					>
						<Github class="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on LinkedIn"
						class="text-blue-300 transition-colors hover:text-blue-100"
					>
						<Linkedin class="h-6 w-6" />
					</a>
					<a
						href="https://wellfound.com/u/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on Wellfound"
						class="text-blue-300 transition-colors hover:text-blue-100"
					>
						<Briefcase class="h-6 w-6" />
					</a>
				</div>
			</div>

			<div class="mt-12 border-t border-blue-800 pt-8">
				<div
					class="flex flex-col items-center justify-between gap-4 text-sm text-blue-400 lg:flex-row"
				>
					<p>
						© Copyright 2017-{new Date().getFullYear()} Alex Lende. All rights reserved.
					</p>
					<p>
						<a
							href="https://github.com/ajlende/ajlende.github.io/tree/develop"
							class="transition-colors hover:text-blue-200">Source code</a
						>
						available under the
						<a
							href="http://opensource.org/licenses/mit-license.php"
							class="transition-colors hover:text-blue-200">MIT license</a
						>.
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>
