import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signInGoogle from '../controllers/auth/signInGoogle.js'
import accountNotExist from "../middlewares/accountNotExist.js";
import isValidPassword from "../middlewares/isValidPassword.js";
import generateToken from "../middlewares/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middlewares/passport.js";
import passportGoogle from "../middlewares/passportGoogle.js";

const routerAuth = Router()
routerAuth.post('/signin', accountNotExist, isValidPassword, generateToken, signIn)
routerAuth.post('/signout', passport.authenticate('jwt', { session: false }), signOut)

routerAuth.get('/signin/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] }))
    
routerAuth.get('/signin/google/callback',
    passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }), 
    generateToken,
    signInGoogle)

export default routerAuth