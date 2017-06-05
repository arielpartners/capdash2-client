import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

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
    return header.getElement(menu, 'parent').click();
  });

  Then('the user should see the {menu} menu', (menu) => {
    return header.getElement(menu, 'child').isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the {menu} menu', (menu) => {
    return header.getElement(menu, 'child').isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });

});
