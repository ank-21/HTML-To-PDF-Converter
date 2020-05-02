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



//console.log(targetFiles);
    
    // data.files = targetFiles; 

const invoice = {
    shipping: {
        name: "John Doe",
        address: "1234 Main Street",
        city: "San Francisco",
        state: "CA",
        country: "US",
        postal_code: 94111
    },
    items: [
        {
        item: "TC 100",
        description: "Toner Cartridge",
        quantity: 2,
        amount: 6000
        },
        {
        item: "USB_EXT",
        description: "USB Cable Extender",
        quantity: 1,
        amount: 2000
        }
    ],
    subtotal: 8000,
    paid: 0,
    invoice_nr: 1234
};


router.post('/data',(req,res)=>{
    console.log(req.body);
    dataConverter(invoice,req.body);
    const data = req.body;
    
    res.render('profile',{
        data
    })
})

module.exports = router;