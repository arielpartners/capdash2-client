import { browser, element, by } from 'protractor';
import { SidebarPage } from '../../../../page-objects/sidebar.po';
import { Capdash2Page } from '../../../../page-objects/app.po';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const sidebar: SidebarPage = new SidebarPage();
  const app: Capdash2Page = new Capdash2Page();

  Given('the Capacity Dashboard sidebar is loaded', () => {
    return app.getAppSidebar().then( appSidebar => {
      appSidebar.isDisplayed().then( isDisplayed => {
        expect(isDisplayed).to.equal(true);
      });
    });
  });

  When('the user selects the {item} sidebar item', (item) => {
    return sidebar.getItem(item).element.click();
  });

  Then('the user should see the {item} page', (item) => {
    const expectedUrl = new RegExp(sidebar.getItem(item).path);

    return browser.getCurrentUrl().then( url => {
      expect(expectedUrl.test(url)).to.equal(true);
    });
  });
})
