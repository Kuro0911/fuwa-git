// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDxC2ivWw1EYqrz-ZBOy97rFM66_6ynZnk',
	authDomain: 'fuwa-test.firebaseapp.com',
	projectId: 'fuwa-test',
	storageBucket: 'fuwa-test.appspot.com',
	messagingSenderId: '1083488838868',
	appId: '1:1083488838868:web:ae2cdab3f4e4b55ef80741'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
