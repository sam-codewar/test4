var http = require('http');

// Defining a function that handles incoming request
function requestHandler(req, res) {
    console.log("Incoming request from: " + req.url);
    res.end("Hello, World!");
}

// Create a server that uses the function to handle request
var server = http.createServer(requestHandler);

// Server listening on port 3000
server.listen(3000);


