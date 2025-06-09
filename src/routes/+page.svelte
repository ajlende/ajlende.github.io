<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Code from '@lucide/svelte/icons/code';
	import Cube from '@lucide/svelte/icons/box';
	import Users from '@lucide/svelte/icons/users';
	import Zap from '@lucide/svelte/icons/zap';
	import Award from '@lucide/svelte/icons/award';
	import Mail from '@lucide/svelte/icons/mail';
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

	// Contact form state
	let formData = $state({
		name: '',
		email: '',
		company: '',
		message: ''
	});
	let isSubmitting = $state(false);
	let submitStatus = $state('');

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;

		// This would integrate with your preferred form handling service
		// For now, just simulate a submission
		setTimeout(() => {
			isSubmitting = false;
			submitStatus = 'success';
			formData = { name: '', email: '', company: '', message: '' };
		}, 1000);
	}
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

	<main class="flex-1">
		<!-- Services Section -->
		<section id="services" class="bg-blue-100 py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Consulting Services
					</h2>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-blue-800">
						Bringing deep technical expertise and proven leadership to help your team build
						exceptional digital experiences.
					</p>
				</div>

				<div class="mt-20 grid gap-8 lg:grid-cols-3">
					<div class="rounded-lg bg-white p-8 shadow-lg">
						<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
							<Code class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-4 text-xl font-semibold text-blue-950">Full-Stack Development</h3>
						<p class="text-blue-800">
							Modern web applications built with React, TypeScript, Node.js, and cutting-edge
							frameworks. From MVPs to enterprise-scale applications with focus on performance and
							maintainability.
						</p>
					</div>

					<div class="rounded-lg bg-white p-8 shadow-lg">
						<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600">
							<Cube class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-4 text-xl font-semibold text-blue-950">3D & WebGL Development</h3>
						<p class="text-blue-800">
							Interactive 3D experiences, data visualizations, and immersive web applications.
							Specialized in WebGL, Three.js, and real-time graphics optimization.
						</p>
					</div>

					<div class="rounded-lg bg-white p-8 shadow-lg">
						<div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-600">
							<Users class="h-6 w-6 text-white" />
						</div>
						<h3 class="mb-4 text-xl font-semibold text-blue-950">Technical Leadership</h3>
						<p class="text-blue-800">
							Team mentoring, architecture decisions, and process optimization. Help scale your
							development team and establish best practices for long-term success.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- Skills Section -->
		<section id="skills" class="bg-blue-50 py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Technical Expertise
					</h2>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-blue-800">
						10+ years of professional experience across the full spectrum of modern web development.
					</p>
				</div>

				<div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					<div class="text-center">
						<h3 class="mb-4 text-lg font-semibold text-blue-950">Frontend</h3>
						<ul class="space-y-2 text-blue-800">
							<li>React & TypeScript</li>
							<li>Svelte & SvelteKit</li>
							<li>WebGL & Three.js</li>
							<li>Web Audio API</li>
							<li>CSS & Tailwind</li>
						</ul>
					</div>

					<div class="text-center">
						<h3 class="mb-4 text-lg font-semibold text-blue-950">Backend</h3>
						<ul class="space-y-2 text-blue-800">
							<li>Node.js & Bun</li>
							<li>Python</li>
							<li>SQL & Databases</li>
							<li>REST & GraphQL</li>
							<li>PHP</li>
						</ul>
					</div>

					<div class="text-center">
						<h3 class="mb-4 text-lg font-semibold text-blue-950">Specialized</h3>
						<ul class="space-y-2 text-blue-800">
							<li>Data Visualization</li>
							<li>AR/VR Development</li>
							<li>Game Development</li>
							<li>Accessibility (A11y)</li>
							<li>Developer Experience</li>
						</ul>
					</div>

					<div class="text-center">
						<h3 class="mb-4 text-lg font-semibold text-blue-950">Tools & Process</h3>
						<ul class="space-y-2 text-blue-800">
							<li>Git & CI/CD</li>
							<li>Docker & AWS</li>
							<li>Webpack & Vite</li>
							<li>Jest & Testing</li>
							<li>Agile & Code Review</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="bg-white py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">Notable Work</h2>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-blue-800">
						Highlights from working with global teams and contributing to products used by millions.
					</p>
				</div>

				<div class="mt-20 grid gap-12 lg:grid-cols-2">
					<!-- Automattic -->
					<div class="flex flex-col">
						<div class="flex-1">
							<h3 class="mb-4 text-2xl font-semibold text-blue-950">WordPress Gutenberg Editor</h3>
							<p class="mb-6 text-blue-800">
								Led development of core editing features in WordPress's modern block editor, used by
								40%+ of all websites globally. Contributed to inline image cropping, SVG color
								filters, and aspect ratio tools.
							</p>
							<div class="mb-4 flex items-center">
								<Zap class="mr-2 h-5 w-5 text-yellow-600" />
								<span class="text-sm text-blue-700">Principal Software Engineer @ Automattic</span>
							</div>
						</div>
						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">React</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
								>JavaScript</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">WebGL</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">PHP</span>
						</div>
					</div>

					<!-- Cerner -->
					<div class="flex flex-col">
						<div class="flex-1">
							<h3 class="mb-4 text-2xl font-semibold text-blue-950">
								Healthcare Data Visualization
							</h3>
							<p class="mb-6 text-blue-800">
								Developed interactive data visualization platform connecting 11 different live data
								sources, creating unique patient care insights. Built procedural soundtrack system
								driven by hospital data.
							</p>
							<div class="mb-4 flex items-center">
								<Zap class="mr-2 h-5 w-5 text-yellow-600" />
								<span class="text-sm text-blue-700">Senior Software Engineer @ Cerner</span>
							</div>
						</div>
						<div class="mt-4 flex flex-wrap gap-2">
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">D3.js</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">WebGL</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">Web Audio</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-800">React</span>
						</div>
					</div>
				</div>

				<!-- Patents Section -->
				<div class="mt-20 border-t border-blue-200 pt-16">
					<div class="mb-12 text-center">
						<h3 class="mb-4 text-2xl font-semibold text-blue-950">Patent Portfolio</h3>
						<p class="text-blue-800">
							Innovation in healthcare technology, accessibility tools, and immersive experiences.
						</p>
					</div>

					<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						<div class="rounded-lg bg-blue-50 p-6 text-center">
							<Award class="mx-auto mb-3 h-8 w-8 text-blue-600" />
							<h4 class="mb-2 font-semibold text-blue-950">Rhythms of Life</h4>
							<p class="mb-2 text-sm text-blue-800">Web Audio API</p>
							<p class="text-xs text-blue-600">US11874870</p>
						</div>

						<div class="rounded-lg bg-red-50 p-6 text-center">
							<Award class="mx-auto mb-3 h-8 w-8 text-red-600" />
							<h4 class="mb-2 font-semibold text-blue-950">Virtual Clinical Care</h4>
							<p class="mb-2 text-sm text-blue-800">AR & Game Dev</p>
							<p class="text-xs text-blue-600">US11139071</p>
						</div>

						<div class="rounded-lg bg-yellow-50 p-6 text-center">
							<Award class="mx-auto mb-3 h-8 w-8 text-yellow-600" />
							<h4 class="mb-2 font-semibold text-blue-950">Health Simulator</h4>
							<p class="mb-2 text-sm text-blue-800">VR & Game Dev</p>
							<p class="text-xs text-blue-600">US11340692</p>
						</div>

						<div class="rounded-lg bg-blue-50 p-6 text-center">
							<Award class="mx-auto mb-3 h-8 w-8 text-blue-600" />
							<h4 class="mb-2 font-semibold text-blue-950">Icon Accessibility</h4>
							<p class="mb-2 text-sm text-blue-800">A11y & DevEx</p>
							<p class="text-xs text-blue-600">US10565739</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="bg-blue-100 py-24">
			<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 sm:text-5xl">
						Start a Conversation
					</h2>
					<p class="mx-auto mt-6 max-w-2xl text-lg text-blue-800">
						Ready to discuss your project? Let's explore how we can work together to bring your
						vision to life.
					</p>
				</div>

				<div class="mt-16">
					{#if submitStatus === 'success'}
						<div class="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
							<div
								class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100"
							>
								<svg
									class="h-6 w-6 text-green-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 13l4 4L19 7"
									></path>
								</svg>
							</div>
							<h3 class="mb-2 text-lg font-semibold text-green-900">Message Sent!</h3>
							<p class="text-green-700">Thanks for reaching out. I'll get back to you soon.</p>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="rounded-lg bg-white p-8 shadow-lg">
							<div class="grid gap-6 md:grid-cols-2">
								<div>
									<label for="name" class="mb-2 block text-sm font-medium text-blue-950">Name</label
									>
									<input
										type="text"
										id="name"
										bind:value={formData.name}
										required
										class="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label for="email" class="mb-2 block text-sm font-medium text-blue-950"
										>Email</label
									>
									<input
										type="email"
										id="email"
										bind:value={formData.email}
										required
										class="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>

							<div class="mt-6">
								<label for="company" class="mb-2 block text-sm font-medium text-blue-950"
									>Company (Optional)</label
								>
								<input
									type="text"
									id="company"
									bind:value={formData.company}
									class="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
								/>
							</div>

							<div class="mt-6">
								<label for="message" class="mb-2 block text-sm font-medium text-blue-950"
									>Project Details</label
								>
								<textarea
									id="message"
									rows="6"
									bind:value={formData.message}
									required
									placeholder="Tell me about your project, timeline, and any specific requirements..."
									class="w-full rounded-lg border border-blue-200 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
								></textarea>
							</div>

							<div class="mt-8">
								<button
									type="submit"
									disabled={isSubmitting}
									class="w-full rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
								>
									{#if isSubmitting}
										<div class="flex items-center justify-center">
											<svg
												class="mr-3 -ml-1 h-5 w-5 animate-spin text-white"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													class="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													stroke-width="4"
												></circle>
												<path
													class="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
											Sending...
										</div>
									{:else}
										<div class="flex items-center justify-center">
											<Mail class="mr-2 h-5 w-5" />
											Send Message
										</div>
									{/if}
								</button>
							</div>
						</form>
					{/if}
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
