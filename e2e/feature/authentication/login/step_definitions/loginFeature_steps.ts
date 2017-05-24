import { LoginPage } from '../../../../page-objects/login.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  let page: LoginPage = new LoginPage();
  let app: Capdash2Page = new Capdash2Page();

  Given('the user navigates to the CapDash2 homepage', () => {
    page.navigateTo();
    return page.getTitle().then(title => {
      expect(title).to.equal('Shelter Capacity Dashboard');
    });
  });

  When('the user enters a valid email address and password', () => {
    page.enterEmail('sample_user@dhs.nyc.gov');
    page.enterPassword('password');
    page.signIn();
  });

  When('the user clicks the sign in button', () => {
    // Write code here that turns the phrase above into concrete actions

  });

  Then('the user should see their personalized dashboard', () => {
    return app.getTextByCss('page-header').then(text => {
      expect(text).to.eventually.equal('Welcome to Capacity Dashboard!');
    });
  });

});
