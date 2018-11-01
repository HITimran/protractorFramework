var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var AllureReporter = require('jasmine-allure-reporter');

exports.config = {
  directConnect: true,
  specs: ['../tests/testCasesLogin.js'],
  maxSessions: 4,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args:[/* "--headless", "--disable-gpu", */ "window-size=1920, 1080", "--disable-browser-side-navigation"]
      },
    maxInstances: 4,
    shardTestFiles: true
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(
    new Jasmine2HtmlReporter({
    savePath: 'Results' ,
    takeScreenshotsOnlyOnFailures: false,
    fileNameSeparator: '_',
    fileNameDateSuffix: true
   })
                                );
  jasmine.getEnv().addReporter(
   new AllureReporter({
   resultsDir: 'allure-results'
                     })
                             );
 
                     },
 
   jasmineNodeOpts: { 
     showColors: true,
     defaultTimeoutInterval: 30000 
   }
 
};
