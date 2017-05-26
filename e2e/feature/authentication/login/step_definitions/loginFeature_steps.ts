import { browser} from 'protractor';
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

  When('the user logs in with valid credentials', () => {
    return page.login('sample_user@hra.nyc.gov', 'password').then(() => {
      browser.getCurrentUrl().then(url => {
        expect(/login/.test(url)).not.to.equal(true);
      });
    });
  });

  Then('the user should see their personalized dashboard', () => {
    return app.getAppHeader().then( header => {
      header.isDisplayed().then(isDisplayed => {
        expect(isDisplayed).to.equal(true);
      });
    });
  });

});
