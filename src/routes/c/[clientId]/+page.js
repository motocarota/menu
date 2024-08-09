import { error } from '@sveltejs/kit';
import { clients, menus } from '../../../menus.js'

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const client = clients[params.clientId];

	const m = Object.keys(menus)
		.map(k => ({
			...menus[k],
			id: k,
		}))
		.filter(m => m.clientId === params.clientId)

	console.log({
		menus: m, clientId: params.clientId
	})

	if (client) {
		return {
			client,
			menus: m,
			id: params.clientId,
		};
	}
	
	error(404, 'Not found');
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return Object.keys(clients).map(
		clientId => ({ clientId })
	)
}

export const prerender = true;