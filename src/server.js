(function(){
  'use strict';

  var http = require('http');
  var server = http.createServer();
  var PORT = 8080;

  exports.start = function () {
    console.log("Server started.");

    server.on("request", function (request, response) {
      console.log("Received request.");
      var body = "<html><head><title>Node HTTP Server</title></head>" +
        "<body><p>This is a Node.js server.</p></body></html>";
      response.end(body);
    });

    server.listen(PORT, function () {
      console.log("Listening on port "+ PORT + ".");
    });
  };

  exports.stop = function () {
    server.close(function(){
      console.log('Server stopped.');
    });
  };
})();