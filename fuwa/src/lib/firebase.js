// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDugtXaVaEJD9mYBZf4s5xb2AN0jSX4NFs',
	authDomain: 'fuwa-prod-d8b88.firebaseapp.com',
	projectId: 'fuwa-prod-d8b88',
	storageBucket: 'fuwa-prod-d8b88.appspot.com',
	messagingSenderId: '828906700610',
	appId: '1:828906700610:web:4181ed60be5481217cd2db'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
