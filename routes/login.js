import express from 'express';
const routes = express.Router();
import { getOneUser } from '../controller/form.js';


routes.post('/get-user', getOneUser);

export default routes;
