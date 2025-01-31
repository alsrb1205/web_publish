import express from 'express';
import * as controller from '../controller/testController.js';

const testRouter = express.Router();

// router 정보 매핑
testRouter.get('/', controller.getTest)
        .get('/product', controller.getTestProduct)
        .get('/:id', controller.getTestId);

export default testRouter;