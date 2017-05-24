import { LoginPage } from '../../../../page-objects/login.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  let page: LoginPage = new LoginPage();
  let app: Capdash2Page = new Capdash2Page();

  Given('The user navigates to the CapDash2 Homepage', () => {
    page.navigateTo();
    return page.getTitle().then(title => {
      expect(title).to.eventually.equal("Shelter Capacity Dashboard");
    });
  });

  When('The user enters a valid email and password, then clicks sign in button', () => {
    page.enterEmail('sample_user@dhs.nyc.gov');
    page.enterPassword('password');
    page.signIn();
  });

  Then('The user should see their personalized dashboard', () => {
    return app.getTextByCss('page-header').then(text => {
      expect(text).to.eventually.equal('Welcome to Capacity Dashboard!');
    });
  });

})
