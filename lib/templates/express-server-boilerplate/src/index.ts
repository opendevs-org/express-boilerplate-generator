import './LoadEnv'; // Must be the first import
import app from './server';

/**
 * Port at which server will run
 */
const port = Number(process.env.PORT || 3000);

/**
 * Starting the server
 * @param port Port at which server will run
 */
const server = app.listen(port, () => {
	console.log('express server started on port: ' + port);
});

/**
 * Exporting server instance
 */
export default server;
