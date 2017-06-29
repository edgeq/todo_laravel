// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

//TODO make sure you use the right DB
var connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: '',
  database: 'ParryHotter'
});

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/list", function(req, res) {
  connection.query('SELECT * FROM `wizards`', function(err, data) {
    if (err) {
      console.log('MySQL error', err);
    }
    let list = '';
    res.end(`<!DOCTYPE html><html><head><title>Wizard Create Form</title> </head><body>
    <h1>TODO - List wizards!</h1>
    </body></html>`);
  });
});

app.post("/create", function(req, res) {
  console.log('request body', req.body);
  let name = req.body.name;
  let hitpoints = req.body.hitpoints;
  let power = req.body.power;
  //TODO write a SQL query to create a new wizard

  //TODO read the expressjs docs @link https://expressjs.com/en/api.html#res.redirect
  //TODO redirect to the list page, which will show the newly inserted wizard
});
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
