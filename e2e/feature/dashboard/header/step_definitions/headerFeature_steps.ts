import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { Capdash2Page } from '../../../../page-objects/app.po';
import { E2EHelpers } from '../../../../support/e2eHelpers';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const header: HeaderPage = new HeaderPage();
  const app: Capdash2Page = new Capdash2Page();

  const menus = [
    {
      name: 'mega-menu',
      select: () => { header.clickMegaMenu() },
      element: header.dropdownHeader
    },
    {
      name: 'notifications',
      select: () => { header.clickNotificationsMenu() },
      element: header.mediaList
    },
    {
      name: 'languages',
      select: () => { header.clickLanguagesMenu() },
      element: header.languagesList
    },
    {
      name: 'user',
      select: () => { header.clickUserMenu() },
      element: header.logout
    }
  ]

  Given('the Capacity Dashboard header is loaded', () => {
    return app.getAppHeader().then( appHeader => {
      appHeader.isDisplayed().then(isDisplayed => {
        expect(isDisplayed).to.equal(true);
      });
    });
  });

  menus.forEach( menu => {

    When(new RegExp('the user selects the ' + menu.name + ' menu'), () => {
      return menu.select();
    });

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
