var homePage=require('../Homepage.js');

var enterCredential = function() {

    this.enterCredentials =  function(userId,pwd) {
        homePage.setName(userId);
      homePage.setPwd(pwd);
     };

     this.pressSubmit =  function() {
      homePage.login();
     };

};
module.exports = new enterCredential();