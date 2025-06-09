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
					<!-- TODO: Add additional navigation items -->
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

	<!-- TODO: Add main content styling -->
	<main>
		<!-- TODO: Add additional sections -->
		<section id="contact">
			<!-- TODO: Add contact form -->
		</section>
	</main>

	<!-- TODO: Add footer content and styles -->
	<footer>
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
	</footer>
</div>
