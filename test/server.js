(function () {
  'use strict';

  // Test suite dependencies
  var assert = require("assert");

  // Test function dependencies
  var server = require("../src/server.js");

  suite('Server', function(){
    setup(function(){
      // ...
    });

    suite('Server running', function(){
      test('should return 3', function(){
        assert.equal(server.number(), 3);
      });
    });
  });
})();