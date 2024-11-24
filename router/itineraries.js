import { Router } from "express";
import { allItineraries, itinerariesByCity, itineraryById } from "../controllers/itineraries/read.js";
import { create, createMany } from "../controllers/itineraries/create.js"
import { update } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";
import validator from "../middlewares/validator.js";
import passport from '../middlewares/passport.js';
import itinerarySchema from "../schemas/itineraries/itinerary.js";

const router = Router();

router.get('/all', passport.authenticate('jwt', { session: false }), allItineraries);
router.get('/itinerary/:itinerary', itinerariesByCity);
router.get('/id/:id', passport.authenticate('jwt', { session: false }), itineraryById);
router.post('/create/', passport.authenticate('jwt', { session: false }),validator(itinerarySchema), create)
router.post('/createmany/', passport.authenticate('jwt', { session: false }),createMany)
router.put('/update/:id', passport.authenticate('jwt', { session: false }), update);
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), deleteItinerary);

export default router;