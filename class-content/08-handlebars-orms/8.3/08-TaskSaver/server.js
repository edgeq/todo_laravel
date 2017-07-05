var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

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
  database: "task_saver_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  app.listen(port, function  (){
    console.log('Server listening on port %d', port);
  });
  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM tasks;", function(err, data) {
    if (err) throw err;

    // Test it
    console.log('The solution is: ', data);

    // Test it
    // res.send(data);

    //Now - how do you send the index handlebars template?
    res.render('index', {tasks: data});
    //    How do you pass the tasks to it?
  });
});

// Post route -> back to home
app.post("/", function(req, res) {
  // Test it
  // console.log('You sent, ' + req.body.task);

  // Test it
  // res.send('You sent, ' + req.body.task);

  connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
    if (err) throw err;

    //What do we always do after a POST?
    res.redirect('/');
  });
});


