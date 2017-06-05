import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { E2EHelpers } from '../../../../support/e2eHelpers';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  const header: HeaderPage = new HeaderPage();
  const helpers: E2EHelpers = new E2EHelpers();

  Given('the user is logged in', () => {
    helpers.confirmLogin();

    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).not.to.equal(true);
    });
  });

  Given('the user is logged in as', () => {
    helpers.confirmLoggedInAs();

    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).not.to.equal(true);
    });
  });

  Then('the user should see the option to log out', () => {
    return header.logout.isDisplayed().then(displayed => {
      expect(displayed).to.equal(true);
    });
  });

  When('the user selects log out', () => {
    return header.logout.click();
  });

  Then('the user should see the login page', () => {
    return browser.getCurrentUrl().then(url => {
      expect(/login/.test(url)).to.equal(true);
    });
  });

});
