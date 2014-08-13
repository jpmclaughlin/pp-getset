module.exports = function(grunt) {
  grunt.registerTask('scss', ['sass', 'autoprefixer', 'cssmin']);
};