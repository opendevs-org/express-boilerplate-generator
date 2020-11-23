/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */

import passport from 'passport';
import bcrypt from 'bcryptjs';
import passportJWT from 'passport-jwt';
const LocalStrategy = require('passport-local').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt;
const JWTStrategy = passportJWT.Strategy;
import { DB } from '../daos/index';

passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
			passwordField: 'password',
		},
		async (email: string, password: string, done: any) => {
			try {
				const userDocument: any = await DB.Models.User.findOne({
					email: email,
				}).exec();
				const passwordsMatch = await bcrypt.compare(
					password,
					userDocument['password']
				);

				if (passwordsMatch) {
					return done(null, userDocument);
				} else {
					return done({ error: 'Incorrect Username/Password' });
				}
			} catch (error) {
				console.error(error);
				done(error);
			}
		}
	)
);

passport.use(
	new JWTStrategy(
		{
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: process.env.JWT_SECRET,
		},
		(jwtPayload: any, done: any) => {
			//In here we can access all the payload of Token, later will be used to valid autorization
			console.log('info', jwtPayload);
			return done(null, jwtPayload);
		}
	)
);
