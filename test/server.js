(function () {
  'use strict';

  // Test suite dependencies
  var chai = require("chai");
  var assert = chai.assert;
  var http = require("http");

  // Test function dependencies
  var server = require("../src/server.js");

  suite('Server Tests', function() {

    suite('Server Operation Tests', function () {
      setup(function () {
        server.start(8080);
      });

      test("Server returns 'hello world'", function (done) {
        var request = http.get("http://localhost:8080");
        request.on("response", function (response) {
          var receivedData = false;
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

      test("Server returns good Status Code", function (done) {
        var request = http.get("http://localhost:8080");
        request.on("response", function (response) {
          response.on("data", function () {});
          response.on("end", function () {
            assert.equal(200, response.statusCode, "Status code check");
            done();
          });
        });
      });

      teardown(function (done) {
        server.stop(function () {
          done();
        });
      });
    });

    suite("Server Command Tests", function () {
      test("Server throws error when started without port number", function (done) {
        assert.throws(function () {
          server.start();
        });
        done();
      });
      test("Server runs callback upon shutdown", function (done) {
        server.start(8080);
        server.stop(function () {
          done();
        });
      });
      test("Error thrown when server stop command issued when server isn't running", function (done) {
        assert.throws(function () {
          server.stop();
        });
        done();
      });
    });

  });
})();