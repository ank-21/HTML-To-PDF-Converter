const express = require('express');
const path = require('path');

const app = express();
const router = require('./router');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/',router);

//for static page
const publicDirectoryPath = path.join(__dirname,'../public');
app.use(express.static(publicDirectoryPath));

app.set('view engine','ejs');

const port = 3000;

app.listen('3000',()=>{
    console.log("Port is running");
    
})