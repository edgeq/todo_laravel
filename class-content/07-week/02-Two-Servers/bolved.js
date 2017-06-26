// We require/import the HTTP module
var http = require("http");

// =====================================================================

const MEAN = 7000, NICE = 7500;


var meanServer = http.createServer(function  (request, response){
  // console.log('I Do not like you.2');
  response.end('<h1>DUCK YOU MOTHER CHUCKER!</h1>');
});
meanServer.listen(MEAN, function  (){
  console.log('Mean server listening http://localhost:%s', MEAN);
});

var niceServer = http.createServer(function (request, response){
  response.end('<h1>YOU ARE WONDERFUL, I LOVE YOU, AND YOU\'RE FREAKING AMAZING!</h1>')
})

niceServer.listen(NICE, function  (){
  console.log('Nice server listening http://localhost:%s', NICE);
})
