var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/:view?', function(req, res) {
  if (req.params.view) {
    console.log('rendering view', req.params.view);
    res.render(req.params.view);
  } else {
    res.render('home');

  }
});

app.listen(3000);