/*
 * grunt-espresso
 * https://github.com/mwaylabs/grunt-espresso
 *
 * Copyright (c) 2013 
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    espresso: {},
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['espresso']);

};
