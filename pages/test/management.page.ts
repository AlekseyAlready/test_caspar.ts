class managementPage {
    private addPatient = () => $('//button[contains(text(),"Add Patient")]');
    private closeButton = () => $('//span[contains(text(),"Close")]');
    private newCasparId = () => $('//div[contains(text(),"Caspar ID")]//..');
    private temporaryPassword = () => $('//div[contains(text(),"Temporary Password")]//..');
    private initials = () => $('//div[@class="initials"]');
    private signOutButton = () => $('//button[contains(text(),"Sign out")]');

    // ----- Steps -----

    clickAddPatient() {
        this.addPatient().waitForDisplayed();
        return this.addPatient().click();
    }

    getNewCasparId() {
        this.newCasparId().waitForDisplayed();
        return this.newCasparId().getText();
    }

    getTemporaryPassword() {
        this.temporaryPassword().waitForDisplayed();
        return this.temporaryPassword().getText();
    }

    clickCloseButton() {
        this.closeButton().waitForDisplayed();
        return this.closeButton().click();
    }

    clickInitials() {
        this.initials().waitForDisplayed();
        return this.initials().click();
    }

    clickSignOutButton() {
        this.signOutButton().waitForDisplayed();
        return this.signOutButton().click();
    }

  }
  
  export default new managementPage();