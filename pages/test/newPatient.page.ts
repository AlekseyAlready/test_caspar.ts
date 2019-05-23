class NewPatient {
    private profileTab = () => $('//div[@class="profile"]');
    private termOfUse = () => $('//app-button[contains(text(),"Terms of use")]');
    private releaseMedInfo = () => $('//app-button[contains(text(),"Release of medical information")]');
    private headTermOfUse = () => $('//div[@class="tos-large"]');
    private headReleaseMedInfo = () => $('//div[@class="tos-large"]');
    private closeButton = () => $('//mat-icon[contains(text(),"close")]');
    
    // ----- Steps -----

    openProfileTab() {
        this.profileTab().waitForDisplayed();
        return this.profileTab().click();
    }

    termOfUseIsExisting() {
        return this.termOfUse().waitForDisplayed();
    }

    releaseMedInfoIsExisting() {
        return this.releaseMedInfo().waitForDisplayed();
    }

    openTermOfUse() {
        return this.termOfUse().click();
    }

    openReleaseMedInfo() {
        return this.releaseMedInfo().click();
    }

    headTermOfUseIsExisting() {
        this.headTermOfUse().waitForDisplayed();

    }

    clickCloseButton() {
        this.closeButton().waitForDisplayed();
        return this.closeButton().click();
    }

    headReleaseMedInfoIsExisting() {
        this.headReleaseMedInfo().waitForDisplayed();

    }

  }
  
  export default new NewPatient();