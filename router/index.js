import { Router } from "express";
import citiesRouter from './cities.js'; 

const router = Router();

router.use('/cities', citiesRouter);

export default router;