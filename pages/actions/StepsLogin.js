var homePage=require('../Homepage.js');

var enterCredential = function() {

    this.enterCredentials =  function() {
        homePage.setName('hitimran');
      homePage.setPwd('Bookmaster33');
     };

     this.pressSubmit =  function() {
      homePage.login();
     };

};
module.exports = new enterCredential();