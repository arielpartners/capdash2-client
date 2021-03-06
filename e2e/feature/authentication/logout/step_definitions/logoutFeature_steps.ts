import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { LoginPage } from '../../../../page-objects/login.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  const header: HeaderPage = new HeaderPage();
  const loginPage: LoginPage = new LoginPage();

  Given('the user is logged in', () => {
    loginPage.confirmLogin();

    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).not.to.equal(true);
    });
  });

  Given('the user is logged out', () => {
    header.logout();

    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).to.equal(true);
    });
  })

  Then('the user should see the option to log out', () => {
    return header.getItem('Logout').element.isDisplayed().then(displayed => {
      expect(displayed).to.equal(true);
    });
  });

  When('the user selects log out', () => {
    return header.getItem('Logout').element.click();
  });

  Then('the user should navigate to the login page', () => {
    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).to.equal(true);
    });
  });

});
