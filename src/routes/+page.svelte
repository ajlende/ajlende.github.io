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

<header>
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

<main>
	<section id="about">
		<div>
			<h2>Building Modern Web Experiences</h2>
			<p>
				I'm a principal software engineer with over 10 years of experience building sophisticated
				web applications, interactive 3D experiences, and scalable technical solutions. I've
				contributed to open source projects reaching millions of users and led development teams at
				major tech companies.
			</p>
			<div>
				<a href="#portfolio" onclick={scrollToSection}>
					View My Work
					<ArrowRight />
				</a>
			</div>
			<div>
				<div>
					<Zap />
					<h3>Open Source Contributor</h3>
					<p>
						Contributing to major open source projects like WordPress Gutenberg, with features used
						by millions of developers worldwide.
					</p>
				</div>
				<div>
					<Globe />
					<h3>Full-Stack Development</h3>
					<p>
						Expert in modern web technologies from React and TypeScript frontends to Node.js
						backends and cloud infrastructure.
					</p>
				</div>
				<div>
					<Eye />
					<h3>3D & WebGL</h3>
					<p>
						Specialized in creating immersive 3D experiences and data visualizations using Three.js,
						WebGL, and custom shaders.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="expertise">
		<div>
			<div>
				<h2>Technical Expertise</h2>
				<p>Core technologies and specializations I work with</p>
			</div>

			<div>
				<div>
					<Code />
					<h3>Modern Web Development</h3>
					<p>
						Extensive experience with modern JavaScript frameworks and full-stack development. I
						build responsive, accessible web applications with clean architectures that scale from
						prototype to production.
					</p>
					<ul>
						<li>React</li>
						<li>TypeScript</li>
						<li>Node.js</li>
						<li>PostgreSQL</li>
					</ul>
				</div>

				<div>
					<Cpu />
					<h3>3D Graphics & Visualization</h3>
					<p>
						Specialized in creating interactive 3D experiences and data visualizations for the web.
						From enterprise dashboards to immersive AR/VR prototypes, I bring complex data and ideas
						to life through compelling visual experiences.
					</p>
					<ul>
						<li>Three.js</li>
						<li>WebGL</li>
						<li>GLSL</li>
						<li>AR/VR</li>
						<li>GLSL</li>
					</ul>
				</div>

				<div>
					<Users />
					<h3>Open Source & Community</h3>
					<p>
						Active contributor to major open source projects, particularly WordPress Gutenberg. I
						believe in building tools that empower developers and sharing knowledge through code,
						documentation, and community engagement.
					</p>
					<ul>
						<li>WordPress</li>
						<li>Open Source</li>
						<li>Mentoring</li>
						<li>Code Review</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="portfolio">
		<div>
			<div>
				<h2>Portfolio Highlights</h2>
				<p>Key projects that showcase technical excellence and innovation</p>
			</div>

			<div>
				<a href="/portfolio/gutenberg/">
					<div>
						<Palette />
						<div>WordPress Gutenberg</div>
					</div>
					<div>
						<h3>WordPress Block Editor</h3>
						<p>
							Led development of innovative media editing features for WordPress Gutenberg at
							Automattic, including advanced image tools and SVG filters affecting millions of users
							worldwide.
						</p>
						<div>
							<span>Open Source Impact</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/cerner-media-wall/">
					<div>
						<Database />
						<div>Artistic Data Visualization</div>
					</div>
					<div>
						<h3>Cerner Innovations Media Wall</h3>
						<p>
							Created abstract data visualizations at Cerner's Innovations campus, connecting 28
							unique data stories across 11 live data sources to inspire and inform.
						</p>
						<div>
							<span>Enterprise Scale</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/ar-vr-healthcare/">
					<div>
						<Eye />
						<div>AR/VR Innovation</div>
					</div>
					<div>
						<h3>Immersive Healthcare</h3>
						<p>
							Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health
							Conference, exploring cutting-edge applications of immersive technology in clinical
							settings.
						</p>
						<div>
							<span>Industry First</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/dental-configurator/">
					<div>
						<Cpu />
						<div>3D Customization</div>
					</div>
					<div>
						<h3>Dental Brace Configurator</h3>
						<p>
							Developed an interactive 3D mobile app, enabling real-time customization of dental
							braces with instant visual feedback for the perfect smile.
						</p>
						<div>
							<span>3D Innovation</span>
							<ArrowRight />
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<section id="experience">
		<div>
			<h2>Professional Experience</h2>
			<p>Building impactful solutions across different scales and industries</p>

			<div>
				<div>
					<h3>Open Source Impact</h3>
					<p>
						Contributing to WordPress Gutenberg at Automattic, where my work on media editing
						features and SVG filters reaches millions of users worldwide. I focus on creating tools
						that empower creators and developers globally.
					</p>
				</div>

				<div>
					<h3>Enterprise Innovation</h3>
					<p>
						Led cutting-edge projects at Cerner, including data visualization installations and
						pioneering AR/VR healthcare applications. Experienced in building solutions that operate
						at massive scale with strict reliability requirements.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="contact">
		<div>
			<div>
				<h2>Let's Connect</h2>
				<p>
					Interested in collaborating, discussing technology, or exploring opportunities? I'd love
					to hear from you.
				</p>
			</div>

			<div>
				<form
					method="post"
					action="https://forms.un-static.com/forms/9f08c765086e2a71f5c3bb696226ff2546c6382f"
				>
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name">Name</label>
							<input type="text" id="name" name="name" required placeholder="Your name" />
						</div>
						<div>
							<label for="email">Email</label>
							<input type="email" id="email" name="email" required placeholder="your@email.com" />
						</div>
					</div>

					<div>
						<label for="company">Company</label>
						<input type="text" id="company" name="company" placeholder="Your company (optional)" />
					</div>

					<div>
						<label for="subject">Subject</label>
						<select id="subject" name="subject">
							<option value="">What would you like to discuss?</option>
							<option value="collaboration">Collaboration Opportunity</option>
							<option value="open-source">Open Source Project</option>
							<option value="technical">Technical Discussion</option>
							<option value="job">Job Opportunity</option>
							<option value="other">General Inquiry</option>
						</select>
					</div>

					<div>
						<label for="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							required
							placeholder="Tell me more about what you'd like to discuss..."
						></textarea>
					</div>

					<button type="submit"> Send Message </button>
				</form>

				<div>
					Powered by <a rel="nofollow" href="https://un-static.com">Un-static Forms</a>
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
