import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { current_user } from '$lib/utils/store';
import { redirect } from '@sveltejs/kit';

let user, details;
current_user.subscribe((val) => {
	user = val;
});

export const load = async () => {
	try {
		const detailsRef = await getDoc(doc(db, user, 'details'));
		details = detailsRef.data();
		return details;
	} catch (error) {
		throw redirect(301, '/auth');
	}
};
