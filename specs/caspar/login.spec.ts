import { expect } from 'chai';

import loginPage from 'pages/loginPage.page';
import createNewPatientPage from 'pages/test/createPatient.page';
import managementPage from 'pages/test/management.page';
import newAccEntrance from 'pages/test/newAccEntrance.page';


const id = 'IXE0865';
const password = '78350619';
const newPassword = 'anypassword';
const stamp = loginPage.getStamp();


describe('create patient', () => {
    before('login', () => {
        loginPage.openBetaUrl();
        loginPage.setCasparId(id);
        loginPage.setPassword(password);
        loginPage.clickLogin();
    });
  
    it('Login as new user, check page is opened', () => {
        managementPage.clickAddPatient();
        createNewPatientPage.setDayBirth(2);
        createNewPatientPage.setMonth(34);
        createNewPatientPage.setYear(52);
        createNewPatientPage.setGender(0);
        createNewPatientPage.setFirstName('one');
        createNewPatientPage.setLastName('one');
        createNewPatientPage.setHeightCm(170);
        createNewPatientPage.setWeightKg(68);
        createNewPatientPage.setBmi(610);
        createNewPatientPage.setTherapyGoal('Healing');
        createNewPatientPage.setRecommendation('eat ice creame');
        createNewPatientPage.setEmail(`smartkrio@gmail${stamp}.com`);
        createNewPatientPage.setPrimaryPhone('+43');
        createNewPatientPage.setStreet('Landsberger');
        createNewPatientPage.setStreetNumber(43);
        createNewPatientPage.setZip(410000);
        createNewPatientPage.setCity('München');
        createNewPatientPage.setCountry(163);
        createNewPatientPage.clickSaveButton();
        const newId = managementPage.getNewCasparId().replace('Caspar ID', '');
        const tempPassword = managementPage.getTemporaryPassword().replace('Temporary Password', '');
        managementPage.clickCloseButton();
        managementPage.clickInitials();
        managementPage.clickSignOutButton();
        browser.pause(500);
        browser.refresh();
        loginPage.setCasparId(newId);
        loginPage.setPassword(tempPassword);
        loginPage.clickLogin();
        newAccEntrance.clickCheckBoxAgree();
        newAccEntrance.clickContinueButton();
        newAccEntrance.fillNewPassword(newPassword);
        newAccEntrance.fillConfirmNewPassword(newPassword);
        newAccEntrance.setNewPassword();
        browser.pause(5000);
      });
});
