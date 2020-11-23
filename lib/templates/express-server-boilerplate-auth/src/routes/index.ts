import { Router } from 'express';
import passport from 'passport';
import ProductRouter from './product.api';
import AuthRouter from './auth.api';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/auth', AuthRouter);

// Add one more middleware namely `authorize` after passport.authenticate to authorize user for access
// console `req.user` and `req` in authorize middleware
router.use('/product', passport.authenticate('jwt', {session: false}), ProductRouter);

// Export the base-router
export default router;
