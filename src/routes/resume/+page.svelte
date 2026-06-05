<script lang="ts">
	import FilePdf from 'remixicon-svelte/icons/file-pdf-2-fill';
	import { Button } from '$lib/components/ui/button';
	import Navbar from '../Navbar.svelte';
	import Hero from '../Hero.svelte';
	import Footer from '../Footer.svelte';
	import Logo from '../Logo.svelte';
	import { asset } from '$app/paths';

	const skillGroups = [
		{
			name: 'Programming Languages',
			skills: [
				'JavaScript',
				'TypeScript',
				'PHP',
				'Python',
				'HTML',
				'SVG',
				'WebGL',
				'Elm',
				'CSS',
				'SQL',
				'Bash',
				'RegEx'
			]
		},
		{
			name: 'Frameworks/Libraries',
			skills: [
				'React',
				'Node.js',
				'Playwright',
				'Drizzle',
				'Three.js',
				'WordPress',
				'Expo',
				'AVA',
				'ESLint',
				'Cesium.js',
				'Astro',
				'Storybook',
				'Vitest',
				'Prettier',
				'Tone.js'
			]
		},
		{
			name: 'Tools',
			skills: [
				'Git',
				'Codex',
				'Vim',
				'Notion',
				'Sapling',
				'Claude',
				'Zed',
				'Figma',
				'GitHub',
				'Gemini',
				'GSuite',
				'Affinity'
			]
		},
		{
			name: 'Other',
			skills: [
				'Proactive',
				'Technical Leader',
				'Learning Agility',
				'Quality Focus',
				'System Thinking',
				'Collaborative',
				'Open Source',
				'Adaptability',
				'Code Review',
				'Debugging'
			]
		}
	];

	const jobs = [
		{
			company: 'Meta',
			role: 'SWE Consultant via Insight Global',
			date: 'July 2025 - October 2025',
			bullets: [
				'Developed features for the Segment Anything AI Model demo',
				'Proactively identified and resolved critical issues in the core rendering engine',
				'Advocated for quality code and sustainable software development practices',
				'Improved the TypeScript to FlowType conversion script for better type-safety'
			]
		},
		{
			company: 'Automattic',
			role: 'Principal Software Engineer',
			date: 'October 2019 - April 2025',
			bullets: [
				'Collaborated with distributed teams across global EMEA, APAC, and AMER time zones',
				'Mentored and unblocked teammates and WordPress contributors through code review, pairing sessions, and sharing deep technical knowledge of WordPress core',
				'Led development of media editing features in WordPress core such as inline image cropping, duotone SVG color filters, and aspect ratio tools',
				'Explored WebGL WordPress block plugins for efficient rendering of large 3D catalogs',
				'Introduced JSON Schema to WordPress configuration files for generating documentation and improving developer experience',
				'Proactively identified and resolved bugs and compatibility issues in WordPress core releases'
			]
		},
		{
			company: 'Cerner/Oracle',
			role: 'Senior Software Engineer, UX',
			date: 'August 2016 - October 2019',
			bullets: [
				'Mentored junior developers to grow technical skills',
				'Developed an abstract data visualization platform containing 28 unique data stories connecting 11 different live data sources',
				'Proposed and implemented a procedural soundtrack driven by hospital data with four musical themes that change throughout the day',
				'Led development of the first Virtual Reality demo by Cerner at CHC 2018 conference'
			]
		},
		{
			company: 'Workiva',
			role: 'Software Developer Intern',
			date: 'Summer 2014 & 2015',
			bullets: [
				'Created pixel-perfect components based on wireframes, drawings, and mock-ups',
				'Implemented file search filtering and multi-select for a Google Docs-like web app',
				'Prototyped workflows for organizing, sharing, and applying document permissions'
			]
		}
	];
</script>

<svelte:head>
	<title>Alex Lende Resumé | Software Engineering Experience</title>
	<meta
		name="description"
		content="Alex Lende's resumé with software engineering experience at Meta, Automattic, Cerner/Oracle, and Workiva, plus skills in web platforms, graphics, and developer experience."
	/>
	<link rel="canonical" href="https://ajlende.com/resume/" />
	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="Alex Lende" />
	<meta property="og:title" content="Alex Lende Resumé | Software Engineering Experience" />
	<meta
		property="og:description"
		content="Software engineering resumé covering Alex Lende's experience at Meta, Automattic, Cerner/Oracle, and Workiva."
	/>
	<meta property="og:url" content="https://ajlende.com/resume/" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Alex Lende Resumé | Software Engineering Experience" />
	<meta
		name="twitter:description"
		content="Software engineering resumé covering Alex Lende's experience at Meta, Automattic, Cerner/Oracle, and Workiva."
	/>
