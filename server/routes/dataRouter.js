import express from 'express';
import {getData} from '../controllers/dataController.js';

const dataRouter = express.Router();

dataRouter.get('/', getData);

export default dataRouter;
