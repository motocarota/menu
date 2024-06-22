import customers from '../../../customers.js'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	return {
		...customers[params.menuId],
		id: params.menuId,
	};
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