var express = require("express");
var mysql = require("mysql");
var app = express();
var port = 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
  host    : "localhost",
  user    : "root",
  password: "",
  database: "seinfeld"
});

app.get("/dog", function(req, res) {
  // Handlebars requires an object to be sent to the dog.handlebars file. Lucky for us, animals[0] is an object!

  // 1. Send the dog object from the animals array to the dog.handlebars file.
  console.log('a dog', animals[0]);
  res.render('dog', animals[0]);

});

app.get("/", function(req, res) {
  // Handlebars requires an object to be sent to the index.handlebars file.

  // 2. Send the animals to the index.handlebars file. Remember that animals is an array and not an object.
  connection.query('SELECT * FROM `actors`', function(err, data) {
    if (err) {
      throw err;
    }
    let assHats = [];
    data.forEach(function(item) {
      assHats.push({
        name         : item.name,
        assHolePoints: item.coolness_points,
        wickedCool: item.coolness_points > 50 ? true : false
      })
    });
    console.log('data', data);
    res.render('index', {assholes: assHats});
  });
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
  // Initiate the listener.
  app.listen(port, function() {
    console.log('EXPRESS APP LISTENING on %d', port);
  });
});
