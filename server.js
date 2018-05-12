// Require/import the HTTP module
var http = require("http");
// Define a port to listen for incoming requests
var PORT7000 = 7000;
var PORT7500 = 7500;
// Create a generic function to handle requests and responses
function handleFirstRequest(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("You look lovely today: " + request.url);
}
// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleFirstRequest);
// Start our server so that it can begin listening to client requests.
server1.listen(PORT7000, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT7000);
});
function handleSecondRequest(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("Stay up too late last night?: " + request.url);
  }
  var server2 = http.createServer(handleSecondRequest);
  server2.listen(PORT7500, function() {
    console.log("Server listening on: http://localhost:" + PORT7500);
  });