</svelte:head>

<Navbar />

<Hero>
	<div class="flex flex-col items-center justify-center gap-4 text-center">
		<Logo class="fill-sky-50" width="10em" height="10em" />
		<h1 class="font-display text-9xl font-medium drop-shadow-lg">Alex Lende</h1>
		<div class="font-display text-6xl font-light drop-shadow">Resumé</div>
		<div class="mt-4 flex flex-wrap justify-center gap-3 px-4">
			<Button
				href={asset('/resume.pdf')}
				size="lg"
				download={`Alex Lende - Resume ${new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })}.pdf`}
				class="bg-sky-50 text-sky-950 hover:bg-sky-100"><FilePdf />Download as PDF</Button
			>
			<Button
				href={asset('/resume.md')}
				size="lg"
				download={`Alex Lende - Resume ${new Date().toLocaleString('en-US', { month: 'short', year: 'numeric' })}.md`}
				class="bg-sky-50 text-sky-950 hover:bg-sky-100"><FilePdf />Download as Markdown</Button
			>
		</div>
	</div>
</Hero>

<main class="text-sky-950 dark:text-sky-50">
	<div class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
			<aside class="contents md:block">
				<section class="order-1 md:order-0">
					<h2 class="font-display text-2xl font-medium text-sky-700 dark:text-sky-200">
						Personal Summary
					</h2>
					<p class="mt-4 max-w-prose text-sm leading-6 text-sky-900 dark:text-sky-100">
						Principal software engineer with more than 10 years of professional full stack
						experience. Knowledgeable about design and accessibility. Passionate about devX and
						computer graphics. I’d love to bring my unique skills and insights to your company.
					</p>
				</section>

				<section class="order-4 mt-0 md:order-0 md:mt-10">
					<h2 class="font-display text-2xl font-medium text-sky-700 dark:text-sky-200">Skills</h2>
					<div class="mt-4 space-y-6">
						{#each skillGroups as group (group.name)}
							<section aria-labelledby={`skills-${group.name.toLowerCase().replaceAll('/', '-')}`}>
								<h3
									id={`skills-${group.name.toLowerCase().replaceAll('/', '-')}`}
									class="font-display text-base font-medium text-sky-950 dark:text-sky-50"
								>
									{group.name}
								</h3>
								<ul
									class="mt-3 grid grid-cols-3 gap-x-6 gap-y-1 text-sm leading-5 text-sky-900 dark:text-sky-100"
								>
									{#each group.skills as skill (skill)}
										<li>{skill}</li>
									{/each}
								</ul>
							</section>
						{/each}
					</div>
				</section>
			</aside>

			<div class="contents md:block">
				<section class="order-2 md:order-0">
					<h2 class="font-display text-2xl font-medium text-sky-700 dark:text-sky-200">
						Work Experience
					</h2>
					<div class="mt-4 space-y-5">
						{#each jobs as job (job.company)}
							<article>
								<header
									class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
								>
									<h3 class="font-display text-lg font-medium text-sky-950 dark:text-sky-50">
										{job.company} | {job.role}
									</h3>
									<p class="shrink-0 text-sm text-sky-700 dark:text-sky-300">{job.date}</p>
								</header>
								<ul
									class="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-sky-900 marker:text-sky-500 dark:text-sky-100 dark:marker:text-sky-300"
								>
									{#each job.bullets as bullet (bullet)}
										<li>{bullet}</li>
									{/each}
								</ul>
							</article>
						{/each}
					</div>
				</section>

				<section class="order-3 mt-0 md:order-0 md:mt-8">
					<h2 class="font-display text-2xl font-medium text-sky-700 dark:text-sky-200">
						Education
					</h2>
					<div class="mt-4 text-sm leading-6 text-sky-900 dark:text-sky-100">
						<h3 class="font-display text-lg font-medium text-sky-950 dark:text-sky-50">
							Iowa State University | Bachelor of Science in Software Engineering
						</h3>
						<p class="mt-1 text-sky-700 dark:text-sky-300">May 2016</p>
						<p class="mt-3">
							Capstone Project: Computer vision algorithm for tracking an object in 3D space with a
							single Garmin VIRB XE action camera
						</p>
					</div>
				</section>
			</div>
		</div>
	</div>
</main>

<Footer />
