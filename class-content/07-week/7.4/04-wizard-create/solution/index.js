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


connection.connect(function(error) {
  if (error) {
    throw error;
  }
  console.log('Connected to MySQL server, as ID = ', connection.threadId);
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
  //Query MySQL
  connection.query('SELECT * FROM `wizards`', function(err, results) {
    if (err) {
      throw err;
    }
    //Create a string for HTML rendering
    let html = '';
    //Loop through the results
    results.forEach(function(value) {
      console.log('value', value);
      //Build one row per result
      html += '<tr>';
      //Set the values for each row and column from the database
      //these MUST match the column names from the previous activity!
      html +=   `<td>${value.name}</td>`;
      html +=   `<td>${value.hitpoints}</td>`;
      html +=   `<td>${value.powers}</td>`;
      html += '</tr>'
    });
    //Render our HTML page
    res.end(`<!DOCTYPE html><html><head>
      <title>Wizard Create Form</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<!-- Optional theme -->
	      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
      </head><body>
      <div class="container">
        <h1>My Wizards in HTML</h1>
        <a href="/" class="btn btn-primary" >Home</a>
        <table class="table">
          <thead>
            <tr>
              <th>Name</th><th>Hitpoints</th><th>Special Powers</th>
            </tr>
          </thead>
          <tbody>
            ${html}
          </tbody>
        </table>
      </div>
      </body></html>`);

  });

});

app.post("/create", function(req, res) {
  console.log('request body', req.body);
  let name = req.body.name;
  let hitpoints = req.body.hitpoints;
  let powers = req.body.power;
  //TODO write a SQL query to create a new wizard
  connection.query('INSERT INTO `wizards` SET ?', {name, hitpoints, powers}, function  (err, data){
    if (err) {
      throw err;
    }
    console.log('data', data);
  })
  //TODO read the expressjs docs @link https://expressjs.com/en/api.html#res.redirect
  //TODO redirect to the list page, which will show the newly inserted wizard
  res.redirect('/list');
});
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
