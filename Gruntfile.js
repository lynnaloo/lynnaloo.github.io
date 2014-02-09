module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          // target.css file: source.less file
          "css/screen.css": "less/screen.less"
        }
      }
    },
    // Add shell tasks
    shell: {
      copyCss: {
          command: "cp css/screen.css _site/css/screen.css"
      }
    },
    jekyll: {
      server : {
        server: true,
        server_port: 4000,
        exclude: ['node_modules', 'bower_components']
      },
      prod: {
        dest: './_site'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      styles: {
        // Which files to watch
        files: ['/less/screen.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-shell");
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('dev', ['jshint', 'less']);

  grunt.registerTask('default', 'Default Task', function () {
    grunt.log.writeln('Running jshint and less tasks');
    grunt.task.run(['jshint', 'less', 'jekyll:server']);
  });
};