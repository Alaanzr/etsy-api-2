module.exports = function(config) {
  config.set({

    basePath: '../app',

    frameworks: ['jasmine'],

    files: [
      './**/*.js',
      '../test/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    concurrency: Infinity
  });
};
