import { Router } from "express";
import { allCities, cityByName, cityByCountry, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js"
import { update } from "../controllers/cities/update.js";
import { deleteCity } from "../controllers/cities/delete.js";
import validator from "../middlewares/validator.js";
import citySchema from "../schemas/cities/city.js";
import passport from "../middlewares/passport.js";

const router = Router();

router.get('/all', allCities)
router.get('/name/:name', cityByName); 
router.get('/country/:country', cityByCountry);
router.get('/id/:id', cityById);
router.post('/create/', passport.authenticate('jwt', { session: false }), validator(citySchema), create)
router.post('/createmany/', passport.authenticate('jwt', { session: false }), createMany)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), update);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteCity);

export default router;