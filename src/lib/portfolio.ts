export type PortfolioLink = {
	label: string;
	href: string;
};

export type PortfolioItem = {
	slug: string;
	title: string;
	category: string;
	brief: [context: string, contribution: string, result: string];
	image?: string;
	imageAlt?: string;
	links: PortfolioLink[];
};

export const portfolioItems: PortfolioItem[] = [
	{
		slug: 'segment-anything',
		title: "Meta's Segment Anything Model demo",
		category: 'Visual and media-heavy products',
		brief: [
			"Segment Anything Playground turns Meta's segmentation models into a browser product for images and video. The interface has to connect prompts and model output to controls and visual effects that make the result understandable.",
			'I developed features for the core rendering engine of the demo including an implemetation of the Jump Flood Algorithm for real-time rendering of full-frame outline effects like contour lines. I also improved the script that converts TypeScript definitions to Flow types, tightening the boundary between two type systems used by the project to fully type Three.js in Flow.',
			'The Playground is publicly available for experimenting with Segment Anything. Visitors can upload an image or video, identify concepts with text or visual prompts, and use templates to apply effects such as spotlights, motion trails, and magnification.'
		],
		image: '/portfolio/segment-anything.webp',
		imageAlt: 'Segment Anything Contour Lines template identifying people in a video',
		links: [
			{
				label: 'Open the Segment Anything demo',
				href: 'https://aidemos.meta.com/segment-anything'
			},
			{ label: 'Read about SAM 3', href: 'https://ai.meta.com/blog/segment-anything-model-3/' },
			{ label: 'Read about SAM 3D', href: 'https://ai.meta.com/blog/sam-3d/' }
		]
	},
	{
		slug: 'wordpress-duotone',
		title: 'WordPress duotone SVG filters',
		category: 'Visual and media-heavy products',
		brief: [
			"Duotone began as a colleague's idea for creating two-tone images in the WordPress editor using SVG filters for more control and higher quality results over the filter process than CSS could support.",
			'I built the prototype as a WordPress plugin. It was well recieved, so I was asked to move the feature into WordPress core. My work included the editor controls, reusable block support, theme.json configuration, PHP rendering, SVG filters, and front-end CSS.',
			'Duotone shipped in WordPress 5.8. Creators can apply the effect without changing the source image. Themes can provide their own presets, and other blocks can use the same support. The feature has continued to improve through contributions from other WordPress contributors.'
		],
		image: '/portfolio/wordpress-duotone.webp',
		imageAlt: 'WordPress editor showing a duotone treatment applied to an image',
		links: [
			{
				label: 'Technical walkthrough',
				href: 'https://ajlende.blog/2023/01/20/duotone-filters-in-wordpress/'
			},
			{
				label: 'Gutenberg proposal',
				href: 'https://github.com/WordPress/gutenberg/pull/26361'
			},
			{
				label: 'Block support documentation',
				href: 'https://developer.wordpress.org/block-editor/reference-guides/block-api/block-supports/#filter-duotone'
			}
		]
	},
	{
		slug: 'cerner-media-wall',
		title: 'Cerner Innovations Campus Media Wall',
		category: 'Visual and media-heavy products',
		brief: [
			"Cerner's Innovations Campus included a ten-foot lobby media wall that changed with live campus and healthcare data. The installation needed to turn many unrelated sources into an ambient experience that would change throughout the day according to those sources.",
			'I helped build the visualization platform and its data stories, working with Blender, Three.js, Cesium.js, and live data integrations. I also proposed and implemented a procedural soundtrack with four musical themes, then co-invented the patented method for adapting music to incoming system data.',
			'The permanent installation gave campus visitors a changing view of architectural history, open-source activity, events, design work, and healthcare systems. Visual scenes and music responded to the underlying data, so the wall could communicate activity without requiring visitors to operate it.'
		],
		image: '/portfolio/cerner-media-wall.webp',
		imageAlt:
			'Interior of the Cerner Innovations Campus featuring its large public connector space',
		links: [
			{
				label: 'Campus retrospective',
				href: 'https://engineering.cerner.com/blog/one-year-calling-innovations-home/'
			},
			{
				label: 'Adaptive soundtrack patent',
				href: 'https://patents.google.com/patent/US20200409994A1/en'
			}
		]
	},
	{
		slug: 'wordpress-image-editing',
		title: 'WordPress image editing tools',
		category: 'Fully featured web applications',
		brief: [
			'An early prototype brought crop and rotation controls into the WordPress Image block. Shipping the workflow meant connecting editor state, an interactive cropper, media requests, and PHP image APIs without sending creators to the separate Media Library.',
			'I carried that prototype through integration and refinement into WordPress core. My contributions included replacing the "drag crop" workflow with a "zoom crop" workflow, adding aspect-ratio presets, and cleaning up both the interface and its PHP controller.',
			'Inline crop, rotate, and zoom controls shipped in WordPress 5.5. Creators can adjust an image while composing a post or page, see the change in context, and continue publishing from the block editor.'
		],
		image: '/portfolio/wordpress-image-editing.webp',
		imageAlt: 'WordPress Image block in crop mode with a crop grid and editing toolbar',
		links: [
			{
				label: 'View the Gutenberg contribution',
				href: 'https://github.com/WordPress/gutenberg/pull/21024'
			},
			{
				label: 'Read the Image block documentation',
				href: 'https://wordpress.org/documentation/article/image-block/'
			},
			{
				label: 'WordPress 5.5 release',
				href: 'https://wordpress.org/news/2020/08/eckstine/'
			}
		]
	},
	{
		slug: 'starscape-block',
		title: 'WordPress Starscape Block',
		category: 'Fully featured web applications',
		brief: [
			'Starscape began as an experiment in bringing dynamicly generated CSS with randomization into the WordPress block editor. The work combined a continuously rendered scene with editable text, responsive dimensions, and controls that had to feel like part of the editor rather than a separate graphics tool.',
			'I built the initial block and its editor experience. That first version covered text alignment, sky gradients, star density, rotation speed, and maximum dimensions while keeping the animation configurable through ordinary block controls.',
			'The WordPress plugin was released in January 2020. Creators can place text over an animated star field and tune the scene without writing graphics code. The real-time effect works inside a reusable WordPress block.'
		],
		image: '/portfolio/starscape-block.webp',
		imageAlt:
			'Starscape block selected in the WordPress editor with density, speed, and color controls',
		links: [
			{
				label: 'View the Starscape contribution',
				href: 'https://github.com/Automattic/block-experiments/pull/18'
			},
			{ label: 'View the Starscape plugin', href: 'https://wordpress.org/plugins/starscape/' }
		]
	},
	{
		slug: 'wedding-rsvp',
		title: 'Personalized Wedding RSVP',
		category: 'Fully featured web applications',
		brief: [
			"I wasn't satisfied with the privacy and features of existing wedding website platforms. I wanted my wedding details to be fully private and accessible only to invited guests and I didn't want anyone collecting and selling our guest's responses.",
			'I challenged myself to build the wedding website from scratch with Svelte, a new web framework that I was curious about. A uniqe access code that was printed on each invitation customized the site and RSVP email confirmations for the guests listed on the invitation in a more integrated way than other wedding website services provided.',
			'Guests found the website to be well designed and easy to navigate. It had all the features that they expected of a professional wedding website. I was satsfied with the privacy and detail that the site provided.'
		],
		image: '/portfolio/wedding-rsvp.webp',
		imageAlt: 'Wedding RSVP site framed by floral illustrations with names and wedding date',
		links: [{ label: 'Open the wedding website', href: 'https://kirsten-alex-wedding.fly.dev/' }]
	},
	{
		slug: 'theme-json-compatibility',
		title: 'WordPress theme.json backwards compatibility',
		category: 'Extensible product platforms',
		brief: [
			'WordPress uses theme.json as a contract between core, themes, and user theme settings. Default font and spacing preset behavior was changing, so the release needed explicit migrations that preserved older themes and handled configuration from different theme sources correctly.',
			'I identified the breaking changes before they were released, implemented compatibility paths for the new behavior by introducing theme.json version 3, and documented the changes ahead of the WordPress 6.6 release.',
			'Theme authors can opt into version 3 when they want the new default behavior, while version 1 and 2 files remain supported. WordPress can keep evolving the design API without silently applying the same breaking behavior to every existing theme.'
		],
		image: '/portfolio/theme-json.webp',
		imageAlt: 'WordPress theme.json version 3 developer note',
		links: [
			{
				label: 'Read the theme.json version 3 dev note',
				href: 'https://make.wordpress.org/core/2024/06/19/theme-json-version-3/'
			},
			{
				label: 'View the version 3 implementation',
				href: 'https://github.com/WordPress/gutenberg/pull/58409'
			}
		]
	},
	{
		slug: 'icon-accessibility',
		title: 'Icon accessibility tooling patent',
		category: 'Product engineering foundations',
		brief: [
			'An icon can meet a nominal contrast threshold and still lose meaningful detail against a particular background. Reviewing a large icon system by hand makes it hard to apply the same visual judgment to every asset and every background.',
			'I co-invented a method for turning that review into a repeatable assessment with five colleagues at Cerner. The patented system measures icon area, borders, and grid regions against a background, combines those scores into a risk level, and identifies the regions behind that result.',
			'The patent was granted in 2020. The method lets designers and reviewers find icons that may need attention and see where contrast is breaking down. Manual review can begin with a flagged region instead of checking every icon in the same way.'
		],
		image: '/portfolio/icon-accessibility.webp',
		imageAlt:
			'Icon accessibility tool comparing risk scores for icons on light, medium, and dark backgrounds',
		links: [
			{
				label: 'Read the accessibility tooling patent',
				href: 'https://patents.google.com/patent/US10565739B2/'
			}
		]
	},
	{
		slug: 'wordpress-json-schema',
		title: 'JSON Schema for WordPress config files',
		category: 'Product engineering foundations',
		brief: [
			'WordPress configuration spans themes, blocks, local environments, fonts, and Playground blueprints. Each file format needs to stay understandable to developers and tools as its API changes, which makes a machine-readable contract more useful than prose documentation alone.',
			'I created and maintained the JSON Schema system behind those files. My work included version backports, stricter meta-schema validation, migration to JSON Schema Draft 7, schema corrections, and a rework of the process that generates theme.json reference documentation.',
			'The schemas give developers autocomplete and validation in supported editors, with version-specific references for documentation and automated tests. Contributors can check API changes against the contract instead of relying on scattered knowledge of each configuration format.'
		],
		image: '/portfolio/wordpress-json-schema.webp',
		imageAlt: 'VS Code validating a WordPress theme.json file with its JSON Schema',
		links: [
			{
				label: 'Read JSON Schema in WordPress',
				href: 'https://developer.wordpress.org/news/2024/07/json-schema-in-wordpress/'
			},
			{
				label: 'View the Draft 7 migration',
				href: 'https://github.com/WordPress/gutenberg/pull/63582'
			}
		]
	}
];

export const portfolioBySlug = new Map(portfolioItems.map((item) => [item.slug, item]));
