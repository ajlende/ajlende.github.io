import type { PageServerLoad } from './$types';
import { readFileSync } from 'fs';
import { join } from 'path';

// Type for the nested color record
type ColorRecord = Record<string, Record<string, string>>;

function extractColorsFromCSS(cssContent: string): ColorRecord {
	const colors: ColorRecord = {};

	// Regular expression to match color CSS variables
	// Matches: --color-[colorName]-[shade]: oklch(...);
	const colorRegex = /--color-([a-z]+)-(\d+):\s*oklch\([^)]+\);/g;

	let match;
	while ((match = colorRegex.exec(cssContent)) !== null) {
		const [fullMatch, colorName, shade] = match;
		// Extract the OKLCH value (everything after the colon and before the semicolon)
		const oklchValue = fullMatch.split(': ')[1].replace(';', '');

		// Initialize color object if it doesn't exist
		if (!colors[colorName]) {
			colors[colorName] = {};
		}

		// Add the shade and OKLCH value
		colors[colorName][shade] = oklchValue;
	}

	// Sort shades numerically for each color
	for (const colorName in colors) {
		const sortedShades: Record<string, string> = {};
		const shadeKeys = Object.keys(colors[colorName]).sort((a, b) => parseInt(a) - parseInt(b));

		for (const shade of shadeKeys) {
			sortedShades[shade] = colors[colorName][shade];
		}

		colors[colorName] = sortedShades;
	}

	return colors;
}

export const load: PageServerLoad = async () => {
	const cssPath = join(process.cwd(), 'src', 'app.css');
	const cssContent = readFileSync(cssPath, 'utf-8');

	const extractedColors = extractColorsFromCSS(cssContent);

	const colors = Object.keys(extractedColors);
	const shades = Object.keys(extractedColors[colors[0]]);

	return {
		colors,
		shades,
		colorData: extractedColors
	};
};
