class CreatePatient {
    private firstName = () => $('//input[@id="mat-input-7"]');
    private lastName = () => $('//input[@id="mat-input-8"]');
    private heightCm = () => $('//input[@id="mat-input-11"]');
    private weightKg = () => $('//input[@id="mat-input-12"]');
    private bmi = () => $('//input[@id="mat-input-13"]');
    private therapyGoal = () => $('//textarea[@id="mat-input-14"]');
    private recommendation = () => $('//textarea[@id="mat-input-15"]');
    private other = () => $('//textarea[@id="mat-input-16"]');
    private email = () => $('//input[@id="mat-input-9"]');
    private primaryPhone = () => $('//input[@id="mat-input-10"]');
    private street = () => $('//input[@id="mat-input-17"]');
    private streetNumber = () => $('//input[@id="mat-input-18"]');
    private zip = () => $('//input[@id="mat-input-19"]');
    private city = () => $('//input[@id="mat-input-20"]');
    private countrySelect = () => $('//mat-select[@id="mat-select-4"]');
    private country = (num:number) => $(`//mat-option[@id="mat-option-${num}"]`);
    private dayBirthSelect = () => $('//mat-select[@id="mat-select-1"]');
    private dayBirth = (num:number) => $(`//mat-option[@id="mat-option-${num}"]`);
    private monthSelect = () => $('//mat-select[@id="mat-select-2"]');
    private month = (num:number) => $(`//mat-option[@id="mat-option-${num}"]`);
    private yearSelect = () => $('//mat-select[@id="mat-select-3"]');
    private year = (num:number) => $(`//mat-option[@id="mat-option-${num}"]`);
    private genderSelect = () => $('//mat-select[@id="mat-select-0"]');
    private gender = (num:number) => $(`//mat-option[@id="mat-option-${num}"]`);
    private saveButton = () => $('//button[contains(text(),"SAVE")]');

    // ----- Steps -----

    setFirstName(name:string) {
        this.firstName().waitForDisplayed();
        return this.firstName().setValue(name);
    }

    setLastName(lastName:string) {
        this.lastName().waitForDisplayed();
        return this.lastName().setValue(lastName);
    }

    setHeightCm(height:number) {
        this.heightCm().waitForDisplayed();
        return this.heightCm().setValue(height);
    }

    setWeightKg(weight:number) {
        this.weightKg().waitForDisplayed();
        return this.weightKg().setValue(weight);
    }

    setBmi(bmi:number) {
        this.bmi().waitForDisplayed();
        return this.bmi().setValue(bmi);
    }

    setTherapyGoal(goal:string) {
        this.therapyGoal().waitForDisplayed();
        return this.therapyGoal().setValue(goal);
    }

    setRecommendation(recom:string) {
        this.recommendation().waitForDisplayed();
        return this.recommendation().setValue(recom);
    }

    setOther(other:string) {
        this.other().waitForDisplayed();
        return this.other().setValue(other);
    }

    setEmail(email:string) {
        this.email().waitForDisplayed();
        return this.email().setValue(email);
    }

    setPrimaryPhone(phone:string) {
        this.primaryPhone().waitForDisplayed();
        return this.primaryPhone().setValue(phone);
    }

    setStreet(street:string) {
        this.street().waitForDisplayed();
        return this.street().setValue(street);
    }

    setStreetNumber(streetNum:number) {
        this.streetNumber().waitForDisplayed();
        return this.streetNumber().setValue(streetNum);
    }

    setZip(zip:number) {
        this.zip().waitForDisplayed();
        return this.zip().setValue(zip);
    }

    setCity(city:string) {
        this.city().waitForDisplayed();
        return this.city().setValue(city);
    }

    setCountry(country:number) {
        this.countrySelect().waitForDisplayed();
        this.countrySelect().click();
        return this.country(country).click();
    }

    setDayBirth(num:number) {
        this.dayBirthSelect().waitForDisplayed();
        this.dayBirthSelect().click();
        return this.dayBirth(num).click();
    }

    setMonth(num:number) {
        this.monthSelect().waitForDisplayed();
        this.monthSelect().click();
        return this.month(num).click();
    }

    setYear(num:number) {
        this.yearSelect().waitForDisplayed();
        this.yearSelect().click();
        return this.year(num).click();
    }

    setGender(num:number) {
        this.genderSelect().waitForDisplayed();
        this.genderSelect().click();
        return this.gender(num).click();
    }

    clickSaveButton() {
        this.saveButton().waitForDisplayed();
        return this.saveButton().click();
    }

  }
  
  export default new CreatePatient();