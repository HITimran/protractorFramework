'Use Strict';

var allureReport=require('./reporterConfig.js')

exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
  
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
    //   homepage: 'tests/e2e/homepage/**/*Spec.js',
    //   search: ['tests/e2e/contact_search/**/*Spec.js',
    //     'tests/e2e/venue_search/**/*Spec.js']
    SampleApp: '../tests/SampleApp.js'

    },

    //framwork to use.
    framwork: 'jasmine2',
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    },

    onPrepare: 
    function reporterAllure() {
	
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
    }));
       jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64');
            }, 'image/png')();
            done();
          });
        });
      },
      function() {
        jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
        savePath: 'test' ,
        takeScreenshotsOnlyOnFailures: false
       })
     );
       },
  };