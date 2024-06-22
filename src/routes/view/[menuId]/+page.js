import customers from '../../../customers.js'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	return {
		...customers[params.menuId],
		id: params.menuId,
	};
}