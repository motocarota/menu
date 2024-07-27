import menus from '../../menus.js'

/** @type {import('./$types').PageServerLoad} */
export function load() {
	const list = menus
		? Object.keys(menus)
		: [];

	return {
		list
	};
}

export const prerender = true;