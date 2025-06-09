import { error } from '@sveltejs/kit';
import { getProject } from '$lib/projects.js';
import type { PageLoad } from './$types.js';

export const load: PageLoad = ({ params }) => {
	const project = getProject(params.slug);

	if (!project) {
		error(404, 'Project not found');
	}

	return {
		project
	};
};
