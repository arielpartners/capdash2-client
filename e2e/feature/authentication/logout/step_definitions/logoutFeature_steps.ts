import { browser} from 'protractor';
import { LoginPage } from '../../../../page-objects/login.po';
import { HeaderPage } from '../../../../page-objects/header.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, Then, When}) => {
  let loginPage: LoginPage = new LoginPage();
  let header: HeaderPage = new HeaderPage();
  
  Given('the user is logged in', () => {
    loginPage.login('sample_user@dhs.nyc.gov', 'password').then(() => {
      browser.getCurrentUrl().then(url => {
        expect(/login/.test(url)).not.to.equal(true);
      });
    });
  });

  When('the user selects the user dropdown menu', () => {

  })

});
