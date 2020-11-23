import { Request, Response, Router } from 'express';

import { AuthDao } from '../daos';

// Init shared
const router = Router();
const authDao = new AuthDao();

/******************************************************************************
 *                      add user - "POST /api/auth/register"
 ******************************************************************************/

router.post('/register', async (req: Request, res: Response) => {
	const { email, password, role } = req.body;
	const user = await authDao.register(email, password, role);
	return res.status(201).send(user);
});


/******************************************************************************
 *                      get user auth details - "POST /api/auth/login"
 ******************************************************************************/

router.post('/login', async (req: Request, res: Response) => {
	let response;
	let status;
	try {
		response = await authDao.login(req, res);
		status = 200;
	} catch (error) {
		response = error;
		status = 400;
	}
	return res.status(status).send(response);
});


export default router;