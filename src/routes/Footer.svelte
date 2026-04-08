<script lang="ts">
	import Logo from './Logo.svelte';
	import GitHub from 'remixicon-svelte/icons/github-fill';
	import Linkedin from 'remixicon-svelte/icons/linkedin-fill';
	import WordPress from 'remixicon-svelte/icons/wordpress-fill';
	import Wellfound from '$lib/icons/wellfound.svelte';
</script>

<footer class="bg-sky-950 py-16 text-sky-50 dark:bg-sky-950 dark:text-sky-100">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between md:flex-row">
			<div class="mb-8 text-center md:mb-0 md:text-left">
				<div class="mb-4 flex items-center justify-center md:justify-start">
					<Logo class="mr-3 fill-sky-50 dark:fill-sky-100" width="2em" height="2em" />
					<span class="font-display text-xl">Alex Lende</span>
				</div>
				<p class="text-sky-300 dark:text-sky-200">
					Principal Software Engineer & Technical Consultant
				</p>
			</div>

			<div class="flex items-center space-x-6">
				<a
					href="https://github.com/ajlende"
					target="_blank"
					aria-label="Alex Lende on GitHub"
					class="text-sky-300 transition-colors hover:text-sky-50 dark:text-sky-200 dark:hover:text-sky-100"
				>
					<GitHub class="h-6" />
				</a>
				<a
					href="https://profiles.wordpress.org/ajlende"
					target="_blank"
					aria-label="Alex Lende on WordPress.org"
					class="text-sky-300 transition-colors hover:text-sky-50 dark:text-sky-200 dark:hover:text-sky-100"
				>
					<WordPress class="h-6" />
				</a>
				<a
					href="https://linkedin.com/in/ajlende"
					target="_blank"
					aria-label="Alex Lende on LinkedIn"
					class="text-sky-300 transition-colors hover:text-sky-50 dark:text-sky-200 dark:hover:text-sky-100"
				>
					<Linkedin class="h-6" />
				</a>
				<a
					href="https://wellfound.com/u/ajlende"
					target="_blank"
					aria-label="Alex Lende on Wellfound"
					class="text-sky-300 transition-colors hover:text-sky-50 dark:text-sky-200 dark:hover:text-sky-100"
				>
					<Wellfound class="h-6" />
				</a>
			</div>
		</div>

		<div
			class="mt-12 border-t border-sky-800 pt-8 text-center text-sm text-sky-300 dark:border-sky-700 dark:text-sky-200"
		>
			<p class="mb-2">
				Contents of this site are © Copyright 2017-{new Date().getFullYear()} Alex Lende. All rights reserved.
			</p>
			<p>
				<a
					href="https://github.com/ajlende/ajlende.github.io/tree/develop"
					class="transition-colors hover:text-sky-50 dark:hover:text-sky-100">Source code</a
				>
				is available under the
				<a
					href="http://opensource.org/licenses/mit-license.php"
					class="transition-colors hover:text-sky-50 dark:hover:text-sky-100">MIT license</a
				>.
			</p>
		</div>
	</div>
</footer>
