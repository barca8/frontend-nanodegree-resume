module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['./js/resumeBuilder.js', './js/helper.js']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);

};
