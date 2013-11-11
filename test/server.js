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

      test('Should return HTTP requests', function (done){
        http.get("http://localhost:8080", function (response) {
          done();
        });
      });

      test("Server returns 'hello world'", function (done) {
        var request = http.get("http://localhost:8080");
        request.on("response", function (response) {
          assert.equal(200, response.statusCode, "Status code check");
          response.on("data", function() {});
          response.on("end", function () {
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