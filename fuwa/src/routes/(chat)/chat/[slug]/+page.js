import { db } from '$lib/firebase';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { current_user } from '$lib/utils/store';
import { redirect } from '@sveltejs/kit';

let user,
	details,
	chats = {};
current_user.subscribe((val) => {
	user = val;
});

const fetchChats = async (f) => {
	let messages = [];
	const docRef = await getDocs(collection(db, user, 'chatpool', f));
	docRef.forEach((e) => {
		messages.push(e.data());
	});
	return messages;
};

export const load = async () => {
	try {
		const detailsRef = await getDoc(doc(db, user, 'details'));
		details = detailsRef.data();
		for (var i = 0; i < details.friends.length; i++) {
			let s = details.friends[i];
			fetchChats(details.friends[i])
				.then((res) => {
					chats[s] = res;
				})
				.catch((err) => {
					console.log(err);
				});
		}
		return { details, chats };
	} catch (error) {
		console.log(error);
		throw redirect(301, '/auth');
	}
};
