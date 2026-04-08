import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Shadcn's utility function to merge class names.
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, 'child'> : T;
export type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

/**
 * A simple seeded random number generator.
 * @param seed - The seed to use for the random number generator.
 * @returns A generator that yields random numbers between 0 and 1.
 */
function* seededRandoms(seed: number): Generator<number> {
	const modulus = 0x7fffffff;
	seed = (seed >>> 0) % modulus;
	while (true) {
		seed = Math.imul(seed, 0x0034e7f7) % modulus;
		yield (seed & modulus) / modulus;
	}
}

/**
 * A simple hash function for ArrayBuffers.
 * @param buffer - The buffer to hash.
 * @returns The hash of the buffer.
 */
function hashBuffer(buffer: ArrayBuffer): number {
	return new Uint32Array(buffer).reduce(
		(hash, data) => Math.imul(hash, 0x01000193) ^ data,
		0x811c9dc5
	);
}

export interface Point {
	x: number;
	y: number;
}

/**
 * Generates a random distribution of points in a circle.
 * @param density - The density of the points in the circle.
 * @param radius - The radius of the circle.
 * @returns An array of points in the circle.
 */
export function randomCircularPointDistribution(density: number, radius: number): Point[] {
	const seed = hashBuffer(new Float64Array([density, radius]).buffer);
	const prng = seededRandoms(seed);

	const area = Math.PI * radius * radius;

	return Array.from({ length: Math.floor(area * density * 1e-6) }, () => {
		const a = prng.next().value * 2 * Math.PI;
		const r = radius * Math.sqrt(prng.next().value);

		return {
			x: Math.round(r * Math.cos(a)),
			y: Math.round(r * Math.sin(a))
		};
	});
}
