import { IProduct } from '../../models/index';
import { DB } from '../index';


/** 
 * Interface for defining methods to be implemented
 */
export interface IProductDao {
	read: () => Promise<IProduct[]>;
	getOne: (_id: string) => Promise<IProduct | null>;
	add: (product: IProduct) => Promise<IProduct>;
	update: (_id: string, product: IProduct) => Promise<IProduct>;
	delete: (_id: string) => Promise<void>;
}

/**
 * Class for Product DAO, contains every methods possible on Product collection
 * {@linkcode IProductDao}
 */
export class ProductDao implements IProductDao {


	/**
   * Get one by_id
	 * @param id
   * @async
   * @returns Promise<IProduct | null>
	 */
	public async getOne(_id: string): Promise<IProduct | null> {
		try {
			const data = await DB.Models.Product.find({ _id }).exec();
			if (data) {
				return data[0];
			}
			throw new Error('Product not found!');
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Get all
   * @async
   * @returns Promise<IProduct[]>
	 */
	public async read(): Promise<IProduct[]> {
		try {
			const data = await DB.Models.Product.find({}).exec();
			return data;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Create new
   * @async
	 * @param product
   * @returns Promise<IProduct>
	 */
	public async add(product: IProduct): Promise<IProduct> {
		try {
			const newProduct = await new DB.Models.Product(product).save();
			return newProduct;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Update one
   * @async
	 * @param _id
	 * @param product
   * @returns Promise<IProduct>
	 */
	public async update(_id: string, product: IProduct): Promise<IProduct> {
		try {
			await DB.Models.Product.findOneAndUpdate({ _id }, product).exec();
			return product;
		} catch (err) {
			throw err;
		}
	}


	/**
	 * Delete one
   * @async
	 * @param _id
   * @returns Promise<void>
	 */
	public async delete(_id: string): Promise<void> {
		try {
			await DB.Models.Product.findByIdAndDelete({ _id }).exec();
		} catch (err) {
			throw err;
		}
	}
}
