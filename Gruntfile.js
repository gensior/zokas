(function() {
  'use strict';

  module.exports = function(grunt) {

    grunt.initConfig({
      watch: {
        scripts: {
          files: ['./src/**/*.js', './test/**/*.js'],
          tasks: ['jshint', 'mochaTest'],
          options: {
            spawn: true
          }
        }
      },
      jshint: {
        main: {
          options: nodeLintOptions(),
          files: {
            src: ["app.js", "Gruntfile.js"]
          }
        }
      },
      mochaTest: {
        test: {
          options: {
            reporter: 'dot',
            ui: 'tdd'
          },
          src: ["./test/**/*.js"]
        }
      }
    });
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", "Lint and test", ["jshint", "mochaTest"], function () {
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