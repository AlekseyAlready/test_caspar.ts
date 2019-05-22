class LoginPage {
  private emailCasparId = () => $('//input[@id="mat-input-0"]');
  private password = () => $('//input[@id="mat-input-1"]');
  private buttonLogin = () => $('//span[contains(text(),"Login")]');

  // ----- Steps -----

  public openBetaUrl() {
      const conf = require('config/Configuration.json');
      const path = conf.betaUrl.url;
      browser.url(path);
      browser.maximizeWindow();
    }

  public getStamp() {
      return Math.random()
        .toString(36)
        .substr(-5);
    }


  setCasparId(id:string) {
      this.emailCasparId().waitForDisplayed();
      return this.emailCasparId().setValue(id);
  }

  setPassword(password:string) {
      this.password().waitForDisplayed();
      return this.password().setValue(password);
  }

  clickLogin() {
      this.buttonLogin().waitForDisplayed();
      return this.buttonLogin().click();
    }
}

export default new LoginPage();