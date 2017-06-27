// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
var characters = {
  yoda : {
    routeName  : "yoda",
    name       : "Yoda",
    role       : "Jedi Master",
    age        : 900,
    forcePoints: 2000
  },
  darth: {
    routeName  : "darthmaul",
    name       : "Darth Maul",
    role       : "Sith Lord",
    age        : 200,
    forcePoints: 1200
  },
  obi  : {
    routeName  : "obiwankenobi",
    name       : "Obi Wan Kenobi",
    role       : "Jedi Knight",
    age        : 60,
    forcePoints: 1350
  },
  jarjar  : {
    routeName  : "jarjar",
    name       : "Jar Jar Binks",
    role       : "Annoyying f*ckery",
    age        : 2,
    forcePoints: -1000
  },
  chosen : {
    name: "Neo / Agent Smith"
  }
};

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send('<h1>I also, love Express</h1>');
});

app.get("/:characters", function(req, res) {
  var chosen = req.params.characters;

  // What does this log?
  console.log(chosen);

  res.json(characters[chosen]);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
