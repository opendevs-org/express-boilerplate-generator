import { Schema, model, Document, Model } from 'mongoose';

export interface IAuth {
	email: string;
	password: string;
	role: string;
  }
  
export interface IAuthDoc extends IAuth, Document { }
  
export type IAuthModel = Model<IAuthDoc>
  
export class User {
  
	private authModel: Model<IAuthDoc>;
  
  
	constructor() {
		const schema = new Schema({
			email: { type: String, required: true, unique: true },
			password: { type: String, required: true },
			role: { type: String, required: true }
		}, {
			timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
		});
  
		this.authModel = model<IAuthDoc>('User', schema);
	}
  
	public get model(): Model<IAuthDoc> {
		return this.authModel;
	}
}
