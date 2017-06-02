import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { Capdash2Page } from '../../../../page-objects/app.po';
import { E2EHelpers } from '../../../../support/e2eHelpers';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const header: HeaderPage = new HeaderPage();
  const app: Capdash2Page = new Capdash2Page();

  Given('the Capacity Dashboard header is loaded', () => {
    return app.getAppHeader().then( appHeader => {
      appHeader.isDisplayed().then(isDisplayed => {
        expect(isDisplayed).to.equal(true);
      });
    });
  });

  When('the user selects the {menu} menu', (menu) => {
    switch(menu){
      case 'mega-menu':
        return header.megaMenu.click();
      case 'notifications':
        return header.notificationsMenu.click();
      case 'languages':
        return header.languagesMenu.click();
      case 'user':
        return header.userMenu.click();
    }
  });

  Then('the user should see the mega-menu menu', () => {
    return header.dropdownHeader.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });
  Then('the user should not see the mega-menu menu', () => {
    return header.dropdownHeader.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });

  Then('the user should see the notifications menu', () => {
    return header.mediaList.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the notifications menu', () => {
    return header.mediaList.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });

  Then('the user should see the languages menu', () => {
    return header.languagesList.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the languages menu', () => {
    return header.languagesList.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });

  Then('the user should see the user menu', () => {
    return header.logout.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the user menu', () => {
    return header.logout.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });
});
