import { Schema, model, Document, Model } from 'mongoose';

/** 
 * Interface for defining Product structure
 */
export interface IProduct {
  name: string;
  category: string;
  unit: number;
}

/**
 * IProductDoc extends multiple interfaces: custom one (IProduct) & mongoose provided (Document)
 */
export interface IProductDoc extends IProduct, Document { }

/**
 * Defining type for Product Model
 */
export type IProductModel = Model<IProductDoc>

/**
 * Product class
 */
export class Product {

  /**
   * variable to store product model
   */
  private productModel: Model<IProductDoc>;


  constructor() {
  	/**
     * Creating new schema instance
     */
  	const schema = new Schema({
  		name: { type: String, required: true },
  		category: { type: String, required: true },
  		unit: { type: Number, required: true }
  	}, {
  		timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  	});

  	/**
     * Registering schema instance as Product model
     */
  	this.productModel = model<IProductDoc>('Product', schema);
  }

  /**
   * Function to return the model
   * @returns product model
   */
  public get model(): Model<IProductDoc> {
  	return this.productModel;
  }
}
