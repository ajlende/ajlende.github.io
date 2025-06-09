<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Code from '@lucide/svelte/icons/code';
	import Layers from '@lucide/svelte/icons/layers';
	import Zap from '@lucide/svelte/icons/zap';
	import Users from '@lucide/svelte/icons/users';
	import Award from '@lucide/svelte/icons/award';
	import Eye from '@lucide/svelte/icons/eye';
	import Send from '@lucide/svelte/icons/send';
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
	let contactForm = $state({
		name: '',
		email: '',
		company: '',
		project: '',
		message: '',
		isSubmitting: false,
		isSubmitted: false
	});

	async function handleContactSubmit(event: Event) {
		event.preventDefault();
		contactForm.isSubmitting = true;

		// Simulate form submission (replace with actual form handling)
		await new Promise((resolve) => setTimeout(resolve, 1000));

		contactForm.isSubmitted = true;
		contactForm.isSubmitting = false;

		// Reset form after a delay
		setTimeout(() => {
			contactForm = {
				name: '',
				email: '',
				company: '',
				project: '',
				message: '',
				isSubmitting: false,
				isSubmitted: false
			};
		}, 3000);
	}
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
						href="#about"
						onclick={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						About
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
		<section id="services" class="bg-white py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 lg:text-5xl">
						Technical Excellence, Delivered
					</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl text-blue-800">
						I help startups and established companies build exceptional web applications with
						cutting-edge technology and modern development practices.
					</p>
				</div>

				<div class="mt-20 grid gap-12 lg:grid-cols-3">
					<div
						class="relative rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 p-8 shadow-lg transition-transform hover:scale-105"
					>
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white"
						>
							<Code class="h-6 w-6" />
						</div>
						<h3 class="mb-4 text-2xl font-bold text-blue-950">Full-Stack Development</h3>
						<p class="mb-6 text-blue-800">
							End-to-end web application development using modern frameworks like React, Svelte, and
							TypeScript. From MVP to production-scale applications.
						</p>
						<ul class="space-y-2 text-sm text-blue-700">
							<li>• React, Svelte, and Vue.js applications</li>
							<li>• Node.js and Python backends</li>
							<li>• Database design and optimization</li>
							<li>• API development and integration</li>
						</ul>
					</div>

					<div
						class="relative rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 shadow-lg transition-transform hover:scale-105"
					>
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-600 text-white"
						>
							<Eye class="h-6 w-6" />
						</div>
						<h3 class="mb-4 text-2xl font-bold text-yellow-950">WebGL & 3D Development</h3>
						<p class="mb-6 text-yellow-800">
							Immersive 3D experiences and data visualizations using WebGL, Three.js, and custom
							graphics programming. From interactive demos to production tools.
						</p>
						<ul class="space-y-2 text-sm text-yellow-700">
							<li>• WebGL and Three.js applications</li>
							<li>• 3D product configurators</li>
							<li>• AR/VR web experiences</li>
							<li>• Interactive data visualizations</li>
						</ul>
					</div>

					<div
						class="relative rounded-2xl bg-gradient-to-br from-red-50 to-red-100 p-8 shadow-lg transition-transform hover:scale-105"
					>
						<div
							class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white"
						>
							<Users class="h-6 w-6" />
						</div>
						<h3 class="mb-4 text-2xl font-bold text-red-950">Technical Leadership</h3>
						<p class="mb-6 text-red-800">
							Strategic technical guidance for growing teams. Architecture decisions, code reviews,
							mentoring, and establishing development best practices.
						</p>
						<ul class="space-y-2 text-sm text-red-700">
							<li>• Technical architecture and planning</li>
							<li>• Code review and quality standards</li>
							<li>• Team mentoring and knowledge transfer</li>
							<li>• DevOps and deployment optimization</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- Portfolio Section -->
		<section id="portfolio" class="bg-blue-50 py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-950 lg:text-5xl">
						Portfolio Highlights
					</h2>
					<p class="mx-auto mt-6 max-w-3xl text-xl text-blue-800">
						A selection of impactful projects spanning web applications, 3D experiences, and
						technical innovation.
					</p>
				</div>

				<div class="mt-20 grid gap-12 lg:grid-cols-2">
					<div class="rounded-2xl bg-white p-8 shadow-lg">
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white"
							>
								<Layers class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-blue-950">WordPress Gutenberg Editor</h3>
								<p class="font-medium text-blue-600">Automattic • 2019-2025</p>
							</div>
						</div>
						<p class="mb-6 text-blue-800">
							Led development of critical features in WordPress's block editor, including inline
							image cropping, SVG color filters, and aspect ratio tools. Worked on one of the web's
							most complex and widely-used applications.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">React</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
								>JavaScript</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">PHP</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">WordPress</span
							>
						</div>
					</div>

					<div class="rounded-2xl bg-white p-8 shadow-lg">
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-600 text-white"
							>
								<Award class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-blue-950">Healthcare Data Visualization</h3>
								<p class="font-medium text-blue-600">Cerner Corporation • 2016-2019</p>
							</div>
						</div>
						<p class="mb-6 text-blue-800">
							Built innovative data visualization platform connecting 11 different live data sources
							with 28 unique data stories. Created procedural soundtrack system driven by real-time
							hospital data.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">D3.js</span
							>
							<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">React</span
							>
							<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700"
								>Data Visualization</span
							>
							<span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700"
								>Real-time Data</span
							>
						</div>
					</div>

					<div class="rounded-2xl bg-white p-8 shadow-lg">
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white"
							>
								<Eye class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-blue-950">AR/VR Clinical Environments</h3>
								<p class="font-medium text-blue-600">Cerner Corporation • 2018-2019</p>
							</div>
						</div>
						<p class="mb-6 text-blue-800">
							Developed virtual reality training simulations and augmented reality clinical care
							environments. Created immersive experiences for medical staff training and patient
							care enhancement.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">WebGL</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">Three.js</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">VR/AR</span>
							<span class="rounded-full bg-red-100 px-3 py-1 text-sm text-red-700">Healthcare</span>
						</div>
					</div>

					<div class="rounded-2xl bg-white p-8 shadow-lg">
						<div class="mb-6 flex items-center gap-4">
							<div
								class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white"
							>
								<Zap class="h-6 w-6" />
							</div>
							<div>
								<h3 class="text-2xl font-bold text-blue-950">3D Dental Brace Configurator</h3>
								<p class="font-medium text-blue-600">DesignerTies • Contract Work</p>
							</div>
						</div>
						<p class="mb-6 text-blue-800">
							Built interactive 3D visualization tool for customizing dental braces. Real-time 3D
							rendering with material customization, color selection, and preview functionality for
							dental professionals.
						</p>
						<div class="flex flex-wrap gap-2">
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">Three.js</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">WebGL</span>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
								>3D Modeling</span
							>
							<span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
								>Healthcare Tech</span
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- About Section -->
		<section id="about" class="bg-white py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
					<div>
						<h2 class="font-serif text-4xl font-bold text-blue-950 lg:text-5xl">
							A Decade of Innovation
						</h2>
						<p class="mt-6 text-xl text-blue-800">
							Principal software engineer with 10+ years of experience building complex web
							applications, 3D experiences, and leading technical teams across global organizations.
						</p>
						<p class="mt-6 text-blue-700">
							I specialize in creating exceptional user experiences through cutting-edge technology.
							My expertise spans from architecting scalable web applications to developing immersive
							3D visualizations that solve real-world problems.
						</p>
						<p class="mt-6 text-blue-700">
							Having worked with distributed teams across global time zones at companies like
							Automattic, I understand the challenges of modern software development and bring both
							technical depth and leadership experience to every project.
						</p>

						<div class="mt-12 grid grid-cols-2 gap-8">
							<div>
								<div class="text-3xl font-bold text-blue-950">10+</div>
								<div class="text-blue-700">Years Experience</div>
							</div>
							<div>
								<div class="text-3xl font-bold text-blue-950">50+</div>
								<div class="text-blue-700">Projects Delivered</div>
							</div>
							<div>
								<div class="text-3xl font-bold text-blue-950">3</div>
								<div class="text-blue-700">Major Platforms</div>
							</div>
							<div>
								<div class="text-3xl font-bold text-blue-950">Global</div>
								<div class="text-blue-700">Remote Teams</div>
							</div>
						</div>
					</div>

					<div class="space-y-8">
						<div>
							<h3 class="mb-4 text-2xl font-bold text-blue-950">Technical Expertise</h3>
							<div class="space-y-4">
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-blue-700">Frontend Development</span>
										<span class="text-blue-600">Expert</span>
									</div>
									<div class="h-2 w-full rounded-full bg-blue-200">
										<div class="h-2 rounded-full bg-blue-600" style="width: 95%"></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-blue-700">WebGL & 3D Graphics</span>
										<span class="text-blue-600">Advanced</span>
									</div>
									<div class="h-2 w-full rounded-full bg-blue-200">
										<div class="h-2 rounded-full bg-blue-600" style="width: 90%"></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-blue-700">Backend Architecture</span>
										<span class="text-blue-600">Proficient</span>
									</div>
									<div class="h-2 w-full rounded-full bg-blue-200">
										<div class="h-2 rounded-full bg-blue-600" style="width: 85%"></div>
									</div>
								</div>
								<div>
									<div class="mb-1 flex justify-between text-sm">
										<span class="text-blue-700">Technical Leadership</span>
										<span class="text-blue-600">Expert</span>
									</div>
									<div class="h-2 w-full rounded-full bg-blue-200">
										<div class="h-2 rounded-full bg-blue-600" style="width: 90%"></div>
									</div>
								</div>
							</div>
						</div>

						<div>
							<h3 class="mb-4 text-2xl font-bold text-blue-950">Core Technologies</h3>
							<div class="flex flex-wrap gap-3">
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">TypeScript</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">React</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">Svelte</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">WebGL</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">Three.js</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">Node.js</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">Python</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">PostgreSQL</span>
								<span class="rounded-full bg-blue-100 px-4 py-2 text-blue-700">AWS</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section id="contact" class="bg-blue-950 py-24">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div class="text-center">
					<h2 class="font-serif text-4xl font-bold text-blue-50 lg:text-5xl">
						Let's Build Something Amazing
					</h2>
					<p class="mx-auto mt-6 max-w-2xl text-xl text-blue-200">
						Ready to bring your vision to life? I'm here to help you build exceptional web
						applications and 3D experiences that drive results.
					</p>
				</div>

				<div class="mt-16">
					{#if contactForm.isSubmitted}
						<div class="rounded-2xl bg-blue-800 p-8 text-center">
							<div
								class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-blue-50"
							>
								<Send class="h-8 w-8" />
							</div>
							<h3 class="mb-4 text-2xl font-bold text-blue-50">Thank You!</h3>
							<p class="text-blue-200">
								Your message has been sent successfully. I'll get back to you within 24 hours.
							</p>
						</div>
					{:else}
						<form onsubmit={handleContactSubmit} class="space-y-6">
							<div class="grid gap-6 sm:grid-cols-2">
								<div>
									<label for="name" class="mb-2 block text-sm font-medium text-blue-200">
										Name *
									</label>
									<input
										type="text"
										id="name"
										required
										bind:value={contactForm.name}
										disabled={contactForm.isSubmitting}
										class="w-full rounded-xl border border-blue-800 bg-blue-900 px-4 py-3 text-blue-50 placeholder:text-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
										placeholder="Your name"
									/>
								</div>
								<div>
									<label for="email" class="mb-2 block text-sm font-medium text-blue-200">
										Email *
									</label>
									<input
										type="email"
										id="email"
										required
										bind:value={contactForm.email}
										disabled={contactForm.isSubmitting}
										class="w-full rounded-xl border border-blue-800 bg-blue-900 px-4 py-3 text-blue-50 placeholder:text-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
										placeholder="your.email@company.com"
									/>
								</div>
							</div>

							<div class="grid gap-6 sm:grid-cols-2">
								<div>
									<label for="company" class="mb-2 block text-sm font-medium text-blue-200">
										Company
									</label>
									<input
										type="text"
										id="company"
										bind:value={contactForm.company}
										disabled={contactForm.isSubmitting}
										class="w-full rounded-xl border border-blue-800 bg-blue-900 px-4 py-3 text-blue-50 placeholder:text-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
										placeholder="Your company"
									/>
								</div>
								<div>
									<label for="project" class="mb-2 block text-sm font-medium text-blue-200">
										Project Type
									</label>
									<select
										id="project"
										bind:value={contactForm.project}
										disabled={contactForm.isSubmitting}
										class="w-full rounded-xl border border-blue-800 bg-blue-900 px-4 py-3 text-blue-50 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
									>
										<option value="">Select project type</option>
										<option value="full-stack">Full-Stack Development</option>
										<option value="3d-webgl">3D/WebGL Development</option>
										<option value="technical-leadership">Technical Leadership</option>
										<option value="consultation">Technical Consultation</option>
										<option value="other">Other</option>
									</select>
								</div>
							</div>

							<div>
								<label for="message" class="mb-2 block text-sm font-medium text-blue-200">
									Message *
								</label>
								<textarea
									id="message"
									rows="6"
									required
									bind:value={contactForm.message}
									disabled={contactForm.isSubmitting}
									class="w-full rounded-xl border border-blue-800 bg-blue-900 px-4 py-3 text-blue-50 placeholder:text-blue-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:outline-none"
									placeholder="Tell me about your project, timeline, and goals..."
								></textarea>
							</div>

							<div>
								<button
									type="submit"
									disabled={contactForm.isSubmitting}
									class="w-full rounded-xl bg-blue-600 px-8 py-4 font-semibold text-blue-50 transition-colors hover:bg-blue-500 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-blue-950 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
								>
									{#if contactForm.isSubmitting}
										Sending...
									{:else}
										Send Message
									{/if}
								</button>
							</div>
						</form>
					{/if}
				</div>
			</div>
		</section>
	</main>

	<footer class="bg-blue-950 py-12">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex flex-col items-center text-center text-blue-300">
				<div class="mb-6">
					<Logo />
				</div>
				<div class="space-y-2 text-sm">
					<p>
						Contents of this site are © Copyright 2017-{new Date().getFullYear()} Alex Lende. All rights
						reserved.
					</p>
					<p>
						<a
							href="https://github.com/ajlende/ajlende.github.io/tree/develop"
							class="text-blue-400 transition-colors hover:text-blue-300">Source code</a
						>
						is available under the
						<a
							href="http://opensource.org/licenses/mit-license.php"
							class="text-blue-400 transition-colors hover:text-blue-300">MIT license</a
						>.
					</p>
				</div>
			</div>
		</div>
	</footer>
</div>
