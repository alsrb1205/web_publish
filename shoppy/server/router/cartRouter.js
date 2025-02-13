import express from 'express';
import * as cartController from '../controller/cartController.js'

const router = express.Router();

router.post('/add', cartController.addCart)
        .post('/addone', cartController.addCartOne)

export default router;