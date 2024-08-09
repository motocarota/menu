import { error } from '@sveltejs/kit';
import {menus} from '../../../menus.js'

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const data = menus[params.menuId];
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
	return Object.keys(menus).map(
		menuId => ({ menuId })
	)
}

export const prerender = true;