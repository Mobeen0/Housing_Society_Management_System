const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();

const MONGOURL = "mongodb://localhost:27017/housingSociety";
mongoose.connect(MONGOURL).then(()=>console.log('Connected to MongoDB'));

const LoginRouter = require('./routes/LoggedIn');

app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from my front end
  }));


app.get('/',(req,res)=>{
    console.log('Here');
    res.send('zEHAHAHA')
});

app.use('/Login',LoginRouter);

app.listen(5000);