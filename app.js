import express from 'express';
import cors from 'cors';

import mongoose from 'mongoose';
import FormRouter from './routes/form.js';
import JobRouter from './routes/job.js';
import LoginRouter from './routes/login.js';
import ApplicationRouter from './routes/application.js';


const app = express();
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/about', (req, res) => {
    res.render("about");
    
});

app.get('/contact', (req, res) => {
    res.render("contact");
    
});

app.get('/home', (req, res) => {
    res.render("home");
    
});
app.get('/cart', (req, res) => {
    res.render("cart");
    
});

app.get('/register', (req, res) => {
    res.render("reg");
    
});
app.get('/', (req, res) => {
    res.render("login");
});
app.get('/vacancy', (req, res) => {
    res.render("vacancy");
});
app.get('/postjobs', (req, res) => {
    res.render("postjobs");
});
app.get('/application', (req, res) => {
    res.render("application");
});

app.use('/form', FormRouter, JobRouter, LoginRouter, ApplicationRouter);






async function main (){
    await mongoose.connect('mongodb+srv://Adesinaola1234:5MBQFimZoV8Xe9ER@cluster0.jobmt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   console.log("step one: Database connected")
   }
app.listen('4000', ()=>{
    main().catch((err)=>{console.log(err)});
    console.log("Server listening on on port 4000");
    
})