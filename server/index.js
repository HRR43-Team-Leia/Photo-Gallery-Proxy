const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000;
const photoGallery = express();


photoGallery.listen(port, () => {
  console.log(`Proxy Server Listening on port ${port} `)
})
