var UserInformation = require('../utilities/module/loginData.js');
var login=require('../pages/actions/StepsLogin.js');
var homePage=require('../pages/Homepage.js');
var using = require('jasmine-data-provider');

describe('This is the suit desc', () => {
   using(UserInformation.UserInfo, function(data, description) {

		it("Angular Info " + description, function() {
            homePage.get();
            // browser.debugger();
            homePage.setName(data.user);
            homePage.setPwd(data.credentials);
            login.pressSubmit();
  })
});
    
});