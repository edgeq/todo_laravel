// Requiring dependencies
var http = require("http");
var fs = require("fs");
var url = require("url");

// Set our port to 8080
var PORT = 8080;

var server = http.createServer(handleRequest);
function renderResponse (filename, res){
  fs.readFile(__dirname + "/"+filename+".html", function(err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
function handleRequest(req, res) {

  // Capturing the url the request is made to.
  var urlParts = url.parse(req.url);

  // When we visit different urls, the switch statement call on different functions.
  switch (urlParts.pathname) {

    // Depending on the URL we display a different HTML file.
    case "/":
      renderResponse('index', res);
      break;

    case "/food":
      renderResponse('food', res);
      break;

    case "/movies":
      renderResponse('movies', res);
      break;

    case "/frameworks":
      renderResponse('frameworks', res);
      break;

    default:
      renderResponse('index', res);
      break;
  }
}

// Starts our server.
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
