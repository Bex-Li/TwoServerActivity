var http = require('http')

// Nice port
var PORT1 = 7000
// Mean port
var PORT2 = 7500


function niceHandler(request, response) {
  response.end('You are so wonderful!')
}

function meanHandler(request, response) {
  response.end('You are so wonderfully awful!')
}

var niceServer = http.createServer(niceHandler)

var meanServer = http.createServer(meanHandler)

niceServer.listen(PORT1, function() {
  console.log('Nice server is listening on: ', PORT1)
})

meanServer.listen(PORT2, function() {
  console.log('Mean server is listening on: ', PORT2)
})


