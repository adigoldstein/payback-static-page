module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    jshint: {
      files: ['Gruntfile.js', 'public/js/main.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'public/styles/main.css': 'public/styles/main.scss'
        }
      }
    },

    inline: {
      dist: {
        options: {
          cssmin: true,
          uglify: true,
        },
        src: 'public/index-dev.html',
        dest: 'public/index.html'
      },

    },


    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'public/index.html': 'public/index.html',     // 'destination': 'source'
        }
      },
    },

    watch: {
      styles: {
        files: ['public/styles/*.scss', 'public/js/*.js', 'public/*.html'], //watching over files
        tasks: ['sass', 'inline', 'htmlmin'], //running tasks
        options: {
          spawn: false
        }
      }
    },



  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-inline');




  // grunt.registerTask('build', ['jshint', 'htmlmin']);
  grunt.registerTask('build', ['inline', 'htmlmin']);



};
