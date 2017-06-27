const http = require('http');
const url = require('url');

const PORT = 8080;

var server = http.createServer(function(request, response) {
  let urlParts = url.parse(request.url);
  console.log('request', urlParts);
  response.writeHead(200, {"Content-Type": "text/html"});
  switch (urlParts.pathname) {
    case "/contact-me":
      response.writeHead(302, {"Location": "/contact"});
      response.end();
    case "/contact":
      response.end('Contact me! <a href="/">Home</a><a href="/about">About me</a>');
      break;
    case "/about":
      response.end('About me! <a href="/">Home</a> <a href="/contact-me">Contact me!</a>');
      break;
    case "/":
      response.end('Home page! <a href="/about">About me</a> <a href="/contact">Contact Me!</a>');
      break;
    default:
      response.writeHead(404);
      response.end();
      break;
  }
});

server.listen(PORT, function() {
  console.log('Listening http://localhost:%s', PORT);
});