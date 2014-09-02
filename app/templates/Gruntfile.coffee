module.exports = (grunt) ->
  require('jit-grunt') grunt

  grunt.initConfig
    # 各種パスの設定
    path:
      assets: 'assets'
      js: '<%= path.assets %>/js'

    # jshintタスク
    jshint:
      options:
        jshintrc: '.jshintrc'
        reporter: require('jshint-summary')
        force: true
      dev:
        src: [
          '<%= path.js %>/**/*.js'
        ]

  grunt.registerTask 'default', ['jshint']
