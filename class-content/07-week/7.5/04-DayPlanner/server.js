var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "day_planner_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM plans;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { plans: data });

  });
});

app.post("/", function(req, res) {
  connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.post("/delete/:id", function(req, res) {
  connection.query("DELETE FROM plans WHERE id = ?", [req.params.id], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.post("/update/:id", function(req, res) {

  connection.query("UPDATE plans SET plan = ? WHERE id = ?", [
    req.body.plan, req.params.id
  ], function(err, result) {
    if (err) {
      throw err;
    }

    res.redirect("/");
  });
});

app.listen(port);
