const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const photoGallery = express();

photoGallery.use(express.static('public'));

photoGallery.use(bodyParser.json());
photoGallery.engine('html', ejs.renderFile);

photoGallery.get('/:id', (req, res) => {
  res.render('../public/index.html');
});
photoGallery.set('view engine', 'html');


photoGallery.listen(port, () => {
  console.log(`Proxy Server Listening on Port ${port} `)
})
