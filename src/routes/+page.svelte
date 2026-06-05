<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button } from '$lib/components/ui/button';
	import Navbar from './Navbar.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import Contact from './Contact.svelte';
	import Logo from './Logo.svelte';
</script>

<Navbar />

<Hero>
	<div class="flex w-full flex-col items-center justify-center gap-4 px-4 text-center sm:px-8">
		<Logo class="fill-sky-50" width="10em" height="10em" />
		<h1 class="font-display text-6xl font-medium drop-shadow-lg sm:text-8xl lg:text-9xl">
			Alex Lende
		</h1>
		<div class="font-display text-2xl font-light drop-shadow sm:text-3xl lg:text-4xl">
			Principal Software Engineer & Technical Consultant
		</div>
		<div class="mt-4 flex flex-wrap justify-center gap-3 px-4">
			<Button href="#contact" size="xl" class="bg-sky-50 text-sky-950 hover:bg-sky-100"
				>Start a conversation</Button
			>
			<Button
				href="#what-i-work-on"
				size="xl"
				variant="outline"
				class="border-sky-50 bg-transparent text-sky-50 hover:bg-sky-50/10 hover:text-sky-50"
				>See what I work on</Button
			>
		</div>
	</div>
</Hero>

<main>
	<section class="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
		<div class="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
			<div>
				<p class="text-sm font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
					Personal summary
				</p>
				<h2 class="font-display mt-4 text-4xl font-medium text-sky-950 dark:text-sky-50">
					10+ years of software development experience.
				</h2>
			</div>
			<div class="max-w-3xl text-lg leading-8 text-sky-800 dark:text-sky-100">
				<p>
					I write software that engineers can understand, trust, and change, without losing sight of
					the experience it exists to support.
				</p>
				<p class="mt-4">
					I work close to the product: understanding what the team is optimizing for, tracing the
					constraints in the code, helping shape the technical direction, and then writing the code
					in a way that works for the product and team.
				</p>
				<p class="mt-4">
					I do my best work on small to mid-size product teams where product, design, and
					engineering can talk directly and make thoughtful tradeoffs.
				</p>
				<Button href={resolve('/resume')} class="mt-8">View my resumé</Button>
			</div>
		</div>
	</section>

	<div class="mx-auto max-w-4xl border-t border-sky-200 dark:border-sky-800"></div>

	<section
		id="what-i-work-on"
		aria-labelledby="work-heading"
		class="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
	>
		<div class="max-w-3xl">
			<p class="text-sm font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
				What I work on
			</p>
			<h2
				id="work-heading"
				class="font-display mt-4 text-4xl font-medium text-sky-950 dark:text-sky-50"
			>
				Systems where user experience, implementation, and maintainability affect each other.
			</h2>
		</div>
		<div class="mt-12 grid gap-8">
			<article
				class="grid gap-4 border-l-2 border-sky-500 pl-6 md:grid-cols-[0.45fr_1fr] dark:border-sky-700"
			>
				<h3 class="font-display text-2xl font-medium text-sky-950 dark:text-sky-50">
					Visual and media-heavy products
				</h3>
				<div class="leading-8 text-sky-800 dark:text-sky-100">
					<p>Software where visual behavior is an integral part of the product.</p>
					<p>
						Visual correctness, interaction quality, accessibility, rendering performance, and
						product architecture all affect the same user experience, so the technical choices have
						to be considered together.
					</p>
					<ul
						class="mt-2 ml-4 list-disc space-y-2 leading-5 underline underline-offset-4 marker:text-sky-500 dark:marker:text-sky-300"
					>
						<li>
							<a href="https://aidemos.meta.com/segment-anything">
								Meta's Segment Anything Model demo
							</a>
						</li>
						<li>
							<a
								href="https://learn.wordpress.org/lesson-plan/use-duotone-filters-to-change-color-effects/"
							>
								WordPress duotone SVG filters
							</a>
						</li>
						<li>
							<a href="https://www.davidparks.us/cerner-innovations-campus#4">
								Oracle (Cerner) Innovations Campus Media Wall healthcare data visualizations
							</a>
						</li>
					</ul>
				</div>
			</article>
			<article
				class="grid gap-4 border-l-2 border-sky-500 pl-6 md:grid-cols-[0.45fr_1fr] dark:border-sky-700"
			>
				<h3 class="font-display text-2xl font-medium text-sky-950 dark:text-sky-50">
					Fully featured web applications
				</h3>
				<div class="leading-8 text-sky-800 dark:text-sky-100">
					<p>Interactive products that customers primarily access through a web browser.</p>
					<p>
						Workflows, state, permissions, data flow, product constraints, and interaction details
						all shape whether the software stays performant and understandable as it grows.
					</p>
					<ul
						class="mt-2 ml-4 list-disc space-y-2 leading-5 underline underline-offset-4 marker:text-sky-500 dark:marker:text-sky-300"
					>
						<li>
							<a href="https://github.com/WordPress/gutenberg/pull/21024"
								>WordPress image editing tools</a
							>
						</li>
						<li>
							<a href="https://github.com/Automattic/block-experiments/pull/18"
								>WordPress Starscape Block</a
							>
						</li>
						<li><a href="https://kirsten-alex-wedding.fly.dev/">Personalized Wedding RSVP</a></li>
					</ul>
				</div>
			</article>
			<article
				class="grid gap-4 border-l-2 border-sky-500 pl-6 md:grid-cols-[0.45fr_1fr] dark:border-sky-700"
			>
				<h3 class="font-display text-2xl font-medium text-sky-950 dark:text-sky-50">
					Extensible product platforms
				</h3>
				<div class="leading-8 text-sky-800 dark:text-sky-100">
					<p>
						Products where people outside the core team need to configure, customize, or build on
						top of the system.
					</p>
					<p>
						Backwards compatibility, developer tooling, documentation, versioning, and clear
						configuration contracts decide whether the platform can keep evolving.
					</p>
					<ul
						class="mt-2 ml-4 list-disc space-y-2 leading-5 underline underline-offset-4 marker:text-sky-500 dark:marker:text-sky-300"
					>
						<li>
							<a href="https://make.wordpress.org/core/2024/06/19/theme-json-version-3/"
								>WordPress theme.json backwards compatibility</a
							>
						</li>
					</ul>
				</div>
			</article>
			<article
				class="grid gap-4 border-l-2 border-sky-500 pl-6 md:grid-cols-[0.45fr_1fr] dark:border-sky-700"
			>
				<h3 class="font-display text-2xl font-medium text-sky-950 dark:text-sky-50">
					Product engineering foundations
				</h3>
				<div class="leading-8 text-sky-800 dark:text-sky-100">
					<p>
						The tools, checks, migrations, and workflows that help teams change product software
						with confidence.
					</p>
					<p>
						Small gaps in validation, release process, documentation, or development workflow can
						turn into repeated bugs and cautious patching around problems nobody fully understands.
					</p>
					<ul
						class="mt-2 ml-4 list-disc space-y-2 leading-5 underline underline-offset-4 marker:text-sky-500 dark:marker:text-sky-300"
					>
						<li>
							<a href="https://patents.google.com/patent/US10565739B2/"
								>Icon accessibility tooling patent</a
							>
						</li>
						<li>
							<a href="https://developer.wordpress.org/news/2024/07/json-schema-in-wordpress/"
								>JSON Schema for WordPress config files</a
							>
						</li>
					</ul>
				</div>
			</article>
		</div>
	</section>

	<div class="mx-auto max-w-4xl border-t border-sky-200 dark:border-sky-800"></div>

	<section
		id="orientation"
		aria-labelledby="orientation-heading"
		class="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
	>
		<div>
			<p class="text-sm font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
				How to work with me
			</p>
			<h2
				id="orientation-heading"
				class="font-display mt-4 text-4xl font-medium text-sky-950 dark:text-sky-50"
			>
				Start with a real product or engineering problem.
			</h2>
			<div class="mt-6 space-y-5 text-lg leading-8 text-sky-800 dark:text-sky-100">
				<p>
					Before getting started with anything I like to start with one or two introductory
					conversations. The best first conversation is about the problem in front of you: what you
					are building, who uses it, what feels hard to change or decide, and where technical
					direction is starting to matter.
				</p>
				<p>
					Once I have an idea of the work you're looking for and sign on to help, I usually start
					with a 12-18 week commitment which gives both sides a practical way to evaluate fit before
					committing to a longer collaboration.
				</p>
				<p>
					I use that time to work in the code, trace the relevant context, talk with the people
					closest to the details, and help the team decide what should happen next. Discovery and
					implementation happen together because working systems reveal tradeoffs that diagrams and
					planning conversations often miss.
				</p>
			</div>
		</div>
	</section>

	<div class="mx-auto max-w-4xl border-t border-sky-200 dark:border-sky-800"></div>

	<section aria-labelledby="thinking-heading" class="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
		<p class="text-sm font-medium tracking-[0.16em] text-sky-700 uppercase dark:text-sky-300">
			About me
		</p>
		<div class="grid gap-12 lg:grid-cols-[1fr_0.9fr]">
			<article>
				<h2
					id="thinking-heading"
					class="font-display mt-4 text-4xl font-medium text-sky-950 dark:text-sky-50"
				>
					How I think about software
				</h2>
				<div class="mt-6 space-y-5 leading-8 text-sky-800 dark:text-sky-100">
					<p>
						I want the code to explain why it exists. Every abstraction, dependency, pattern, and
						shortcut should be carrying its weight. I do not get much value from software that looks
						sophisticated but is hard to change. The better version is usually plainer: a system
						another engineer can understand, question, and safely reshape.
					</p>
					<p>
						Technical depth matters when it changes what the product can do or makes the next change
						less risky. The right architecture depends on the shape of the work around it: who uses
						the product, who maintains it, what has to keep working, and what the existing code
						already makes easy or hard.
					</p>
					<p>
						I trust implementation as a way of thinking. Diagrams and discussions are useful, but
						working inside the system exposes the details that decide whether an idea holds up.
						Sometimes the important thing is not visible until the code has to run, migrate, fail,
						or fit next to everything else.
					</p>
					<p>
						I like learning tools well enough to know what kind of judgment they require. AI belongs
						in that category. I use it to explore directions, draft rough material, search through
						context, prototype, and automate small pieces of work. I do not use it to decide whether
						the result is correct, maintainable, or useful.
					</p>
					<p>
						Software is one of the ways I learn. The code teaches you about the product, the
						constraints, and the people who will live with the decisions after you make them. I am
						usually trying to leave behind something a little easier to reason about than what I
						found.
					</p>
				</div>
			</article>
			<article>
				<h2 class="font-display mt-4 text-4xl font-medium text-sky-950 dark:text-sky-50">
					Personal interests
				</h2>
				<div class="mt-5 space-y-5 leading-8 text-sky-800 dark:text-sky-100">
					<p>
						Outside of work, I play trombone in a local concert band, tinker with home automation
						with HomeAssistant, cross country ski in the winter, bike around my city in the summer,
						tend to my perennial flower garden, and grow a few vegetables on the side.
					</p>
					<p>
						Occasionally I'll take a week long camping trip into the Boundary Waters Canoe Area
						Wilderness, bike across various midwestern states on multi-day supported bike rides like
						RAGBRAI and Ride Across Wisconsin, or go for an adventure vacation wherever there's good
						hiking.
					</p>
					<p>
						Prior to moving to the midwest, I spent a few years traveling around the United States
						and around the world as a digital nomad, learning to cook local dishes wherever I went.
						I've ended up with quite a few travel stories.
					</p>
					<p>
						I also occasionaly write on my personal blog. It contains a mix of technical and travel
						content, but isn't updated very regularly.
					</p>
					<Button target="_blank" href="https://lendedotblog.wordpress.com"
						>Visit my personal blog</Button
					>
				</div>
			</article>
		</div>
	</section>

	<section
		id="contact"
		aria-labelledby="contact-heading"
		class="mx-auto max-w-5xl border-t border-sky-200 px-4 py-24 sm:px-6 lg:px-8 dark:border-sky-800"
	>
		<div class="mb-10 max-w-3xl">
			<h2
				id="contact-heading"
				class="font-display text-4xl font-medium text-sky-950 dark:text-sky-50"
			>
				Let's start a conversation.
			</h2>
			<p class="mt-5 text-lg leading-8 text-sky-800 dark:text-sky-100">
				It helps to include what you are building, who it serves, what stage the product is in, and
				what kind of collaboration you are looking for.
			</p>
		</div>
		<Contact />
	</section>
</main>

<Footer />
