import express from 'express';
const routes = express.Router();
import {addForm} from '../controller/form.js';

routes.post('/add-form', addForm);


export default routes;

 