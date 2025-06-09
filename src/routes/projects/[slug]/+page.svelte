<script lang="ts">
	import { page } from '$app/stores';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import ExternalLink from '@lucide/svelte/icons/external-link';
	import type { PageData } from './$types.js';

	let { data }: { data: PageData } = $props();
	let { project } = data;
	let ProjectIcon = project.icon;
</script>

<svelte:head>
	<title>{project.title} - Alex Lende</title>
	<meta name="description" content={project.description} />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-blue-950">
	<div class="mx-auto max-w-4xl">
		<!-- Back button -->
		<div class="p-4 sm:p-6 lg:p-8">
			<a
				href="/#portfolio"
				class="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
			>
				<ArrowLeft class="mr-2 h-4 w-4" />
				Back to Portfolio
			</a>
		</div>

		<!-- Project content -->
		<div
			class="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-blue-900"
			style="view-transition-name: project-card-{project.slug}"
		>
			<div
				class="flex h-48 items-center justify-center bg-gradient-to-br {project.gradient} dark:{project.gradient.replace(
					'from-red-500 to-red-700',
					'from-red-600 to-red-800'
				)}"
				style="view-transition-name: project-header-{project.slug}"
			>
				<div class="text-center text-white">
					<ProjectIcon class="mx-auto mb-4 h-16 w-16" />
					<div class="text-2xl font-bold">{project.subtitle}</div>
					<div class="text-lg opacity-90">{project.category}</div>
				</div>
			</div>

			<div class="p-8">
				<h1 class="mb-6 text-3xl font-bold text-blue-900 dark:text-blue-100">
					{project.title}
				</h1>

				<div class="mb-8 space-y-4 text-blue-700 dark:text-blue-200">
					{#each project.longDescription.split('\n\n') as paragraph}
						<p class="leading-relaxed">{paragraph}</p>
					{/each}
				</div>

				<div class="mb-8">
					<h2 class="mb-4 text-xl font-semibold text-blue-900 dark:text-blue-100">
						Technologies Used
					</h2>
					<div class="flex flex-wrap gap-2">
						{#each project.technologies as tech}
							<span
								class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-800 dark:text-blue-200"
							>
								{tech}
							</span>
						{/each}
					</div>
				</div>

				{#if project.links.length > 0}
					<div class="mb-8">
						<h2 class="mb-4 text-xl font-semibold text-blue-900 dark:text-blue-100">
							Related Links
						</h2>
						<div class="space-y-2">
							{#each project.links as link}
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
								>
									<ExternalLink class="mr-2 h-4 w-4" />
									{link.title}
								</a>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	/* View transition animations for project page */
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes scale-in {
		from {
			transform: scale(0.8);
		}
	}

	@keyframes scale-out {
		to {
			transform: scale(1.1);
		}
	}

	/* Card to project page transitions */
	:root::view-transition-old(project-card-gutenberg),
	:root::view-transition-old(project-card-healthcare-data-visualization),
	:root::view-transition-old(project-card-immersive-healthcare),
	:root::view-transition-old(project-card-dental-configurator) {
		animation:
			300ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			400ms cubic-bezier(0.4, 0, 0.2, 1) both scale-out;
	}

	:root::view-transition-new(project-card-gutenberg),
	:root::view-transition-new(project-card-healthcare-data-visualization),
	:root::view-transition-new(project-card-immersive-healthcare),
	:root::view-transition-new(project-card-dental-configurator) {
		animation:
			400ms cubic-bezier(0, 0, 0.2, 1) 100ms both fade-in,
			500ms cubic-bezier(0.4, 0, 0.2, 1) both scale-in;
	}

	/* Header transitions maintain their position and scale */
	:root::view-transition-old(project-header-gutenberg),
	:root::view-transition-old(project-header-healthcare-data-visualization),
	:root::view-transition-old(project-header-immersive-healthcare),
	:root::view-transition-old(project-header-dental-configurator) {
		animation: 300ms cubic-bezier(0.4, 0, 1, 1) both fade-out;
	}

	:root::view-transition-new(project-header-gutenberg),
	:root::view-transition-new(project-header-healthcare-data-visualization),
	:root::view-transition-new(project-header-immersive-healthcare),
	:root::view-transition-new(project-header-dental-configurator) {
		animation: 400ms cubic-bezier(0, 0, 0.2, 1) 100ms both fade-in;
	}

	/* Respect reduced motion preferences */
	@media (prefers-reduced-motion) {
		:root::view-transition-old(*),
		:root::view-transition-new(*) {
			animation: none !important;
		}
	}
</style>
