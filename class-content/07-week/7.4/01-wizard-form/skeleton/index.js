// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

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

app.post("/create", function(req, res) {
  console.log('request body', req.body);
  //TODO get the wizard name
  // let name = req.body.???;
  //TODO get the wizard hitpoints
  // let hitpoints = req.body.???;
  //TODO get the wizard special power
  // let power = req.body.???;
  //TODO remove me after fixing the above
  return res.end(`Raw data: ${JSON.stringify(req.body)}`);

  //TODO enable this after grabbing the variables from the POST(man) ;-)
  res.end(`<!DOCTYPE html><html><head><title>Contact Form</title> </head><body>
     Your name: ${name} <br/> 
     Your email: ${hitpoints} <br/> 
     Your Message: ${power} <br/>
    </body></html>`)
});
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
