import { db } from '$lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { current_user } from '$lib/utils/store';
import { redirect } from '@sveltejs/kit';

let user;
current_user.subscribe((val) => {
	user = val;
});

// const fetchChats = async (f) => {
// 	let messages = [];
// 	const docRef = await getDocs(collection(db, user, 'chatpool', f));
// 	docRef.forEach((e) => {
// 		messages.push(e.data());
// 	});
// 	return messages;
// };

const fetchFriendDetails = async (details, slug) => {
	let temp = [];
	for (var i = 0; i < details.friends.length; i++) {
		let friend = details.friends[i];
		const friendRef = await getDoc(doc(db, friend, 'details'));
		let friendData = friendRef.data();
		temp.push({ ...friendData, id: friend });
	}
	return temp.find((f) => f.id === slug);
};

export const load = async ({ params }) => {
	let details, friend;
	try {
		const detailsRef = await getDoc(doc(db, user, 'details'));
		details = detailsRef.data();
		// for (var i = 0; i < details.friends.length; i++) {
		// 	let s = details.friends[i];
		// 	fetchChats(details.friends[i])
		// 		.then((res) => {
		// 			chats[s] = res;
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// }
		friend = await fetchFriendDetails(details, params.slug);
		return { details, friend };
	} catch (error) {
		console.log(error);
		throw redirect(301, '/auth');
	}
};
