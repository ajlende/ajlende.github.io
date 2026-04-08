import themeCss from '../../theme.css?raw';

const rootComponentSources = import.meta.glob('../../lib/components/ui/*/*.svelte', {
	eager: true,
	import: 'default',
	query: '?raw'
}) as Record<string, string>;
const declarationPattern = /(--[\w*-]+)\s*:\s*([\s\S]*?);/g;

type VariantGroup = {
	name: string;
	options: string[];
};

function parseDeclarations(block: string) {
	return Array.from(block.matchAll(declarationPattern), ([, name, value]) => ({
		name,
		value: value.replace(/\s+/g, ' ').trim()
	}));
}

function parseThemeBlocks(themeCss: string) {
	const baseBlock = themeCss.match(/@theme\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';
	const inlineBlock = themeCss.match(/@theme\s+inline\s*\{([\s\S]*?)\n\}/)?.[1] ?? '';

	const baseDeclarations = parseDeclarations(baseBlock);
	const inlineDeclarations = parseDeclarations(inlineBlock);

	const colorFamilies = new Map<string, Array<{ name: string; value: string }>>();
	const specialColors: Array<{ name: string; value: string }> = [];

	for (const declaration of baseDeclarations) {
		const colorMatch = declaration.name.match(/^--color-([a-z]+)-(\d+)$/);

		if (colorMatch) {
			const [, family] = colorMatch;
			const familyColors = colorFamilies.get(family) ?? [];
			familyColors.push(declaration);
			colorFamilies.set(family, familyColors);
			continue;
		}

		if (/^--color-(black|white)$/.test(declaration.name)) {
			specialColors.push(declaration);
		}
	}

	const fonts = baseDeclarations.filter(
		({ name }) => name.startsWith('--font-') && !name.endsWith('*')
	);
	const semanticColors = inlineDeclarations.filter(({ name }) => name.startsWith('--color-'));
	const radii = inlineDeclarations.filter(({ name }) => name.startsWith('--radius-'));

	return {
		colorFamilies: Array.from(colorFamilies.entries())
			.map(([family, colors]) => ({
				family,
				colors: colors.sort((left, right) =>
					left.name.localeCompare(right.name, undefined, { numeric: true })
				)
			}))
			.sort((left, right) => left.family.localeCompare(right.family)),
		specialColors,
		fonts,
		semanticColors,
		radii
	};
}

function findMatchingBrace(source: string, openBraceIndex: number) {
	let depth = 0;
	let quote: string | undefined;
	let isEscaped = false;

	for (let index = openBraceIndex; index < source.length; index += 1) {
		const character = source[index];

		if (quote) {
			if (isEscaped) {
				isEscaped = false;
				continue;
			}

			if (character === '\\') {
				isEscaped = true;
				continue;
			}

			if (character === quote) {
				quote = undefined;
			}

			continue;
		}

		if (character === '"' || character === "'" || character === '`') {
			quote = character;
			continue;
		}

		if (character === '{') {
			depth += 1;
			continue;
		}

		if (character === '}') {
			depth -= 1;

			if (depth === 0) {
				return index;
			}
		}
	}

	return -1;
}

function findObjectBlock(source: string, propertyName: string) {
	const propertyIndex = source.search(new RegExp(`\\b${propertyName}\\s*:`));

	if (propertyIndex === -1) {
		return;
	}

	const openBraceIndex = source.indexOf('{', propertyIndex);
	const closeBraceIndex = findMatchingBrace(source, openBraceIndex);

	if (openBraceIndex === -1 || closeBraceIndex === -1) {
		return;
	}

	return source.slice(openBraceIndex + 1, closeBraceIndex);
}

function parseObjectKeys(source: string) {
	const keys: string[] = [];
	let index = 0;

	while (index < source.length) {
		const keyMatch = source
			.slice(index)
			.match(/^\s*,?\s*(?:'([^']+)'|"([^"]+)"|([A-Za-z_$][\w$-]*))\s*:/);

		if (!keyMatch) {
			index += 1;
			continue;
		}

		const key = keyMatch[1] ?? keyMatch[2] ?? keyMatch[3];
		keys.push(key);
		index += keyMatch[0].length;

		let depth = 0;
		let quote: string | undefined;
		let isEscaped = false;

		while (index < source.length) {
			const character = source[index];

			if (quote) {
				if (isEscaped) {
					isEscaped = false;
					index += 1;
					continue;
				}

				if (character === '\\') {
					isEscaped = true;
					index += 1;
					continue;
				}

				if (character === quote) {
					quote = undefined;
				}

				index += 1;
				continue;
			}

			if (character === '"' || character === "'" || character === '`') {
				quote = character;
				index += 1;
				continue;
			}

			if (character === '{' || character === '[' || character === '(') {
				depth += 1;
				index += 1;
				continue;
			}

			if (character === '}' || character === ']' || character === ')') {
				depth -= 1;
				index += 1;
				continue;
			}

			if (character === ',' && depth === 0) {
				break;
			}

			index += 1;
		}
	}

	return keys;
}

function parseRootVariantGroups(componentSource: string): VariantGroup[] {
	const variantsExportIndex = componentSource.search(
		/export\s+const\s+variants\s*=\s*tv\s*\(\s*\{/
	);

	if (variantsExportIndex === -1) {
		return [];
	}

	const tvConfigOpenBraceIndex = componentSource.indexOf('{', variantsExportIndex);
	const tvConfigCloseBraceIndex = findMatchingBrace(componentSource, tvConfigOpenBraceIndex);

	if (tvConfigOpenBraceIndex === -1 || tvConfigCloseBraceIndex === -1) {
		return [];
	}

	const tvConfigBlock = componentSource.slice(tvConfigOpenBraceIndex + 1, tvConfigCloseBraceIndex);
	const variantsBlock = tvConfigBlock ? findObjectBlock(tvConfigBlock, 'variants') : undefined;

	if (!variantsBlock) {
		return [];
	}

	return parseObjectKeys(variantsBlock).map((name) => ({
		name,
		options: parseObjectKeys(findObjectBlock(variantsBlock, name) ?? '')
	}));
}

function formatComponentName(componentPath: string) {
	return componentPath
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

function loadComponents() {
	const componentPaths = new Set<string>();

	for (const filePath of Object.keys(rootComponentSources)) {
		const componentPath = filePath.match(/\.\.\/\.\.\/lib\/components\/ui\/([^/]+)\//)?.[1];

		if (componentPath) {
			componentPaths.add(componentPath);
		}
	}

	return Array.from(componentPaths)
		.map((path) => ({
			name: formatComponentName(path),
			path,
			sourcePath: `$lib/components/ui/${path}/index.js`,
			variantGroups: parseRootVariantGroups(
				rootComponentSources[`../../lib/components/ui/${path}/${path}.svelte`] ?? ''
			)
		}))
		.sort((left, right) => left.name.localeCompare(right.name));
}

export async function load() {
	const components = loadComponents();
	const theme = parseThemeBlocks(themeCss);

	return {
		components,
		theme,
		themeSourcePath: 'src/theme.css'
	};
}
