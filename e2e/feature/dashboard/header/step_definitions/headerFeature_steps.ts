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
    return header.getItem(menu).element.click();
  });

  When('the user selects the {link} link', (link) => {
    return header.getItem(link).element.click();
  });

  Then('the {menu} menu should be {visibility}', (menu, visibility) => {
    const expected = visibility === 'displayed' ? true : false;

    return header.getChild(menu).element.isPresent().then( isPresent => {
      expect(isPresent).to.equal(expected);
    });
  });

  Then('the user should navigate to the {link} page from the header', (link) => {
    const expectedUrl = new RegExp(header.getItem(link).path);

    return browser.getCurrentUrl().then( url => {
      expect(expectedUrl.test(url)).to.equal(true);
    });
  });

});
