import { Router } from 'express';
const { get, getById, create, updateById, deleteById } = require('../controllers/Product');

const router = Router();

/**
 * Registering app routes and their controllers
 * / GET to get all
 * /:_id GET for fetching one by _id
 * / POST to create new
 * /:_id PUT to update one by _id
 * /:_id DELETE for delete one by _id
 *
 * @category Routes
 */
router.get('/', get);
router.get('/:_id', getById);
router.post('/', create);
router.put('/:_id', updateById);
router.delete('/:_id', deleteById);

export default router;
