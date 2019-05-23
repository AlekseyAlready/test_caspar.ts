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
        this.termOfUse().waitForDisplayed();
        return this.termOfUse().isExisting();
    }

    releaseMedInfoIsExisting() {
        this.releaseMedInfo().waitForDisplayed();
        return this.releaseMedInfo().isExisting();
    }

    openTermOfUse() {
        return this.termOfUse().click();
    }

    openReleaseMedInfo() {
        return this.releaseMedInfo().click();
    }

    getHeadTermOfUse() {
        this.headTermOfUse().waitForDisplayed();
        return this.headTermOfUse().getText();

    }

    clickCloseButton() {
        this.closeButton().waitForDisplayed();
        return this.closeButton().click();
    }

    getHeadReleaseMedInfo() {
        this.headReleaseMedInfo().waitForDisplayed();
        return this.headReleaseMedInfo().getText();
    }

  }
  
  export default new NewPatient();