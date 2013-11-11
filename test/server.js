(function () {
  'use strict';

  // Test suite dependencies
  var chai = require("chai");
  var assert = chai.assert;
  var http = require("http");

  // Test function dependencies
  var server = require("../src/server.js");

  suite('NodeServer', function() {
    setup(function (){
      server.start();
    });

    suite('Server running', function () {

      test("Server returns 'hello world'", function (done) {
        var request = http.get("http://localhost:8080");
        request.on("response", function (response) {
          var receivedData = false;
          assert.equal(200, response.statusCode, "Status code check");
          response.on("data", function(chunk) {
            receivedData = true;
            response.setEncoding("utf8");
            assert.equal("hello world", chunk);
          });
          response.on("end", function () {
            assert.ok(receivedData, "Should have received response data.");
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