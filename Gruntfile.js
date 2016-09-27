module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['js/source/jquery-3.1.0.min.js', 'js/source/jquery.carousel.js', 'js/source/tmpl.js', 'js/source/script.js'],
        dest: 'js/script.main.js'
      },
      css: {
        src: ['css/source/*.css'],
        dest: 'css/style.main.css'
      }
    },
    uglify: {
      dist: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.min.js'
      }
    }  
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');


  grunt.registerTask('default', ['concat', 'uglify']);

};