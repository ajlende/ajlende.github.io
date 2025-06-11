<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import Code from '@lucide/svelte/icons/code';
	import Palette from '@lucide/svelte/icons/palette';
	import Users from '@lucide/svelte/icons/users';
	import Zap from '@lucide/svelte/icons/zap';
	import Globe from '@lucide/svelte/icons/globe';
	import Database from '@lucide/svelte/icons/database';
	import Cpu from '@lucide/svelte/icons/cpu';
	import Eye from '@lucide/svelte/icons/eye';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';

	function scrollToSection(event: MouseEvent) {
		event.preventDefault();
		const target = event.currentTarget as HTMLAnchorElement;
		const section = document.querySelector(target.getAttribute('href') || '');
		if (section) section.scrollIntoView({ behavior: 'smooth' });
	}
</script>

<Navbar />

<Hero />

<main>
	<section id="about">
		<div>
			<h2>Building Modern Web Experiences</h2>
			<p>
				I'm a principal software engineer with over 10 years of experience building sophisticated
				web applications, interactive 3D experiences, and scalable technical solutions. I've
				contributed to open source projects reaching millions of users and led development teams at
				major tech companies.
			</p>
			<div>
				<a href="#portfolio" onclick={scrollToSection}>
					View My Work
					<ArrowRight />
				</a>
			</div>
			<div>
				<div>
					<Zap />
					<h3>Open Source Contributor</h3>
					<p>
						Contributing to major open source projects like WordPress Gutenberg, with features used
						by millions of developers worldwide.
					</p>
				</div>
				<div>
					<Globe />
					<h3>Full-Stack Development</h3>
					<p>
						Expert in modern web technologies from React and TypeScript frontends to Node.js
						backends and cloud infrastructure.
					</p>
				</div>
				<div>
					<Eye />
					<h3>3D & WebGL</h3>
					<p>
						Specialized in creating immersive 3D experiences and data visualizations using Three.js,
						WebGL, and custom shaders.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="expertise">
		<div>
			<div>
				<h2>Technical Expertise</h2>
				<p>Core technologies and specializations I work with</p>
			</div>

			<div>
				<div>
					<Code />
					<h3>Modern Web Development</h3>
					<p>
						Extensive experience with modern JavaScript frameworks and full-stack development. I
						build responsive, accessible web applications with clean architectures that scale from
						prototype to production.
					</p>
					<ul>
						<li>React</li>
						<li>TypeScript</li>
						<li>Node.js</li>
						<li>PostgreSQL</li>
					</ul>
				</div>

				<div>
					<Cpu />
					<h3>3D Graphics & Visualization</h3>
					<p>
						Specialized in creating interactive 3D experiences and data visualizations for the web.
						From enterprise dashboards to immersive AR/VR prototypes, I bring complex data and ideas
						to life through compelling visual experiences.
					</p>
					<ul>
						<li>Three.js</li>
						<li>WebGL</li>
						<li>GLSL</li>
						<li>AR/VR</li>
						<li>GLSL</li>
					</ul>
				</div>

				<div>
					<Users />
					<h3>Open Source & Community</h3>
					<p>
						Active contributor to major open source projects, particularly WordPress Gutenberg. I
						believe in building tools that empower developers and sharing knowledge through code,
						documentation, and community engagement.
					</p>
					<ul>
						<li>WordPress</li>
						<li>Open Source</li>
						<li>Mentoring</li>
						<li>Code Review</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<section id="portfolio">
		<div>
			<div>
				<h2>Portfolio Highlights</h2>
				<p>Key projects that showcase technical excellence and innovation</p>
			</div>

			<div>
				<a href="/portfolio/gutenberg/">
					<div>
						<Palette />
						<div>WordPress Gutenberg</div>
					</div>
					<div>
						<h3>WordPress Block Editor</h3>
						<p>
							Led development of innovative media editing features for WordPress Gutenberg at
							Automattic, including advanced image tools and SVG filters affecting millions of users
							worldwide.
						</p>
						<div>
							<span>Open Source Impact</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/cerner-media-wall/">
					<div>
						<Database />
						<div>Artistic Data Visualization</div>
					</div>
					<div>
						<h3>Cerner Innovations Media Wall</h3>
						<p>
							Created abstract data visualizations at Cerner's Innovations campus, connecting 28
							unique data stories across 11 live data sources to inspire and inform.
						</p>
						<div>
							<span>Enterprise Scale</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/ar-vr-healthcare/">
					<div>
						<Eye />
						<div>AR/VR Innovation</div>
					</div>
					<div>
						<h3>Immersive Healthcare</h3>
						<p>
							Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health
							Conference, exploring cutting-edge applications of immersive technology in clinical
							settings.
						</p>
						<div>
							<span>Industry First</span>
							<ArrowRight />
						</div>
					</div>
				</a>

				<a href="/portfolio/dental-configurator/">
					<div>
						<Cpu />
						<div>3D Customization</div>
					</div>
					<div>
						<h3>Dental Brace Configurator</h3>
						<p>
							Developed an interactive 3D mobile app, enabling real-time customization of dental
							braces with instant visual feedback for the perfect smile.
						</p>
						<div>
							<span>3D Innovation</span>
							<ArrowRight />
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>

	<section id="experience">
		<div>
			<h2>Professional Experience</h2>
			<p>Building impactful solutions across different scales and industries</p>

			<div>
				<div>
					<h3>Open Source Impact</h3>
					<p>
						Contributing to WordPress Gutenberg at Automattic, where my work on media editing
						features and SVG filters reaches millions of users worldwide. I focus on creating tools
						that empower creators and developers globally.
					</p>
				</div>

				<div>
					<h3>Enterprise Innovation</h3>
					<p>
						Led cutting-edge projects at Cerner, including data visualization installations and
						pioneering AR/VR healthcare applications. Experienced in building solutions that operate
						at massive scale with strict reliability requirements.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section id="contact">
		<div>
			<div>
				<h2>Let's Connect</h2>
				<p>
					Interested in collaborating, discussing technology, or exploring opportunities? I'd love
					to hear from you.
				</p>
			</div>

			<div>
				<form
					method="post"
					action="https://forms.un-static.com/forms/9f08c765086e2a71f5c3bb696226ff2546c6382f"
				>
					<div class="grid gap-6 md:grid-cols-2">
						<div>
							<label for="name">Name</label>
							<input type="text" id="name" name="name" required placeholder="Your name" />
						</div>
						<div>
							<label for="email">Email</label>
							<input type="email" id="email" name="email" required placeholder="your@email.com" />
						</div>
					</div>

					<div>
						<label for="company">Company</label>
						<input type="text" id="company" name="company" placeholder="Your company (optional)" />
					</div>

					<div>
						<label for="subject">Subject</label>
						<select id="subject" name="subject">
							<option value="">What would you like to discuss?</option>
							<option value="collaboration">Collaboration Opportunity</option>
							<option value="open-source">Open Source Project</option>
							<option value="technical">Technical Discussion</option>
							<option value="job">Job Opportunity</option>
							<option value="other">General Inquiry</option>
						</select>
					</div>

					<div>
						<label for="message">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							required
							placeholder="Tell me more about what you'd like to discuss..."
						></textarea>
					</div>

					<button type="submit"> Send Message </button>
				</form>

				<div>
					Powered by <a rel="nofollow" href="https://un-static.com">Un-static Forms</a>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />
