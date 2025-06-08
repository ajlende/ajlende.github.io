function* seededRandoms(seed: number): Generator<number> {
	const modulus = 0x7fffffff;
	seed = (seed >>> 0) % modulus;
	while (true) {
		seed = Math.imul(seed, 0x0034e7f7) % modulus;
		yield (seed & modulus) / modulus;
	}
}

function hashBuffer(buffer: ArrayBuffer): number {
	return new Uint32Array(buffer).reduce(
		(hash, data) => Math.imul(hash, 0x01000193) ^ data,
		0x811c9dc5
	);
}

interface Point {
	x: number;
	y: number;
}

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
