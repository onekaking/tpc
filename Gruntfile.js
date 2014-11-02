// Generated on 2014-10-31 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      jade: {
        files: ['<%= yeoman.app %>/views/{,*/}*.jade'],
        tasks: ['jade'],
        options: {
          livereload: '<%= connect.all.options.livereload %>'
        }
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: '<%= connect.all.options.livereload %>'
        }
      },
      jsTest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass', 'cssmin'],
        options: {
          livereload: '<%= connect.all.options.livereload %>'
        }
      }
    },

    // The actual grunt server settings
    connect: {
      all: {
        options: {
          port: 9000,
          open: true,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          livereload: 35729,
          base: appConfig.dist
        },
        livereload: {
          options: {
            middleware: function (connect) {
              return [
                connect.static(appConfig.dist),
                connect().use('/bower_components', connect.static('./bower_components')),
                connect.static(appConfig.app)
              ];
            }
          }
        }
      },
      desktop: {
        options: {
          port: 9000,
          open: true,
          // Change this to '0.0.0.0' to access the server from outside.
          hostname: 'localhost',
          livereload: 35729,
          base: appConfig.dist + '/desktop'
        },
        livereload: {
          options: {
            middleware: function (connect) {
              return [
                connect.static(appConfig.dist + '/desktop'),
                connect().use('/bower_components', connect.static('./bower_components')),
                connect.static(appConfig.app)
              ];
            }
          }
        }
      }
    },

    // Use jade templating
    jade: {
      options: {
        pretty: true
      },
      desktop: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/views',
          dest: '<%= yeoman.dist %>/desktop',
          src: '*.jade',
          ext: '.html'
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      desktop: ['.tmp', '<%= yeoman.dist %>'],
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      sass: {
        src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      desktop: {
        options: {
          sassDir: '<%= yeoman.app %>/styles',
          cssDir: '<%= yeoman.dist %>/desktop/styles'
        }
      }
    },

    sass: {
      desktop: {
        files: [{
          '<%= yeoman.dist %>/desktop/styles/main.css': '<%= yeoman.app %>/styles/all.scss'
        }]
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      desktop: {
        src: [
          '<%= yeoman.dist %>/desktop/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/desktop/styles/{,*/}*.css',
          '<%= yeoman.dist %>/desktop/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= yeoman.dist %>/desktop/styles/fonts/*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/views/{,*/}*.jade'
      // options: {
      //   dest: '<%= yeoman.dist %>',
      //   flow: {
      //     html: {
      //       steps: {
      //         js: ['concat', 'uglifyjs'],
      //         css: ['cssmin']
      //       },
      //       post: {}
      //     }
      //   }
      // }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/desktop/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/desktop/styles/{,*/}*.css']
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/desktop/styles/main.css': [
            '<%= yeoman.dist %>/desktop/styles/{,*/}*.css'
          ]
        }
      }
    },

    uglify: {
      desktop: {
        files: {
          '<%= yeoman.dist %>/desktop/scripts/main.js': [
            '<%= yeoman.dist %>/desktop/scripts/main.js'
          ],
          '<%= yeoman.dist %>/desktop/scripts/vendor.js': [
            '<%= yeoman.dist %>/desktop/scripts/vendor.js'
          ]
        }
      }
    },

    concat: {
      desktop: {
        // src: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        // dest: '<%= yeoman.dist %>/desktop/scripts/main.js'
        files: {
          '<%= yeoman.dist %>/desktop/scripts/main.js': ['<%= yeoman.app %>/scripts/{,*/}*.js'],
          '<%= yeoman.dist %>/desktop/scripts/vendor.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js'
          ]
        }
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/{,*/}*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // ng-annotate tries to make the code safe for minification automatically
    // by using the Angular long form for dependency injection.
    ngAnnotate: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: ['*.js', '!oldieshim.js'],
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      desktop: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/assets/images/',
            dest: '<%= yeoman.dist %>/desktop/images/',
            src: ['**']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/**',
          dest: '<%= yeoman.dist %>/desktop/'
        }]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      desktop: [
        'sass:desktop',
        'cssmin',
        // 'imagemin',
        'concat',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean',
    'jade',
    // 'wiredep',
    'useminPrepare',
    'concurrent',
    // 'autoprefixer',
    'uglify',
    'copy',
    'htmlmin',
    // 'ngAnnotate',
    'cdnify',
    'usemin',
    // 'filerev',
    'cssmin'
  ]);

  grunt.registerTask('dev', [
    'build',
    'connect:all',
    'watch'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
