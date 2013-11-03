(function() {
  'use strict';

  module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        main: {
          options: nodeLintOptions(),
          files: {
            src: ["app.js", "Gruntfile.js"]
          }
        }
      },
      nodeunit: {
        all: ["tests/*.js"]
      }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");

    grunt.registerTask("lint", "Lint everything", "jshint");
    grunt.registerTask("testcode", "Tests our node.js code", "nodeunit");
    grunt.registerTask("default", "Lint and test", ["lint", "testcode"], function () {
      console.log("\n\nOK");
    });

    function globalLintOptions() {
      return {
        bitwise: true,
        curly: false,
        eqeqeq: true,
        forin: true,
        immed: true,
        latedef: false,
        newcap: true,
        noarg: true,
        noempty: true,
        nonew: true,
        regexp: true,
        undef: true,
        strict: true,
        trailing: true
      };
    }

    function nodeLintOptions() {
      var options = globalLintOptions();
      options.node = true;
      return options;
    }

    function browserLintOptions() {
      var options = globalLintOptions();
      options.browser = true;
      return options;
    }

  };
})();