(function(){
  'use strict';

  var http = require('http');
  var server;
  var PORT = 8080;

  exports.start = function () {
    server = http.createServer();

    server.on("request", function (request, response) {
      response.end();
    });

    server.listen(PORT);
  };

  exports.stop = function (callback) {
    server.close(callback);
  };
})();