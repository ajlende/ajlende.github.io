<script lang="ts">
	import type { Snippet } from 'svelte';
	import { randomCircularPointDistribution } from '$lib/utils';

	let { children }: { children: Snippet } = $props();

	let clientWidth = $state(0);
	let clientHeight = $state(0);

	let width = $derived(Math.ceil(clientWidth / 256) * 256);
	let height = $derived(Math.ceil(clientHeight / 256) * 256);
	let radius = $derived(Math.ceil(Math.sqrt((width / 2) * (width / 2) + height * height)));
	let diameter = $derived(radius * 2);
	let viewBox = $derived(`${-radius} ${-radius} ${diameter} ${diameter}`);

	let smallStars = $derived(randomCircularPointDistribution(80, radius));
	let mediumStars = $derived(randomCircularPointDistribution(40, radius));
	let largeStars = $derived(randomCircularPointDistribution(20, radius));
</script>

<div
	class="flex h-screen flex-col items-center justify-center bg-linear-150 from-sky-950 via-sky-900 via-80% to-sky-800 dark:from-sky-950 dark:via-sky-950 dark:via-60% dark:to-sky-900"
	style="clip-path: polygon(0 0,100% 0,100% 90%,50% 100%,0 90%)"
>
	<div
		bind:clientWidth
		bind:clientHeight
		class="pointer-events-none absolute h-full w-full overflow-hidden"
		aria-hidden="true"
	>
		<svg
			class="absolute top-full left-[50%] translate-[-50%] animate-[spin_480s_linear_infinite] fill-white"
			{viewBox}
			width={diameter}
			height={diameter}
		>
			{#each largeStars as star, index (`large-${index}`)}
				<circle cx={star.x} cy={star.y} r={1.5} />
			{/each}
		</svg>
		<svg
			class="absolute top-full left-[50%] translate-[-50%] animate-[spin_240s_linear_infinite] fill-white"
			{viewBox}
			width={diameter}
			height={diameter}
		>
			{#each mediumStars as star, index (`medium-${index}`)}
				<circle cx={star.x} cy={star.y} r={1} />
			{/each}
		</svg>
		<svg
			class="absolute top-full left-[50%] translate-[-50%] animate-[spin_120s_linear_infinite] fill-white"
			{viewBox}
			width={diameter}
			height={diameter}
		>
			{#each smallStars as star, index (`small-${index}`)}
				<circle cx={star.x} cy={star.y} r={0.5} />
			{/each}
		</svg>
	</div>

	<div class="text-sky-50">
		{@render children()}
	</div>
</div>
