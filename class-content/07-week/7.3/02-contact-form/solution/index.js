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

app.post("/contact", function(req, res) {
  //TODO how do I get the name?
  let name = req.body.name;
  //TODO how do I get the email?
  let email = req.body.email;
  //TODO how do I get the message?
  let message = req.body.message;
  let zip = req.body.zip;
  res.end(`<!DOCTYPE html><html><head><title>Contact Form</title> </head><body>
     Your Zip Code: ${zip} <br/>
     Your name: ${name} <br/> 
     Your email: ${email} <br/> 
     Your Message: ${message} <br/>
    </body></html>`);
});
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
