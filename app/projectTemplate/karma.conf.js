// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    // browsers: ['Chrome'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'verbose', 'coverage'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // list of files / patterns to load in the browser
    files: [
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
    ],

    jspm: {
      // Edit this to your needs
      config: 'jspm.conf.js',
      loadFiles: [
        'test/unit/**/*.js'
	  ],
      serveFiles: [
        'src/app/**/**',
        'mock/**/**'
	  ]
    },

    proxies: {
      '/base/app': '/base/src/app',
      '/jspm_packages': '/base/jspm_packages',
      '/node_modules/': '/base/node_modules/'
    },

    // list of files to exclude
    exclude: [],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/**/*.js': ['babel', 'coverage']
    },

  	'babelPreprocessor': {
  	  options: {
  		  sourceMap: 'inline',
  		  modules: 'system'
  	  }
  	},

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }

  });
};
