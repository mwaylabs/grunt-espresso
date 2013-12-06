'use strict';

module.exports = function (grunt) {

    var eb = require('espresso/core/commands/build.js');
    var es = require('espresso/core/commands/server.js');
    var path = require('path');

    /**
     * Register a multi task so that it can be specified which command should be run.
     * default task is build
     * @author Kentaro Wakayama
     * @date   2013-12-06
     *
     */
    grunt.registerMultiTask('espresso', 'call espresso', function () {
        var options = this.options({pathToApp: ''});
        var pathToApp = grunt.template.process(options.pathToApp);
        var done = this.async();

        if (this.target === "server") {
            //run espresso server
            var args = {
                "directory": pathToApp,
                "help": false,
                "port": options.port,
                "onFinish": function () {
                    done();
                }
            };
            es.run(args);
        } else{
            //run espresso build
            var args = {
                "directory": pathToApp,
                "help": false,
                "onFinish": function () {
                    done();
                }
            };
            eb.run(args);
        }
    });
};