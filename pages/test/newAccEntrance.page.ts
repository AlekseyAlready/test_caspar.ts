class newAccEntrance {
    private signOutButton = () => $('//button[contains(text(),"Sign out")]');
    private checkBoxAgree = () => $('//mat-checkbox[@id="mat-checkbox-1"]');
    private continueButton = () => $('//button[contains(text(),"Continue")]');
    private newPassword = () => $('//input[@id="mat-input-2"]');
    private confirmNewPassword = () => $('//input[@id="mat-input-3"]');
    private setPassword = () => $('//span[contains(text(),"Set password")]');

    clickSignOutButton() {
        this.signOutButton().waitForDisplayed();
        return this.signOutButton().click();
    }

    clickCheckBoxAgree() {
        this.checkBoxAgree().waitForDisplayed();
        return this.checkBoxAgree().click();
    }

    clickContinueButton() {
        this.continueButton().waitForDisplayed();
        return this.continueButton().click();
    }

    fillNewPassword(pass:string) {
        this.newPassword().waitForDisplayed();
        return this.newPassword().setValue(pass)
    }

    fillConfirmNewPassword(pass:string) {
        this.confirmNewPassword().waitForDisplayed();
        return this.confirmNewPassword().setValue(pass)
    }

    setNewPassword() {
        this.setPassword().waitForDisplayed();
        return this.setPassword().click();
    }

  }
  
  export default new newAccEntrance();