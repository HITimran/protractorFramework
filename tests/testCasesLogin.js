var UserInformation = require('../utilities/module/loginData.js');
var login=require('../pages/actions/StepsLogin.js');
var homePage=require('../pages/Homepage.js');
var using = require('jasmine-data-provider');

describe('This Suit Should help', () => {
   using(UserInformation.UserInfo, function(data, description) {

		it("to login  " + description, function() {
            homePage.get();
            console.log();
           expect(browser.getTitle()).toEqual('#1 Free CRM software in the cloud for sales and service');
            login.enterCredentials(data.user,data.credentials);
            login.pressSubmit();           
  })
});
    
});