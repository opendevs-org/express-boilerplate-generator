import { Router } from 'express';
import ProductRouter from './Product';

const router = Router();

/**
 * Registering /product sub-routes
 */
router.use('/product', ProductRouter);

/**
 * Exporting registered routes
 */
export default router;
