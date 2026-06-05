import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const base = process.argv.includes('dev') ? '' : (process.env.BASE_PATH ?? '');

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: { base }
	},
	extensions: ['.svelte', '.svx']
};

export default config;
