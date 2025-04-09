import express from 'express';
import { addJob, getJobs } from '../controller/job.js';
const routes = express.Router();





routes.post('/addjob', addJob)
routes.get('/getjobs', getJobs)

export default routes;