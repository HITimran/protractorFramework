
  var login=require('../pages/actions/StepsLogin.js');
  var homePage=require('../pages/Homepage.js');

  describe('open CRM page', function() {
    it('should userName and Password', function() {
      browser.waitForAngularEnabled(false);
      homePage.get();
      login.enterCredentials();
      login.pressSubmit();
    });
  });