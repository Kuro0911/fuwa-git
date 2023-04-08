import { db } from '$lib/firebase';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { current_user } from '$lib/utils/store';
import { redirect } from '@sveltejs/kit';
// import { redirect } from '@sveltejs/kit';

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
function sortObject(obj) {
	return Object.keys(obj)
		.sort()
		.reduce(function (result, key) {
			result[key] = obj[key];
			return result;
		}, {});
}
export const load = async ({ params }) => {
	let details, friend;
	try {
		const detailsRef = await getDoc(doc(db, user, 'details'));
		details = detailsRef.data();
		friend = await fetchFriendDetails(details, params.slug);
		let chats,
			processed_chats = [];
		const chatRef = doc(db, user, 'chatpool', friend.id, 'messages');
		const tempChats = await getDoc(chatRef);
		chats = tempChats.data();
		chats = sortObject(chats);
		for (const t in chats) {
			let c = chats[t].split('$');
			processed_chats.push({ hash: c[0], msg: c[1] });
		}
		onSnapshot(chatRef, (docsSnap) => {
			(chats = []), (processed_chats = []);
			chats = docsSnap.data();
			chats = sortObject(chats);
			for (const t in chats) {
				let c = chats[t].split('$');
				processed_chats.push({ hash: c[0], msg: c[1] });
			}
			console.log('test', processed_chats);
		});
		return { details, friend, processed_chats };
	} catch (error) {
		console.log(error);
		throw redirect(301, '/auth');
	}
};
