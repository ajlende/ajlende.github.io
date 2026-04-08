<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Hero from './Hero.svelte';
	import Footer from './Footer.svelte';
	import * as Card from '$lib/components/ui/card';

	const title: string = 'Alex Lende';
	const subtitle: string = 'Principal Software Engineer & Technical Consultant';
</script>

<Navbar />

<Hero {title} {subtitle} />

<main class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
	<section id="expertise" class="my-10">
		<Card.Root>
			<Card.Header>
				<Card.Title class="text-3xl">Expertise</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-lg">
					Technical leadership, architecture, and full‑stack web development. I partner with
					engineering teams to design resilient systems, improve developer experience, and deliver
					high‑impact product outcomes.
				</p>
			</Card.Content>
		</Card.Root>
	</section>

	<section id="portfolio" class="my-10">
		<Card.Root>
			<Card.Header>
				<Card.Title class="text-3xl">Portfolio</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-lg">
					Selected projects and case studies demonstrating system design, developer tooling, and
					production‑grade web platforms.
				</p>
			</Card.Content>
		</Card.Root>
	</section>

	<section id="contact" class="my-10">
		<Card.Root>
			<Card.Header>
				<Card.Title class="text-3xl">Contact</Card.Title>
			</Card.Header>
			<Card.Content>
				<p class="text-lg">
					Get in touch at
					<a href="mailto:alex@example.com" class="underline">alex@example.com</a>
					or find me on GitHub and LinkedIn using the links in the header/footer.
				</p>
			</Card.Content>
		</Card.Root>
	</section>
</main>

<Footer />
