import { browser} from 'protractor';
import { LoginPage } from '../../../../page-objects/login.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  let loginPage: LoginPage = new LoginPage();

  Given('the user is logged in', () => {
    loginPage.login('sample_user@dhs.nyc.gov', 'password').then(() => {
      browser.getCurrentUrl().then(url => {
        expect(/login/.test(url)).not.to.equal(true);
      });
    });
  });

});
