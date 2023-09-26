import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../libs/mongodb';
import Model from '../../models/model';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	const { method } = req;
	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const data = await Model.find({}); // find all the data in our database
				res.status(200).json({ success: true, data });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		case 'POST':
			try {
				const model = await Model.create(
					req.body,
				); /* create a new model in the database */
				res.status(201).json({ success: true, data: model });
			} catch (error) {
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}
