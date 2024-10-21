import { Router } from "express";
import { allCities, cityByName, cityByCountry, cityById } from "../controllers/cities/read.js";
import { create, createMany } from "../controllers/cities/create.js"

export {  };

const router = Router();

router.get('/all', allCities); 
router.get('/name/:name', cityByName); 
router.get('/country/:country', cityByCountry);
router.get('/id/:id', cityById); 
router.post('/create/', create)
router.post('/createmany/', createMany)


export default router;