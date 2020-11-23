import { Schema, model, Document, Model } from 'mongoose';


export interface IProduct {
  name: string;
  category: string;
  unit: number;
}

export interface IProductDoc extends IProduct, Document { }

export type IProductModel = Model<IProductDoc>

export class Product {

  private productModel: Model<IProductDoc>;


  constructor() {
  	const schema = new Schema({
  		name: { type: String, required: true },
  		category: { type: String, required: true },
  		unit: { type: Number, required: true }
  	}, {
  		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  	});

  	this.productModel = model<IProductDoc>('Product', schema);
  }

  public get model(): Model<IProductDoc> {
  	return this.productModel;
  }
}
