import { initFirestore } from '@auth/firebase-adapter';
import { cert } from 'firebase-admin/app';

const firestore = initFirestore({
	credential: cert({
		projectId: process.env.FIREBASE_PROJECT_ID,
		clientEmail: process.env.FIREBSE_CLIENT_EMAIL,
		privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
	}),
	databaseURL: process.env.FIREBASE_DATABASE_URL,
});

export default firestore;
