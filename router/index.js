import { Router } from "express";
import citiesRouter from './cities.js';
import itinerariesRouter from './itineraries.js';
import userRouter from './users.js';
import routerAuth from './auth.js'

const router = Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mytineraries</title>
        </head>
        <body>
            <h1>Mytineraries - Backend</h1>
        </body>
        </html>
    `);
});

router.use('/cities', citiesRouter);
router.use('/itineraries', itinerariesRouter);
router.use('/users', userRouter);
router.use('/auth', routerAuth)

export default router;