var http = require('http');
var multiply = require('./multiply-module');
var exponentiation = require('./exponentiation-module')

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(multiply.moduleMessage);
  multiply.logProduct(3, 14);
  exponentiation.logExponentiation(7,3);
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');