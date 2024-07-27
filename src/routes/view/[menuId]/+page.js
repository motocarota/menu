import { error } from '@sveltejs/kit';
import customers from '../../../menus.js'

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
		{ menuId: 'bagni-giovanni-vini' },
		{ menuId: 'bagni-giovanni-bar' },
		{ menuId: 'delfino-bianco-vini' },
		{ menuId: 'delfino-bianco-special' },
		{ menuId: 'pescou-vini' },
		{ menuId: 'fieschi-vini' },
	];
}

export const prerender = true;