import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
<<<<<<< HEAD
=======
import { E2EHelpers } from '../../../../support/e2eHelpers';
>>>>>>> master

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  const header: HeaderPage = new HeaderPage();
<<<<<<< HEAD

  Given('the user is logged in', () => {
    header.navigateTo();
=======
  const helpers: E2EHelpers = new E2EHelpers();

  Given('the user is logged in', () => {
    helpers.confirmLogin();

>>>>>>> master
    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).not.to.equal(true);
    });
  });

<<<<<<< HEAD
  When('the user selects the user dropdown menu', () => {
    return header.clickUserDropdown();
  });

  Then('the user should see the option to log out', () => {
    return header.logoutEl.isDisplayed().then(displayed => {
=======
  Then('the user should see the option to log out', () => {
    return header.getElement('user', 'child').isDisplayed().then(displayed => {
>>>>>>> master
      expect(displayed).to.equal(true);
    });
  });

  When('the user selects log out', () => {
<<<<<<< HEAD
    return header.clickLogout();
=======
    return header.getElement('user', 'child').click();
>>>>>>> master
  });

  Then('the user should see the login page', () => {
    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).to.equal(true);
    });
  });

});
