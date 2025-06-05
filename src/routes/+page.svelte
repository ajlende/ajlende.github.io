<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Logo from './Logo.svelte';

	import { starPoints } from '$lib/stars';

	let clientWidth = $state(0);
	let clientHeight = $state(0);

	// Match Tailwind v4 breakpoints (except for 640px)
	let width = $derived(Math.ceil(clientWidth / 256) * 256);
	let height = $derived(Math.ceil(clientHeight / 256) * 256);

	let radius = $derived(Math.ceil(Math.sqrt((width / 2) * (width / 2) + height * height)));
	let diameter = $derived(radius * 2);

	let viewBox = $derived(`${-radius} ${-radius} ${diameter} ${diameter}`);
	let smallStars = $derived(starPoints(40, radius));
	let mediumStars = $derived(starPoints(20, radius));
	let largeStars = $derived(starPoints(10, radius));
</script>

<div class="flex min-h-screen flex-col">
	<header class="bg-blue-900">
		<div
			class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800"
			style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%);"
		>
			<nav
				class="absolute top-0 right-0 left-0 mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
			>
				<div class="flex items-center space-x-4 md:space-x-6">
					<a href="/" class="text-lg font-semibold text-blue-50"> Alex Lende </a>
					<a href="/blog" class="text-sm text-blue-50 transition-colors hover:text-blue-100">
						Blog
					</a>
					<a href="/projects" class="text-sm text-blue-50 transition-colors hover:bg-blue-300">
						Projects
					</a>
					<a href="/contact" class="text-sm text-blue-50 transition-colors hover:bg-blue-300">
						Contact
					</a>
				</div>
				<div class="flex items-center space-x-4">
					<a
						href="https://github.com/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on GitHub"
						class="text-blue-50 transition-colors hover:bg-blue-300"
					>
						<Github class="h-6 w-6" />
					</a>
					<a
						href="https://linkedin.com/in/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on LinkedIn"
						class="text-blue-50 transition-colors hover:bg-blue-300"
					>
						<Linkedin class="h-6 w-6" />
					</a>
					<a
						href="https://wellfound.com/u/ajlende"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Alex Lende on Wellfound"
						class="text-blue-50 transition-colors hover:bg-blue-300"
					>
						<Briefcase class="h-6 w-6" />
					</a>
				</div>
			</nav>
			<div
				bind:clientWidth
				bind:clientHeight
				class="pointer-events-none absolute h-full w-full overflow-hidden"
			>
				<svg
					class="absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each largeStars as star}<circle cx={star.x} cy={star.y} r={3} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each mediumStars as star}<circle cx={star.x} cy={star.y} r={2} />{/each}
				</svg>
				<svg
					class="absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] fill-white"
					{viewBox}
					width={diameter}
					height={diameter}
				>
					{#each smallStars as star}<circle cx={star.x} cy={star.y} r={1} />{/each}
				</svg>
			</div>
			<div class="flex flex-col items-center justify-center gap-4 text-center">
				<Logo />
				<h1 class="font-serif text-9xl text-blue-50 drop-shadow-lg">Alex Lende</h1>
				<div class="font-serif text-4xl text-blue-50 drop-shadow">
					Building the next frontier of web experiences
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1 bg-red-50">
		<p class="mt-4 max-w-2xl text-lg font-light text-blue-100">
			Principal software engineer specializing in interactive web applications and 3D experiences. I
			help startups and companies bring ambitious ideas to life on the web.
		</p>
		<section class="bg-red-50 py-24 text-red-900">
			<div class="mx-auto max-w-4xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl">Services</h3>
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

		<section class="bg-red-100 py-24 text-red-900">
			<div class="mx-auto max-w-4xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl">Skills & Technologies</h3>
				<div class="flex flex-wrap justify-center gap-4 text-lg">
					<span class="rounded-full bg-red-200/60 px-5 py-2">React</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">TypeScript</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">three.js</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">WebGL</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">JavaScript</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">HTML/CSS</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">SVG</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">D3</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">Node.js</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">Python</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">UI/UX</span>
					<span class="rounded-full bg-red-200/60 px-5 py-2">Accessibility</span>
				</div>
			</div>
		</section>

		<section class="bg-red-800 py-24 text-red-50">
			<div class="mx-auto max-w-5xl px-4">
				<h3 class="mb-10 text-center font-serif text-3xl">Portfolio</h3>
				<div class="grid gap-8 md:grid-cols-2">
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl">DesignerTies</h4>
						<p class="text-base">
							3D dental braces customization tool for orthodontists and patients. (three.js, React)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl">WordPress Media Editor</h4>
						<p class="text-base">
							Advanced media editing features for WordPress core, including SVG filters and aspect
							ratio tools. (SVG, React)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl">Virtual Reality Health Demo</h4>
						<p class="text-base">
							Real-time data visualization in VR for healthcare. (WebGL, Python)
						</p>
					</div>
					<div class="flex flex-col gap-2 rounded-xl bg-red-900/80 p-6 shadow-xl">
						<h4 class="font-serif text-2xl">Procedural Soundtrack Visualization</h4>
						<p class="text-base">Interactive hospital data visualized with music. (D3, React)</p>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-red-900 py-24 text-red-50">
			<div class="mx-auto max-w-xl px-4 text-center">
				<h3 class="mb-6 font-serif text-3xl">Contact</h3>
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
