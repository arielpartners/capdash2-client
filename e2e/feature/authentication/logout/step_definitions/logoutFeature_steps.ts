import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  let header: HeaderPage = new HeaderPage();

  Given('the user is logged in', () => {
    header.navigateTo();
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
