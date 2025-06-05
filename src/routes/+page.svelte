<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Logo from './Logo.svelte';

	import { starPoints } from '$lib/stars';

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
	let smallStars = $derived(starPoints(80, radius));
	let mediumStars = $derived(starPoints(40, radius));
	let largeStars = $derived(starPoints(20, radius));
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-red-50">
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
				<div class="flex items-center space-x-4 md:space-x-6">
					<a href="/" class="text-lg font-semibold text-blue-50 hover:text-blue-400">Alex Lende</a>
					<a
						href="#services"
						on:click={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Services
					</a>
					<a
						href="#skills"
						on:click={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Skills
					</a>
					<a
						href="#portfolio"
						on:click={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Portfolio
					</a>
					<a
						href="#contact"
						on:click={scrollToSection}
						class="text-sm text-blue-50 transition-colors hover:text-blue-400"
					>
						Contact
					</a>
				</div>
				<div class="flex items-center space-x-4">
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

	<main class="flex-1 bg-red-50">
		<section id="services" class="bg-red-50 py-24 text-red-900">
			<div class="mx-auto max-w-4xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl font-bold">Services</h3>
				<p class="mb-6 text-lg">
					Principal software engineer specializing in interactive web applications and 3D
					experiences. I help startups and companies bring ambitious ideas to life on the web.
				</p>
				<ul class="grid gap-6 text-lg md:grid-cols-2">
					<li class="rounded-xl bg-red-100/60 p-6 shadow-lg">
						Custom Web Applications (React, TypeScript)
					</li>
					<li class="rounded-xl bg-red-100/60 p-6 shadow-lg">
						Interactive 3D Experiences (three.js, WebGL)
					</li>
					<li class="rounded-xl bg-red-100/60 p-6 shadow-lg">Data Visualization & Dashboards</li>
					<li class="rounded-xl bg-red-100/60 p-6 shadow-lg">
						UI Engineering & Performance Optimization
					</li>
					<li class="rounded-xl bg-red-100/60 p-6 shadow-lg">Technical Consulting & Prototyping</li>
				</ul>
			</div>
		</section>

		<section id="skills" class="bg-red-100 py-24 text-red-900">
			<div class="mx-auto max-w-4xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl font-bold">Skills & Technologies</h3>
				<ul class="flex list-none flex-wrap justify-center gap-4 text-lg">
					<li class="rounded-full bg-red-200/60 px-5 py-2">React</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">TypeScript</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">three.js</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">WebGL</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">JavaScript</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">HTML/CSS</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">SVG</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">D3</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">Node.js</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">Python</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">UI/UX</li>
					<li class="rounded-full bg-red-200/60 px-5 py-2">Accessibility</li>
				</ul>
			</div>
		</section>

		<section id="portfolio" class="bg-red-800 py-24 text-red-50">
			<div class="mx-auto max-w-5xl px-4">
				<h3 class="mb-10 text-center font-serif text-3xl font-bold">Portfolio</h3>
				<div class="grid gap-8 md:grid-cols-2">
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl font-bold">DesignerTies</h4>
						<p class="text-base">
							3D dental braces customization tool for orthodontists and patients. (three.js, React)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl font-bold">WordPress Media Editor</h4>
						<p class="text-base">
							Advanced media editing features for WordPress core, including SVG filters and aspect
							ratio tools. (SVG, React)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl font-bold">Virtual Reality Health Demo</h4>
						<p class="text-base">
							Real-time data visualization in VR for healthcare. (WebGL, Python)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl font-bold">Procedural Soundtrack Visualization</h4>
						<p class="text-base">Interactive hospital data visualized with music. (D3, React)</p>
					</div>
				</div>
			</div>
		</section>

		<section id="contact" class="bg-red-900 py-24 text-red-50">
			<div class="mx-auto max-w-xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl font-bold">Contact</h3>
				<form
					class="flex flex-col gap-4 text-left"
					name="contact"
					method="POST"
					data-netlify="true"
				>
					<input type="hidden" name="form-name" value="contact" />
					<label class="font-medium"
						>Name
						<input
							class="mt-1 w-full rounded-lg border border-red-300 bg-white/80 px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
							type="text"
							name="name"
							required
						/>
					</label>
					<label class="font-medium"
						>Email
						<input
							class="mt-1 w-full rounded-lg border border-red-300 bg-white/80 px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
							type="email"
							name="email"
							required
						/>
					</label>
					<label class="font-medium"
						>Message
						<textarea
							class="mt-1 w-full rounded-lg border border-red-300 bg-white/80 px-4 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
							name="message"
							rows="5"
							required
						></textarea>
					</label>
					<button
						class="mt-4 rounded-lg bg-red-700 px-6 py-3 font-semibold text-red-50 shadow transition-colors hover:bg-red-800"
						type="submit">Send Message</button
					>
				</form>
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
