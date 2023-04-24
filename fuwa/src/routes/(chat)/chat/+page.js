import { current_user } from '$lib/utils/store';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	let user;
	current_user.subscribe((val) => {
		user = val;
	});
	if (user == '') {
		throw redirect(301, '/auth');
	}
};
