const express = require('express');
const router = express.Router();
const {dataConverter} = require('./pdfkit'); 
const path = require('path');
const fs = require("fs");

const dirPath = path.join(__dirname, "../");

// const files = fs.readdirSync(dirPath).map(name => {
//   return {
//     name: path.basename(name, ".pdf"),
//     url: `/${name}`
//   };
// });

// var targetFiles = files.filter(function(file) {
//     return path.extname(file.url).toLowerCase() === '.pdf';
// });


router.post('/data',(req,res)=>{
    console.log(req.body);
    dataConverter(req.body);
    const data = req.body;
    // console.log(targetFiles);
    
    // data.files = targetFiles;
    res.render('profile',{
        data
    })
})

module.exports = router;