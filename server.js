var http = require('http');

function logProduct(a, b) {
  console.log(a*b);
}

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello world');
  logProduct(4,5)
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');