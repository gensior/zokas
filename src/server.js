(function(){
  'use strict';

  var http = require('http');
  var server;

  exports.start = function (portNumber) {
    if (!portNumber) throw "Port number (portNumber) is required.";

    server = http.createServer();

    server.on("request", function (request, response) {
      response.end("hello world");
    });

    server.listen(portNumber);
  };

  exports.stop = function (callback) {
    server.close(callback);
  };
})();