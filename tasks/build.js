'use strict';

module.exports = function (grunt) {

    var eb = require('espresso/core/commands/build.js');
    var path = require('path');

    grunt.registerTask('espresso', 'Call espresso build', function () {
      
        var options = this.options({pathToApp: ''});
        var pathToApp = grunt.template.process(options.pathToApp);
        var done = this.async();
        var args = {
            "directory": pathToApp,
            "help": false,
            "onFinish": function () {
                done();
            }
        };
        eb.run(args);
    });
};