(function () {
  'use strict';

  // Test suite dependencies
  var assert = require("assert");
  var http = require("http");

  // Test function dependencies
  var server = require("../src/server.js");

  suite('NodeServer', function(){
    setup(function (){
      server.start();
    });

    suite('Server running', function (){
      test('Should return HTTP requests', function (done){
        http.get("http://localhost:8080", function (response) {
          response.on('data', function (data) {
            console.log("Data recieved.");
            done();
          });
        });
      });
    });

    teardown(function () {
      server.stop();
    });
  });
})();