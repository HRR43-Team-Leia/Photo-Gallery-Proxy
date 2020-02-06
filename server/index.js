const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const airbnbEx= express();

airbnbEx.use(express.static('public'));

airbnbEx.use(bodyParser.json());
airbnbEx.engine('html', ejs.renderFile);

airbnbEx.get('/:id', (req, res) => {
  res.render('../public/index.html');
});
airbnbEx.set('view engine', 'html');


airbnbEx.listen(port, () => {
  console.log(`Proxy Server Listening on Port ${port} `)
})
