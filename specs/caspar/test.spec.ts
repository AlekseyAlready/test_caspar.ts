import { expect } from 'chai';

import loginPage from 'pages/loginPage.page';
import createNewPatientPage from 'pages/test/createPatient.page';
import managementPage from 'pages/test/management.page';
import newAccEntrance from 'pages/test/newAccEntrance.page';
import newPatient from 'pages/test/newPatient.page';


const id = 'IXE0865';
const password = '78350619';
const newPassword = 'anypassword';
const stamp = loginPage.getStamp();


describe('Check that t&s and Release of medical information are presented', () => {
    before('Create new patient', () => {
        loginPage.openBetaUrl();
        loginPage.setCasparId(id);
        loginPage.setPassword(password);
        loginPage.clickLogin();

        managementPage.clickAddPatient();

        // ----- Fill required fields for new user -----
        createNewPatientPage.setDayBirth(2);
        createNewPatientPage.setMonth(34);
        createNewPatientPage.setYear(52);
        createNewPatientPage.setGender(0);
        createNewPatientPage.setFirstName('Aleksei');
        createNewPatientPage.setLastName('Efimov');
        createNewPatientPage.setHeightCm(170);
        createNewPatientPage.setWeightKg(68);
        createNewPatientPage.setBmi(610);
        createNewPatientPage.setTherapyGoal('Healing');
        createNewPatientPage.setRecommendation('eat ice creame');
        createNewPatientPage.setOther('and drink cola');
        createNewPatientPage.setEmail(`smartkrio@gmail${stamp}.com`);
        createNewPatientPage.setPrimaryPhone('+43');
        createNewPatientPage.setStreet('Landsberger');
        createNewPatientPage.setStreetNumber(43);
        createNewPatientPage.setZip(410000);
        createNewPatientPage.setCity('München');
        createNewPatientPage.setCountry(163);
        createNewPatientPage.clickSaveButton();
    });
  
    it('Login as new user, check t&s and Release of medical information are presented', () => {

        // ----- Get pass and id -----
        const newId = managementPage.getNewCasparId().replace('Caspar ID', '');
        const tempPassword = managementPage.getTemporaryPassword().replace('Temporary Password', '');
        managementPage.clickCloseButton();

        // ----- Log out -----
        managementPage.clickInitials();
        managementPage.clickSignOutButton();
        browser.pause(500);
        browser.refresh();

        // ----- Login as new user -----
        loginPage.setCasparId(newId);
        loginPage.setPassword(tempPassword);
        loginPage.clickLogin();
        newAccEntrance.clickCheckBoxAgree();
        newAccEntrance.clickContinueButton();
        newAccEntrance.fillNewPassword(newPassword);
        newAccEntrance.fillConfirmNewPassword(newPassword);
        newAccEntrance.setNewPassword();
        newPatient.openProfileTab();

        expect(newPatient.releaseMedInfoIsExisting()).to.be.true;
        expect(newPatient.termOfUseIsExisting()).to.be.true;

        newPatient.openReleaseMedInfo();
        expect(newPatient.getHeadReleaseMedInfo()).to.be.equal('Release of medical information');

        newPatient.clickCloseButton();
        newPatient.openTermOfUse();
        expect(newPatient.getHeadTermOfUse()).to.be.equal('Terms of use');
      });
});
