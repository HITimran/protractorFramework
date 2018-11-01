var Homepage = function() {
    var userName = element(by.xpath('//*[@id="loginForm"]/div/input[1]'));
    var pwd = element(by.xpath('//*[@id="loginForm"]/div/input[2]'));
    var btnlogin = element(by.xpath('//*[@id="loginForm"]/div/div/input'));

    this.get =  function() {
       browser.waitForAngularEnabled(false);
      // browser.driver.manage().window().maximize();
       browser.get('https://www.freecrm.com/index.html');
    };
  
    this.setName =  function(name) {
      userName.sendKeys(name);
    };

    this.setPwd =  function(name) {
      pwd.sendKeys(name);
    };

    this.login =  function(name) {
       btnlogin.click();
    };
  
    this.getGreetingText = function() {
      return greeting.getText();
    };
  
    this.getGreeting = function() {
      return greeting;
    };
  };
  module.exports = new Homepage();
 