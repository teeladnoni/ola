import express from 'express';
const routes = express.Router();
import {applyJob} from '../controller/application.js';

routes.post('/apply-job', applyJob);

export default routes;