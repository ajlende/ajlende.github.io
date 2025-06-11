---
title: "Duotone filters in WordPress"
author: "Alex Lende"
date: 2023-01-20T01:32:44Z
categories:
  - Code
  - Design
---

![Creator: Science Museum, Workshops (creator); Date: 1949; Material: metal (unknown); wood (unidentified)](https://ajlende.blog/wp-content/uploads/2023/01/duotone-cover.jpg)

## Background

Duotone began as a [standalone plugin](https://github.com/Automattic/block-experiments/tree/master/blocks/duotone-filter) that added block supports for the image block. The idea was just to create a unique image effect that we thought was cool.

The feedback on the plugin was that it should be [included in core instead](https://github.com/WordPress/gutenberg/pull/26361). Moving it to core opened up the opportunity to include filters in global styles. Now, duotone works across the board for several blocks in core, but it has some inconsistencies with how other styles are applied due to some technical constraints.

## Duotone elements

SVG filters require two parts: [SVG](#duotone-svg) and [CSS](#duotone-css). The SVG contains the definition of the filter and the CSS applies the filter to an element.

### Duotone SVG

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
	<defs>
		<filter id="wp-duotone-000000-ffffff-1">
			<feColorMatrix color-interpolation-filters="sRGB" type="matrix" values="
					.299 .587 .114 0 0
					.299 .587 .114 0 0
					.299 .587 .114 0 0
					.299 .587 .114 0 0
				"></feColorMatrix>
			<feComponentTransfer color-interpolation-filters="sRGB">
				<feFuncR type="table" tableValues="0 1"></feFuncR>
				<feFuncG type="table" tableValues="0 1"></feFuncG>
				<feFuncB type="table" tableValues="0 1"></feFuncB>
				<feFuncA type="table" tableValues="1 1"></feFuncA>
			</feComponentTransfer>
			<feComposite in2="SourceGraphic" operator="in"></feComposite>
		</filter>
	</defs>
</svg>
```

This is the duotone SVG. Let's break it apart to better understand what's going on.

```xml
<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 0 0"
	width="0"
	height="0"
	focusable="false"
	role="none"
	style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"
>
```

First are the SVG attributes. Aside from `xmlns`, the attributes are used to make sure the SVG is fully hidden from the page. There are some [technical constraints](#technical-constraints) for why it is done this way.

```xml
<filter id="wp-duotone-000000-ffffff-1">
```

Each [`<filter>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter) in the SVG is assigned a unique id in order for it to be [used within the CSS](#duotone-css).

```xml
<feColorMatrix color-interpolation-filters="sRGB" type="matrix" values="
	.299 .587 .114 0 0
	.299 .587 .114 0 0
	.299 .587 .114 0 0
	.299 .587 .114 0 0
"></feColorMatrix>
```

The first image processing step of a duotone filter is converting to grayscale. Values in the [`<feColorMatrix>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix) are from the [WCAG 2.0 brightness](https://www.w3.org/WAI/GL/WCAG20/WD-WCAG20-20030418.html#color-contrast) calculation. 

```xml
<feComponentTransfer color-interpolation-filters="sRGB">
	<feFuncR type="table" tableValues="0 1"></feFuncR>
	<feFuncG type="table" tableValues="0 1"></feFuncG>
	<feFuncB type="table" tableValues="0 1"></feFuncB>
	<feFuncA type="table" tableValues="1 1"></feFuncA>
</feComponentTransfer>
```

The second step is mapping the grayscale to the colors with [`<feComponentTransfer>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer). In the example, the colors used are black and white (`rgba(0,0,0,1)` and `rgba(255,255,255,1)`). The [`tableValues`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/tableValues) contain the duotone colors split into their to red (R), green (G), blue (B), and alpha (A) components. You can read each color as a vertical column across all of the `<feFunc{R,G,B,A}>` elements.

```xml
<feComposite in2="SourceGraphic" operator="in"></feComposite>
```

We lost the original alpha channel during the component transfer, so the final part just re-applies the alpha with [`<feComposite>`](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite).

### Duotone CSS

```css
img {
	filter: url('#wp-duotone-000000-ffffff-1');
}
```

The CSS [`filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) property applies the SVG filter to an element using the URL of the filter id in the [duotone SVG](#duotone-svg).

## Storing duotone in Gutenberg

Due to [technical constraints](#technical-constraints), we can't store the SVG information in block attributes, and it [isn't very convenient](#ux-dx-considerations) to hand-code an SVG everywhere we want to use it within Gutenberg anyway. So the duotone filter is always stored as an array of colors from dark to light—this differs from other block supports who store CSS values directly.

### Duotone attribute

```javascript
{
	"style": {
		"color": {
			"duotone": [ "#000000", "#FFFFFF" ]
		}
	}
}
```

In block attributes, duotone is always stored in `style.color.duotone`. Nothing else is serialized on the block.

### Duotone settings

```javascript
{
	"version": 2,
	"settings": {
		"color": {
			"duotone": [
				{
					"name": "Black and white",
					"slug": "black-and-white",
					"colors": [ "#000000", "#FFFFFF" ]
				}
			]
		}
	}
}
```

Presets in theme.json generate global SVGs and CSS custom properties to [reference them in styles](#duotone-style). Unlike other block supports like palette and gradients, classes are not generated.

### Duotone style

```javascript
{
	"version": 2,
	"styles": {
		"blocks": {
			"core/image": {
				"filter": {
					"duotone": "var(--wp--preset--duotone--black-and-white)"
				}
			}
		}
	}
}
```

The filter can be applied to blocks with duotone support using the CSS custom property generated from [duotone settings](#duotone-settings).

## Enabling duotone for a block

```javascript
{
	"supports": {
		"color": {
			"__experimentalDuotone": "img"
		}
	}
}
```

Each block that wants to support duotone must opt-in by specifying the selector (scoped to the block) to apply the filter to under `supports.color.duotone` in block.json.

The intention is to move the supports to a simple boolean under `supports.filter.duotone` and specify the selector in the block CSS (see [WordPress/gutenberg#42870](https://github.com/WordPress/gutenberg/pull/42870)).

## UX/DX considerations

User experience and developer experience have a few considerations worth mentioning.

![How duotone would look on the video block](https://ignitep2.files.wordpress.com/2022/08/screen-shot-2022-08-19-at-15.40.44.png)

Accessibility is important! Duotone isn't currently supported on `core/video` blocks because [the filter gets applied to the video controls](https://github.com/WordPress/gutenberg/pull/26361#issuecomment-776256390) and the contrast will be strictly less than the original unless you are using a simple black and white filter.

Duotone should be available for extenders to use:

- as a [block support](#enabling-duotone-for-a-block) for block authors,
- in [global styles](#duotone-settings) for theme authors,
- in [block patterns](#duotone-attribute) for theme authors,
- and as [a framework](#future-work) (in the future) for plugin authors to create new and unique filters.

As theme.json files are currently hand-coded, it should be easy to define a [duotone filter in JSON](#storing-duotone-in-gutenberg). 

## Technical constraints

The goal when creating duotone was to make it work as similar to colors and gradients as possible. However, duotone has some unique constraints that make the underlying code somewhat different from colors and gradients.

- CSS filters *cannot* be applied to a container—the filter applies to all content.
- SVGs *cannot* be hidden with `display: none;`—the inner content of the SVG doesn't get processed causing blocks with the filter to be invisible.
- SVGs *cannot* be stored in the saved block markup—`wp_kses()` strips SVGs.
- SVG filters *cannot* be inlined into CSS—Safari doesn't recognize the filter.
- SVG filters *cannot* be rendered in the document head—Safari doesn't recognize the filter.
- SVG filters *must* be rendered before the content they are filtering—Safari renders incorrect colors on first paint.

![Firefox/Chrome/Edge](https://ajlende.blog/wp-content/uploads/2023/01/duotone-chrome.png)

![Safari](https://ajlende.blog/wp-content/uploads/2023/01/duotone-safari.png)

Safari is particularly picky about how the SVG is placed in the document—check out [this codepen](https://codepen.io/ajlende/pen/rNwjgYa) to see for yourself. Forcing a repaint fixes the color issue for duotone filters after the content they are filtering in Safari, but it isn't convenient to have to run extra JavaScript on the page to do that.

## Future work

There are two tracking issues on GitHub right now: one for [SVG filter support in general](https://github.com/WordPress/gutenberg/issues/47302) and one for [Duotone specific enhancements](https://github.com/WordPress/gutenberg/issues/47304). 

I see duotone as a seed for creative expression on the web. I hope one day the features we've added to core can enable plugin authors to create their own filters for even more unique effects. A lot can be done with SVG filters: [The Art Of SVG Filters And Why It Is Awesome](https://www.smashingmagazine.com/2015/05/why-the-svg-filter-is-awesome/), [Grainy Gradients](https://css-tricks.com/grainy-gradients/), [Creating Patterns With SVG Filters](https://css-tricks.com/creating-patterns-with-svg-filters/), to name a few. It could be something like [Lightroom presets](https://exchange.adobe.com/creativecloud.lightroom.html) but built right into WordPress. Many effects are too niche or opinionated for core, but opening SVG filters up to plugin authors can give users access to a plethora of design tools that they've never seen before. 