const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    console.log('Here');
    res.json({name:"john doe",
    password:'123'});
});

app.listen(5000);