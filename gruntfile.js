module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'),

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
          'public/better.html': 'public/better.html',     // 'destination': 'source'
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

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'us-east-1', // http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      staging: {
        options: {
          bucket: 'cryptomethod.co',
          differential: true, // Only uploads the files that have changed
          gzipRename: 'ext' // when uploading a gz file, keep the original extension
        },
        files: [
          {expand: true, cwd: 'public/', src: ['**'], dest: '/', action: 'upload'}
        ]
      }
    }

  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-inline');
  // grunt.loadNpmTasks('grunt-aws-s3');



  // grunt.registerTask('build', ['jshint', 'htmlmin']);
  grunt.registerTask('build', ['inline', 'htmlmin']);
  // grunt.registerTask('upload', ['aws_s3']);


};
