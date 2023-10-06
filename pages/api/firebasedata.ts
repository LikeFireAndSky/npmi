import { collection, getDocs, addDoc } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../libs/firebase.config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;
	switch (method) {
		case 'GET':
			try {
				const querySnapshot = await getDocs(collection(db, 'users'));
				const data = querySnapshot.docs.map((doc) => doc.data());
				res.status(200).json({ success: true, data });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const docRef = await addDoc(collection(db, 'users'), {
					...req.body,
				});
				res.status(201).json({ success: true, data: docRef });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
};

export default handler;
