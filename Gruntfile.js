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
      }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerTask("default", "Default description", ["jshint"], function () {
      console.log("Hello world");
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