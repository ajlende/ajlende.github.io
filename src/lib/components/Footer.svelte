<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import Github from '@lucide/svelte/icons/github';
	import Linkedin from '@lucide/svelte/icons/linkedin';
	import Briefcase from '@lucide/svelte/icons/briefcase';
</script>

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
