import { browser, element, by } from 'protractor';

import { LoginPage } from '../page-objects/login.po';

const loginPage: LoginPage = new LoginPage();

export class E2EHelpers {
  confirmLogin () {
    return browser.getCurrentUrl().then(url => {
      if (/login/.test(url)) {
        loginPage.login('sample_user@hra.nyc.gov', 'password');
      }
    });
  }

  hasClass (classList, cssClass) {
    return classList.indexOf(cssClass) !== -1;
  }
}
