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

<div class="flex min-h-screen flex-col">
	<header class="bg-blue-100">
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
						href="#skills"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Skills
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
				<Logo />
				<h1 class="font-serif text-9xl font-bold text-blue-50 drop-shadow-lg">Alex Lende</h1>
				<div class="font-serif text-4xl text-blue-50 drop-shadow">Software Engineer</div>
			</div>
		</div>
	</header>

	<main class="flex-1 bg-blue-100">
		<!-- Services Section -->
		<section id="services" class="bg-blue-50 py-20">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">Services</h2>
					<p class="mx-auto mt-4 max-w-3xl text-xl text-blue-700">
						I help organizations build exceptional web experiences with cutting-edge technology and
						thoughtful engineering practices.
					</p>
				</div>
				<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-blue-200">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
								/>
							</svg>
						</div>
						<h3 class="mt-6 font-serif text-xl font-semibold text-blue-900">
							Full-Stack Development
						</h3>
						<p class="mt-3 text-blue-700">
							End-to-end web application development using modern frameworks like React, Svelte, and
							Node.js. From MVPs to enterprise-scale applications.
						</p>
					</div>
					<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-blue-200">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V1a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V4z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 font-serif text-xl font-semibold text-blue-900">WebGL & 3D Graphics</h3>
						<p class="mt-3 text-blue-700">
							Interactive 3D experiences and data visualizations using WebGL, Three.js, and custom
							shaders. Perfect for product configurators and immersive interfaces.
						</p>
					</div>
					<div class="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-blue-200">
						<div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
							<svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</div>
						<h3 class="mt-6 font-serif text-xl font-semibold text-blue-900">
							Technical Leadership
						</h3>
						<p class="mt-3 text-blue-700">
							Strategic guidance for engineering teams, architecture decisions, and mentoring
							developers. Helping startups scale and enterprises innovate.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section id="skills" class="bg-white py-20">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">
						Technical Expertise
					</h2>
					<p class="mx-auto mt-4 max-w-3xl text-xl text-blue-700">
						A decade of experience with modern web technologies and emerging platforms.
					</p>
				</div>
				<div class="mt-16 grid gap-8 lg:grid-cols-3">
					<div class="space-y-6">
						<h3 class="font-serif text-2xl font-semibold text-blue-900">Frontend</h3>
						<div class="flex flex-wrap gap-3">
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>JavaScript</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>TypeScript</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>React</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Svelte</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>WebGL</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Three.js</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>CSS</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>TailwindCSS</span
							>
						</div>
					</div>
					<div class="space-y-6">
						<h3 class="font-serif text-2xl font-semibold text-blue-900">Backend & Tools</h3>
						<div class="flex flex-wrap gap-3">
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Node.js</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Python</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>PHP</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>SQL</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Git</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Docker</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>AWS</span
							>
							<span class="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800"
								>Webpack</span
							>
						</div>
					</div>
					<div class="space-y-6">
						<h3 class="font-serif text-2xl font-semibold text-blue-900">Specializations</h3>
						<div class="flex flex-wrap gap-3">
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>Data Visualization</span
							>
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>AR/VR</span
							>
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>Performance</span
							>
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>Accessibility</span
							>
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>WordPress</span
							>
							<span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-800"
								>Team Mentoring</span
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="bg-blue-50 py-20">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">Featured Work</h2>
					<p class="mx-auto mt-4 max-w-3xl text-xl text-blue-700">
						Highlights from building complex web applications and interactive experiences for
						millions of users.
					</p>
				</div>
				<div class="mt-16 space-y-16">
					<!-- Automattic/WordPress -->
					<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div class="space-y-6">
							<div class="flex items-center space-x-3">
								<h3 class="font-serif text-2xl font-semibold text-blue-900">
									WordPress Block Editor
								</h3>
								<span class="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white"
									>Automattic</span
								>
							</div>
							<p class="text-lg text-blue-700">
								Led development of advanced editing features for WordPress's Gutenberg editor,
								including inline image cropping, SVG color filters, and aspect ratio tools. Explored
								WebGL-powered block plugins for 60fps animations and rich content experiences.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">React</span>
								<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">WebGL</span>
								<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">WordPress</span>
								<span class="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800">Performance</span>
							</div>
						</div>
						<div class="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center">
							<div class="text-white">
								<div class="text-4xl font-bold">43%</div>
								<div class="text-blue-100">of the web uses WordPress</div>
								<div class="mt-4 text-sm text-blue-200">Contributing to the most popular CMS</div>
							</div>
						</div>
					</div>

					<!-- Cerner Data Visualization -->
					<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div
							class="order-2 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 text-center lg:order-1"
						>
							<div class="text-white">
								<div class="text-4xl font-bold">28</div>
								<div class="text-yellow-100">unique data stories</div>
								<div class="mt-4 text-sm text-yellow-200">
									Connecting 11 different live data sources
								</div>
							</div>
						</div>
						<div class="order-1 space-y-6 lg:order-2">
							<div class="flex items-center space-x-3">
								<h3 class="font-serif text-2xl font-semibold text-blue-900">
									Healthcare Data Platform
								</h3>
								<span class="rounded-full bg-yellow-600 px-3 py-1 text-xs font-medium text-white"
									>Cerner</span
								>
							</div>
							<p class="text-lg text-blue-700">
								Built an abstract data visualization platform connecting 11 different live data
								sources into 28 unique interactive stories. Also created the first Virtual Reality
								demo showcasing procedural healthcare soundtracks driven by patient data.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">D3.js</span>
								<span class="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800"
									>Data Visualization</span
								>
								<span class="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">VR</span>
								<span class="rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800"
									>Real-time Data</span
								>
							</div>
						</div>
					</div>

					<!-- DesignerTies 3D -->
					<div class="grid gap-12 lg:grid-cols-2 lg:items-center">
						<div class="space-y-6">
							<div class="flex items-center space-x-3">
								<h3 class="font-serif text-2xl font-semibold text-blue-900">
									3D Dental Visualization
								</h3>
								<span class="rounded-full bg-red-600 px-3 py-1 text-xs font-medium text-white"
									>DesignerTies</span
								>
							</div>
							<p class="text-lg text-blue-700">
								Developed an interactive 3D configurator for customizing dental braces, allowing
								patients to visualize different options in real-time. Built with WebGL for smooth
								performance across devices and browsers.
							</p>
							<div class="flex flex-wrap gap-2">
								<span class="rounded bg-red-100 px-2 py-1 text-xs text-red-800">Three.js</span>
								<span class="rounded bg-red-100 px-2 py-1 text-xs text-red-800">WebGL</span>
								<span class="rounded bg-red-100 px-2 py-1 text-xs text-red-800">3D Modeling</span>
								<span class="rounded bg-red-100 px-2 py-1 text-xs text-red-800"
									>Product Configurator</span
								>
							</div>
						</div>
						<div class="rounded-2xl bg-gradient-to-br from-red-600 to-red-800 p-8 text-center">
							<div class="text-white">
								<div class="text-4xl font-bold">3D</div>
								<div class="text-red-100">interactive configurator</div>
								<div class="mt-4 text-sm text-red-200">
									Real-time customization and visualization
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="bg-white py-20">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-900 sm:text-5xl">
						Let's Build Something Amazing
					</h2>
					<p class="mx-auto mt-4 max-w-2xl text-xl text-blue-700">
						Ready to bring your vision to life? Whether you need technical leadership, full-stack
						development, or cutting-edge 3D experiences, I'd love to help.
					</p>
				</div>
				<div class="mt-12">
					<form class="space-y-6">
						<div class="grid gap-6 sm:grid-cols-2">
							<div>
								<label for="name" class="block text-sm font-medium text-blue-900">Name</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									class="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
							</div>
							<div>
								<label for="email" class="block text-sm font-medium text-blue-900">Email</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
								/>
							</div>
						</div>
						<div>
							<label for="company" class="block text-sm font-medium text-blue-900">Company</label>
							<input
								type="text"
								id="company"
								name="company"
								class="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							/>
						</div>
						<div>
							<label for="project-type" class="block text-sm font-medium text-blue-900"
								>Project Type</label
							>
							<select
								id="project-type"
								name="project-type"
								class="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							>
								<option value="">Select a project type</option>
								<option value="full-stack">Full-Stack Development</option>
								<option value="3d-webgl">3D/WebGL Development</option>
								<option value="technical-leadership">Technical Leadership</option>
								<option value="consulting">Strategic Consulting</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div>
							<label for="message" class="block text-sm font-medium text-blue-900"
								>Project Details</label
							>
							<textarea
								id="message"
								name="message"
								rows="4"
								required
								placeholder="Tell me about your project, timeline, and any specific requirements..."
								class="mt-1 block w-full rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
							></textarea>
						</div>
						<div class="text-center">
							<button
								type="submit"
								class="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	</main>

	<footer class="mt-auto bg-red-950 text-red-50">
		<div class="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="text-sm">
				<p>
					Contents of this site are © Copyright 2017-{new Date().getFullYear()} Alex Lende. All rights
					reserved.
				</p>
				<p>
					<a href="https://github.com/ajlende/ajlende.github.io/tree/develop">Source code</a> is
					available under the
					<a href="http://opensource.org/licenses/mit-license.php">MIT license</a>.
				</p>
			</div>
		</div>
	</footer>
</div>
