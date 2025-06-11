<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import { randomCircularPointDistribution } from '$lib/utils/random';
	import { browser } from '$app/environment';

	// Props
	let { title = 'Alex Lende', subtitle = 'Principal Software Engineer' } = $props();

	// Responsive dimensions to size starfield safely at multiples of 256 (align with Tailwind breakpoints)
	let clientWidth = $state(0);
	let clientHeight = $state(0);

	// Derived sizes / geometry
	let width = $derived(Math.ceil(clientWidth / 256) * 256);
	let height = $derived(Math.ceil(clientHeight / 256) * 256);
	let radius = $derived(Math.ceil(Math.sqrt((width / 2) * (width / 2) + height * height)));
	let diameter = $derived(radius * 2);
	let viewBox = $derived(`${-radius} ${-radius} ${diameter} ${diameter}`);

	// Star positions
	let smallStars = $derived(randomCircularPointDistribution(80, radius));
	let mediumStars = $derived(randomCircularPointDistribution(40, radius));
	let largeStars = $derived(randomCircularPointDistribution(20, radius));
</script>

<!-- Hero Section -->
<div
	class="flex h-screen flex-col items-center justify-center bg-linear-150 from-blue-950 via-blue-900 via-80% to-blue-800 dark:from-blue-950 dark:via-blue-950 dark:via-60% dark:to-blue-900"
	style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%)"
>
	<!-- Starfield -->
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

	<!-- Branding -->
	<div class="flex flex-col items-center justify-center gap-4 text-center">
		<Logo class="fill-blue-50" width="10em" height="10em" />
		<h1 class="font-serif text-9xl font-bold text-blue-50 drop-shadow-lg">{title}</h1>
		{#if subtitle}
			<div class="font-serif text-4xl text-blue-50 drop-shadow">{subtitle}</div>
		{/if}
	</div>
</div>
