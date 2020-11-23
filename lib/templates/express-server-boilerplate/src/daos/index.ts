import { connect, connection, Connection } from 'mongoose';
import { Product, IProductModel } from '../models/index';

/** 
 * Interface for defining Model object
 */
declare interface IModels {
  Product: IProductModel;
}

/**
 * DB class
 */
export class DB {

  /**
   * @hidden
   */
  private static instance: DB;
  private mongoDB: Connection;
  private models: IModels;

  constructor() {
  	try {
  		/**
       * Connecting to mongo db with options: { useNewUrlParser: true, useUnifiedTopology: true }
       */
  		connect(process.env.MONGO_URL as string, { useNewUrlParser: true, useUnifiedTopology: true });
  	} catch (err) {
  		console.error(err);
  	}
  	this.mongoDB = connection;
  	this.mongoDB.on('open', this.connected);
  	this.mongoDB.on('error', this.error);

  	/**
     * Instantiating all the models into an object
     */
  	this.models = { Product: new Product().model };
  }

  /**
   * Function to return global model
   * @returns all the models
   */
  public static get Models() : IModels {
  	if (!DB.instance) {
  		DB.instance = new DB();
  	}
  	return DB.instance.models;
  }

  /**
   * @hidden
   */
  private connected() {
  	console.info('Mongoose has connected');
  }

  /**
   * @hidden
   */
  private error(error: Error) {
  	console.info('Mongoose has errored', error);
  }
}

export { ProductDao, IProductDao } from './Product/ProductDao';
