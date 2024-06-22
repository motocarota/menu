import { error } from '@sveltejs/kit';
import customers from '../../../customers.js'

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const data = customers[params.menuId];
	if (data) {
		return {
			...data,
			id: params.menuId,
		};
	}
	
	error(404, 'Not found');
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return [
		{ menuId: 'bagni-giovanni' },
		{ menuId: 'delfino-bianco-vini' },
		{ menuId: 'delfino-bianco-special' },
	];
}

export const prerender = true;