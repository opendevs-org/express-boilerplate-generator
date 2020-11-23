/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express';
import { IAuth } from '../../models/index';
import { DB } from '../index';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export interface IAuthDao {
	register: (email: string, password: string, role: string) => Promise<IAuth>;
	login: (req: Request, res: Response) => Promise<any>;
}

export class AuthDao implements IAuthDao {

	public async register(email: string, password: string, role: string): Promise<IAuth> {
		try {
			const passwordHash = await bcrypt.hash(password, 10);
			const newUser = await new DB.Models.User({ email, password: passwordHash, role}).save();
			return newUser;
		} catch (err) {
			throw err;
		}
	}

	public async login(req: Request, res: Response): Promise<any> {
		try {
			return new Promise((resolve, reject) => {
				passport.authenticate('local', { session: false }, (error, user) => {
					if (error || !user) {
						console.log('error', error);
						reject(error);
						return;
					}
	
					/** This is what ends up in our JWT */
					const payload = {
						email: user.email,
						role: user.role,
					};
	
					/** assigns payload to req.user */
	
					/** generate a signed json web token and return it in the response */
					const token = jwt.sign(payload, process.env.JWT_SECRET, {
						expiresIn: '12h',
					});
	
					resolve({payload, token});
				})(req, res);
			});
		} catch (err) {
			throw err;
		}
	}

}
