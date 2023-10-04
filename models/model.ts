import mongoose, { Schema } from 'mongoose';

export interface NPMIs extends mongoose.Document {
	title: string;
	content: string;
}

const NPMIsSchema = new Schema<NPMIs>(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
		collection: 'npmiLibrary',
	},
);

export default mongoose.models.NPMIs ||
	mongoose.model<NPMIs>('NPMIs', NPMIsSchema);
