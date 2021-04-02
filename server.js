var http = require('http');
var multiply = require('./multiply-module');
var exponentiation = require('./exponentiation-module')
var fs = require('fs'); // fs = filesystem --> Used to reach HTML files

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/html'}); // text/plain if normal text
  response.write('Hello world');

  //actions with module files
  response.write(multiply.moduleMessage);
  multiply.logProduct(3, 14);
  exponentiation.logExponentiation(7,3);

  //Launching HTML file
  fs.readFile('./index.html', null, function(error, data){
    if (error) {
      response.writeHead(404);
      response.write('File not found');
    } else {
      response.write(data);
    }
    response.end(); // This has to be within the function because Node.js is async!
  });
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');