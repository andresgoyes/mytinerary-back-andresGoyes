import { Router } from "express";
import { allItineraries, itinerariesByCity, itineraryById } from "../controllers/itineraries/read.js";
import { create, createMany } from "../controllers/itineraries/create.js"
import { update } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";

const router = Router();

router.get('/all', allItineraries); 
router.get('/itinerary/:itinerary', itinerariesByCity); 
router.get('/id/:id', itineraryById); 
router.post('/create/', create)
router.post('/createmany/', createMany)
router.put('/update/:id', update);
router.delete('/delete/:id', deleteItinerary);

export default router;