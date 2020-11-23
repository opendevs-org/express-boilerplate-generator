import { Request, Response, Router } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

import { ProductDao } from '../daos';

// Init shared
const router = Router();
const productDao = new ProductDao();


/******************************************************************************
 *                      Get All Products - "GET /api/product/read"
 ******************************************************************************/

router.get('/read', async (req: Request, res: Response) => {
	const products = await productDao.read();
	return res.status(200).send(products);
});


/******************************************************************************
 *                      Get single Product - "GET /api/product/read/:_id"
 ******************************************************************************/

router.get('/read/:_id', async (req: Request, res: Response) => {
	const { _id } = req.params as ParamsDictionary;
	const product = await productDao.getOne(_id);
	return res.status(200).send(product);
});


/******************************************************************************
 *                       Add - "POST /api/product/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
	await productDao.add(req.body);
	return res.status(201).end();
});


/******************************************************************************
 *                       Update - "PUT /api/product/update/:_id"
 ******************************************************************************/

router.put('/update/:_id', async (req: Request, res: Response) => {
	const { _id } = req.params as ParamsDictionary;
	await productDao.update(_id, req.body);
	return res.status(200).end();
});


/******************************************************************************
 *                    Delete - "DELETE /api/product/delete/:_id"
 ******************************************************************************/

router.delete('/delete/:_id', async (req: Request, res: Response) => {
	const { _id } = req.params as ParamsDictionary;
	await productDao.delete(_id);
	return res.status(200).end();
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
