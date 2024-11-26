import { Router } from "express";
import { allUsers, userById} from "../controllers/users/read.js";
import { register } from "../controllers/users/register.js";
import updateUser from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import accountExist from "../middlewares/accountExist.js";
import createHash from "../middlewares/createHash.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/users/register.js";
import passport from "../middlewares/passport.js";
import generateToken from "../middlewares/generateToken.js";

const router = Router()

router.get('/all', passport.authenticate('jwt', { session: false }), allUsers)
router.get('/id/:id', passport.authenticate('jwt', { session: false }), userById)
router.post('/register', validator(registerSchema), accountExist, createHash, generateToken, register)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), createHash, updateUser)
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteUser)

export default router