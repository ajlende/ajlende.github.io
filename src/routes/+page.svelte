<script lang="ts">
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
	import Logo from './Logo.svelte';
	import Layers from '@lucide/svelte/icons/layers';
	import Box from '@lucide/svelte/icons/box';
	import Users from '@lucide/svelte/icons/users';

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
		<section id="services" class="py-20 sm:py-32">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="text-base leading-7 font-semibold text-blue-600">Services</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						I build digital solutions
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						From robust web applications to immersive 3D experiences, I bring ideas to life with
						code. I partner with startups needing technical vision and with established companies
						seeking to accelerate their projects.
					</p>
				</div>
				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
								<Layers class="h-5 w-5 flex-none text-blue-600" />
								Full-Stack Development
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">
									I build resilient, scalable, and performant web applications from the ground up.
									I'm comfortable working across the entire stack, from database design and API
									development to creating intuitive and responsive user interfaces.
								</p>
							</dd>
						</div>
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
								<Box class="h-5 w-5 flex-none text-blue-600" />
								3D & WebGL Development
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">
									I specialize in creating interactive 3D graphics for the web. Leveraging
									technologies like WebGL and Three.js, I build product configurators, data
									visualizations, and other immersive experiences that run directly in the browser.
								</p>
							</dd>
						</div>
						<div class="flex flex-col">
							<dt class="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
								<Users class="h-5 w-5 flex-none text-blue-600" />
								Technical Leadership
							</dt>
							<dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
								<p class="flex-auto">
									For startups and growing teams, I provide technical guidance and leadership. This
									includes architectural planning, establishing best practices for code quality and
									development workflows, and mentoring team members to foster growth and
									collaboration.
								</p>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</section>

		<section id="skills" class="bg-blue-50 py-20 sm:py-32">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="text-base leading-7 font-semibold text-blue-600">My Toolbox</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Technologies & Expertise
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						With over a decade of experience, I've had the opportunity to work with a diverse range
						of technologies. Here are some of the tools and skills I use to build high-quality
						software.
					</p>
				</div>
				<div class="mx-auto mt-16 max-w-7xl">
					<div class="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
						<div>
							<h3 class="text-base leading-7 font-semibold text-gray-900">Languages</h3>
							<p class="mt-4 text-gray-600">
								JavaScript, TypeScript, HTML, CSS, SVG, SQL, PHP, Python, WebGL
							</p>
						</div>
						<div>
							<h3 class="text-base leading-7 font-semibold text-gray-900">Frameworks</h3>
							<p class="mt-4 text-gray-600">
								Svelte, React, Node.js, Three.js, Deno, Melt UI, TailwindCSS, Cesium.js
							</p>
						</div>
						<div>
							<h3 class="text-base leading-7 font-semibold text-gray-900">Tools</h3>
							<p class="mt-4 text-gray-600">
								Git, GitHub, Vite, Bun, ESLint, Prettier, Storybook, Figma, Notion
							</p>
						</div>
						<div>
							<h3 class="text-base leading-7 font-semibold text-gray-900">Expertise</h3>
							<p class="mt-4 text-gray-600">
								Technical Leadership, System Design, Data Visualization, UI/UX, Debugging, Code
								Review
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section id="portfolio" class="py-20 sm:py-32">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<h2 class="text-base leading-7 font-semibold text-blue-600">Portfolio</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Featured Work
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Here are a few projects I'm proud to have been a part of. They showcase my ability to
						tackle complex problems and deliver high-quality, user-centric solutions.
					</p>
				</div>
				<div
					class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
				>
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							<img
								src="https://placehold.co/600x400/0B1120/79DCDB?text=Gutenberg"
								alt="WordPress Gutenberg Editor"
								class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
						</div>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<span
									class="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600"
									>Web Application</span
								>
							</div>
							<div class="group relative">
								<h3 class="mt-3 text-lg leading-6 font-semibold text-gray-900">
									WordPress Gutenberg Editor
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									At Automattic, I contributed to WordPress's core block editor, Gutenberg. I led
									the development of new media editing features, including inline image cropping and
									SVG color filters, improving the content creation experience for millions of
									users.
								</p>
							</div>
						</div>
					</article>
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							<img
								src="https://placehold.co/600x400/0B1120/F08D47?text=Data+Viz"
								alt="Cerner Data Visualization"
								class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
						</div>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<span
									class="relative z-10 rounded-full bg-yellow-50 px-3 py-1.5 font-medium text-yellow-700"
									>Data Visualization</span
								>
							</div>
							<div class="group relative">
								<h3 class="mt-3 text-lg leading-6 font-semibold text-gray-900">
									Healthcare Data Visualization
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									For Cerner, I spearheaded the design and development of a novel data visualization
									platform. This system translated 28 different real-time data streams from
									hospitals into a comprehensible and dynamic visual narrative, providing unique
									insights into clinical operations.
								</p>
							</div>
						</div>
					</article>
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							<img
								src="https://placehold.co/600x400/0B1120/FF5C69?text=AR/VR"
								alt="Cerner AR/VR"
								class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
						</div>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<span
									class="relative z-10 rounded-full bg-red-50 px-3 py-1.5 font-medium text-red-600"
									>AR/VR</span
								>
							</div>
							<div class="group relative">
								<h3 class="mt-3 text-lg leading-6 font-semibold text-gray-900">
									Clinical Environment in VR
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									I led the creation of Cerner's first virtual reality demonstration for a major
									health conference. The project simulated clinical environments to train staff on
									new protocols and build empathy by allowing users to experience complex patient
									scenarios immersively.
								</p>
							</div>
						</div>
					</article>
					<article class="flex flex-col items-start justify-between">
						<div class="relative w-full">
							<img
								src="https://placehold.co/600x400/0B1120/7EBF6E?text=3D+Customizer"
								alt="DesignerTies 3D Customizer"
								class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
							/>
							<div class="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset"></div>
						</div>
						<div class="max-w-xl">
							<div class="mt-8 flex items-center gap-x-4 text-xs">
								<span
									class="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-600"
									>3D Web</span
								>
							</div>
							<div class="group relative">
								<h3 class="mt-3 text-lg leading-6 font-semibold text-gray-900">
									3D Dental Brace Customizer
								</h3>
								<p class="mt-5 text-sm leading-6 text-gray-600">
									As a contractor for DesignerTies, I developed an interactive 3D visualization tool
									that allows users to customize dental braces in real-time. This WebGL-based
									application provides a highly engaging and personalized experience for patients.
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		</section>

		<section id="contact" class="bg-blue-950 py-20 sm:py-32">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mx-auto max-w-2xl text-center">
					<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Get in Touch</h2>
					<p class="mt-6 text-lg leading-8 text-blue-200">
						Have a project in mind or just want to say hello? I'd love to hear from you. Fill out
						the form below and I'll get back to you as soon as possible.
					</p>
				</div>
				<form class="mx-auto mt-16 max-w-xl sm:mt-20">
					<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<div>
							<label for="name" class="block text-sm leading-6 font-semibold text-white">Name</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="name"
									id="name"
									autocomplete="name"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<label for="company" class="block text-sm leading-6 font-semibold text-white"
								>Company</label
							>
							<div class="mt-2.5">
								<input
									type="text"
									name="company"
									id="company"
									autocomplete="organization"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="email" class="block text-sm leading-6 font-semibold text-white"
								>Email</label
							>
							<div class="mt-2.5">
								<input
									type="email"
									name="email"
									id="email"
									autocomplete="email"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="message" class="block text-sm leading-6 font-semibold text-white"
								>Message</label
							>
							<div class="mt-2.5">
								<textarea
									name="message"
									id="message"
									rows="4"
									class="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-blue-500 focus:ring-inset sm:text-sm sm:leading-6"
								></textarea>
							</div>
						</div>
					</div>
					<div class="mt-10">
						<button
							type="submit"
							class="block w-full rounded-md bg-blue-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
							>Let's talk</button
						>
					</div>
				</form>
			</div>
		</section>
	</main>

	<footer class="mt-auto">
		<div
			class="mx-auto flex h-16 items-center justify-between bg-blue-50 px-4 text-blue-950 sm:px-6 lg:px-8"
		>
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
