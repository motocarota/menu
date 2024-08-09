import {clients, menus} from '../../menus.js'

/** @type {import('./$types').PageServerLoad} */
export function load() {
	const list = menus
		? clients
		: [];

	return {
		list
	};
}

export const prerender = true;