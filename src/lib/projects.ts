import Palette from '@lucide/svelte/icons/palette';
import Database from '@lucide/svelte/icons/database';
import Eye from '@lucide/svelte/icons/eye';
import Cpu from '@lucide/svelte/icons/cpu';

export interface Project {
	slug: string;
	title: string;
	subtitle: string;
	icon: any;
	gradient: string;
	category: string;
	description: string;
	longDescription: string;
	technologies: string[];
	links: { title: string; url: string }[];
}

export const projects: Record<string, Project> = {
	gutenberg: {
		slug: 'gutenberg',
		title: 'WordPress Block Editor',
		subtitle: 'WordPress Gutenberg',
		icon: Palette,
		gradient: 'from-red-500 to-red-700',
		category: 'Open Source Impact',
		description:
			'Led development of innovative media editing features for WordPress Gutenberg at Automattic, including advanced image tools and SVG filters affecting millions of users worldwide.',
		longDescription: `As a principal engineer at Automattic, I led the development of cutting-edge media editing features for WordPress Gutenberg that serve millions of users worldwide. My work focused on bringing professional-grade image editing capabilities directly into the WordPress editor.

Key contributions include:
• Advanced image editing tools with real-time preview
• SVG filter system for artistic image effects
• Performance optimizations for large media libraries
• Accessibility improvements for screen readers
• Mobile-responsive editing interfaces

The impact of this work extends far beyond WordPress.com, as these features are used by millions of self-hosted WordPress sites, making sophisticated media editing accessible to creators worldwide without requiring external software.`,
		technologies: ['React', 'TypeScript', 'WordPress', 'SVG', 'Canvas API', 'WebGL'],
		links: [
			{ title: 'WordPress Gutenberg', url: 'https://github.com/WordPress/gutenberg' },
			{ title: 'WordPress.com', url: 'https://wordpress.com' }
		]
	},
	'healthcare-data-visualization': {
		slug: 'healthcare-data-visualization',
		title: 'Cerner Innovations Media Wall',
		subtitle: 'Artistic Data Visualization',
		icon: Database,
		gradient: 'from-red-500 to-red-700',
		category: 'Enterprise Scale',
		description:
			"Created abstract data visualizations at Cerner's Innovations campus, connecting 28 unique data stories across 11 live data sources to inspire and inform.",
		longDescription: `At Cerner's Innovations campus, I designed and developed a large-scale data visualization installation that transformed complex healthcare data into inspiring visual narratives. This project connected real-time data from 11 different sources into 28 unique, artistic visualizations.

Project highlights:
• Real-time data processing from multiple healthcare systems
• Custom WebGL shaders for smooth, artistic animations
• Responsive design scaling from mobile to 85" displays
• Fault-tolerant architecture with automatic failover
• Performance optimization for 24/7 operation

The installation serves as both an inspiration piece for employees and visitors, and a demonstration of how data can be made beautiful and accessible. Each visualization tells a different story about healthcare innovation, from patient outcomes to research breakthroughs.`,
		technologies: ['Three.js', 'WebGL', 'GLSL', 'Node.js', 'PostgreSQL', 'Docker'],
		links: [{ title: 'Cerner Innovations', url: 'https://www.cerner.com/about/innovations' }]
	},
	'immersive-healthcare': {
		slug: 'immersive-healthcare',
		title: 'Immersive Healthcare',
		subtitle: 'AR/VR Innovation',
		icon: Eye,
		gradient: 'from-red-500 to-red-700',
		category: 'Industry First',
		description:
			"Premiered Cerner's first virtual reality health care demo at the 2018 Cerner Health Conference, exploring cutting-edge applications of immersive technology in clinical settings.",
		longDescription: `I led the development of Cerner's pioneering virtual reality healthcare application, which premiered at the 2018 Cerner Health Conference. This groundbreaking project explored how immersive technology could transform clinical workflows and medical education.

Innovation areas explored:
• VR-based medical record visualization in 3D space
• Immersive patient data exploration for clinicians
• Virtual collaborative spaces for medical teams
• AR overlay systems for real-time patient information
• Haptic feedback integration for tactile medical data

The demo showcased a future where healthcare professionals could literally walk through patient data, manipulate 3D medical imaging in virtual space, and collaborate with colleagues regardless of physical location. This work positioned Cerner as a leader in healthcare technology innovation and influenced the company's future AR/VR research direction.`,
		technologies: ['Unity', 'C#', 'WebXR', 'Three.js', 'FHIR', 'Oculus SDK'],
		links: [{ title: 'Cerner Health Conference', url: 'https://www.cerner.com/conference' }]
	},
	'dental-configurator': {
		slug: 'dental-configurator',
		title: 'Dental Brace Configurator',
		subtitle: '3D Customization',
		icon: Cpu,
		gradient: 'from-red-500 to-red-700',
		category: '3D Innovation',
		description:
			'Developed an interactive 3D mobile app, enabling real-time customization of dental braces with instant visual feedback for the perfect smile.',
		longDescription: `I developed a revolutionary 3D mobile application that allows users to customize dental braces in real-time with instant visual feedback. This project combined advanced 3D rendering with intuitive user experience design to make dental customization accessible and engaging.

Technical achievements:
• Real-time 3D rendering optimized for mobile devices
• Dynamic mesh deformation for accurate brace fitting
• Physics-based animation for realistic material behavior
• Color picker with live preview on 3D models
• Export functionality for manufacturing specifications
• Cross-platform compatibility (iOS and Android)

The application transforms the traditionally clinical process of choosing dental braces into an engaging, personalized experience. Users can see exactly how different colors and styles will look before making their decision, leading to higher satisfaction and reduced revision requests.`,
		technologies: ['Three.js', 'WebGL', 'React Native', 'Blender', 'glTF', 'PWA'],
		links: []
	}
};

export function getProject(slug: string): Project | undefined {
	return Object.values(projects).find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
	return Object.values(projects);
}
