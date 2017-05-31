import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { LoginPage } from '../../../../page-objects/login.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  const header: HeaderPage = new HeaderPage();
  const loginPage: LoginPage = new LoginPage();

  Given('the user is logged in', () => {
    browser.getCurrentUrl().then(url => {
      if (/login/.test(url)) {
        loginPage.login('sample_user@hra.nyc.gov', 'password');
      }
    });

    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).not.to.equal(true);
    });
  });

  When('the user selects the user dropdown menu', () => {
    return header.clickUserDropdown();
  });

  Then('the user should see the option to log out', () => {
    return header.logoutEl.isDisplayed().then(displayed => {
      expect(displayed).to.equal(true);
    });
  });

  When('the user selects log out', () => {
    return header.clickLogout();
  });

  Then('the user should see the login page', () => {
    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).to.equal(true);
    });
  });

});
