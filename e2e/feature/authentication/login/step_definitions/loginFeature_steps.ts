import { browser, element, by } from 'protractor';
import { LoginPage } from '../../../../page-objects/login.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(15000);
});

defineSupportCode(({Given, When, Then}) => {
  let page: LoginPage = new LoginPage();
  let app: Capdash2Page = new Capdash2Page();

  Given('the user navigates to the CapDash2 homepage', () => {
    page.navigateTo();
    return page.getTitle().then(title => {
      expect(title).to.equal('Shelter Capacity Dashboard');
    });
  });

  When('the user logs in with valid credentials', () => {
    page.enterEmail('sample_user@dhs.nyc.gov');
    page.enterPassword('password');
    page.signIn();
  });

  When('the user clicks the sign in button', () => {

  });

  Then('the user should see their personalized dashboard', () => {
    browser.wait(() => {
      return browser.isElementPresent(by.css('.page-header'));
    });

    return browser.getCurrentUrl().then(url => {
      expect(url).to.equal('http://localhost:49152/');
    });
  });

});
