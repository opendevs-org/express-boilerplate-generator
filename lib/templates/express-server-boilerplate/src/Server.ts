import morgan from 'morgan';
import helmet from 'helmet';
import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import BaseRouter from './routes';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger.json';

// Init express
const app = express();

/**
 * Set basic express settings
 */

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/**
 * Show routes details in dev output in console during development
 * else, show routes details in tiny form
 */
if (process.env.NODE_ENV === 'production') {
	app.use(morgan('tiny'));
} else {
	app.use(morgan('dev'));
}

/**
 * Helmet for basic security in production
 */
if (process.env.NODE_ENV === 'production') {
	app.use(helmet());
}

/**
 * Registering base API routes
 */
app.use('/api', BaseRouter);

/**
 * Registering API routes for swagger
 */
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


/**
 * Catch API errors throughout the application
 */
app.use((req: Request, res: Response, next) => {
	const err: any = new Error('Not Found');
	err.status = 404;
	next(err);
});

app.use((err: any, req: Request, res: Response, next: any) => {
	console.log(err);
	if (err.status === 404) res.status(404).json({ message: 'Not found' });
	else res.status(500).json({ message: 'Something looks wrong :( !!!' });
});

/**
 * Exporting express app instance
 */
export default app;
