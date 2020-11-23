import { Request, Response } from 'express';
import { ProductDao } from '../daos';

/**
 * Instantiating product DAO object
 */
const productDao = new ProductDao();

module.exports = {
  
	/**
	 * Get all controller
   * @async
	 */
	get: async (req: Request, res: Response, next: any) => {
		try {
			const products = await productDao.read();
			return res.status(200).send(products);
		} catch (error) {
			next(error);
		}
	},

	/**
	 * Get one by _id controller
   * @async
	 */
	getById: async (req: Request, res: Response, next: any) => {
		try {
			const { _id } = req.params;
			const product = await productDao.getOne(_id);
			if (!product) {
				res.status(404).send(`Product with id: ${_id} not found!`);
			} else {
				return res.status(200).send(product);
			}
		} catch (error) {
			next(error);
		}
	},

	/**
	 * Create new controller
   * @async
	 */
	create: async (req: Request, res: Response, next: any) => {
		try {
			const data = await productDao.add(req.body);
			return res.status(201).json(data);
		} catch (error) {
			next(error);
		}
	},

	/**
	 * Update one by _id controller
   * @async
	 */
	updateById: async (req: Request, res: Response, next: any) => {
		try {
			const { _id } = req.params;
			const data = await productDao.update(_id, req.body);
			return res.status(200).json(data);
		} catch (error) {
			next(error);
		}
	},

	/**
	 * Delete one by _id controller
   * @async
	 */
	deleteById: async (req: Request, res: Response, next: any) => {
		try {
			const { _id } = req.params;
			await productDao.delete(_id);
			return res.status(200).end();
		} catch (error) {
			next(error);
		}
	}
};
