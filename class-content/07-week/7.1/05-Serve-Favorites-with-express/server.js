// Requiring dependencies

// Set our port to 8080
const express = require('express');
const app = express();

app.get('/:pageName?', function (req, res) {
  //Ternary operators
  //res.sendfile((req.params.pageName ?req.params.pageName : 'index')  + '.html');
  // let pageName = req.params.pageName ? req.params.pageName : 'index';
  let pageName = '';
  if (undefined === req.params.pageName) {
    pageName = 'index';
  } else {
    pageName = req.params.pageName;
  }
  res.sendfile( pageName  + '.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});