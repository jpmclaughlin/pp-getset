module.exports = function(grunt) {

  // Load NPM Tasks -- replaces 'grunt.loadNpmTask'
  require('jit-grunt')(grunt);
    
  // Utility to load the different option files based on their names
  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  // Initial config
  var config = {
    pkg: grunt.file.readJSON('package.json')
  }

  // Load tasks from the tasks folder
  grunt.loadTasks('tasks');
    
  // Load all the tasks options in tasks/options based on the name:
  // watch.js => watch{}
  grunt.util._.extend(config, loadConfig('./tasks/options/'));
    
  grunt.initConfig(config);

  require('load-grunt-tasks')(grunt);  

  // Default Task is basically a rebuild  
  grunt.registerTask('default', ['devUpdate', 'assemble', 'sass', 'autoprefixer', 'copy', 'cssmin']);

  //grunt.registerTask('js', ['copy:js']);
  //grunt.registerTask('img', ['copy:images']);
  //grunt.registerTask('deploy', ['gh-pages']);
    
};
