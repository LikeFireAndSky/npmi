// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
// 	apiKey: 'AIzaSyBDH-un0SNZKtG48NB_536g6soSRCR8qD4',
// 	authDomain: 'npmi-6cb48.firebaseapp.com',
// 	projectId: 'npmi-6cb48',
// 	storageBucket: 'npmi-6cb48.appspot.com',
// 	messagingSenderId: '712773578742',
// 	appId: '1:712773578742:web:d97e95748967b15ef661d7',
// };

const firebaseConfig = {
	apiKey: process.env.FIREBASE_APIKEY,
	authDomain: process.env.FIREBASE_AUTHDOMAIN,
	projectId: process.env.FIREBASE_PROJECTID,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGINSENDERID,
	appId: process.env.FIREBASE_APPID,
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, app };
