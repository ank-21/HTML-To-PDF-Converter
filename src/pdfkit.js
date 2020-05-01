const PDFDocument = require('pdfkit');
const fs = require('fs');

const dataConverter = (data) => {
    console.log(data);
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(`output${data.name}.pdf`));
    doc.image('public/Logo.png',0,40,{fit: [70, 70]});
    doc.text(`Name - ${data.name}`,100,80, {
        width: 300,
      }
      );
      
    doc.moveDown();
    doc.text(`Email Id - ${data.email}`,100,110, {
        width: 300,
      }
      );
      
    doc.moveDown();
    doc.text(data.msg,100,130, {
        height: 300,
        width: 300,
        align: 'justify'
      }).fillColor('red');
      doc.end();

    
}

module.exports = {
    dataConverter
}