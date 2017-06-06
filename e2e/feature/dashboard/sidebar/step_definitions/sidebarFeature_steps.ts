import { browser, element, by } from 'protractor';
import { SidebarPage } from '../../../../page-objects/sidebar.po';
import { Capdash2Page } from '../../../../page-objects/app.po';
import { E2EHelpers } from '../../../../support/e2eHelpers';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const sidebar: SidebarPage = new SidebarPage();
  const app: Capdash2Page = new Capdash2Page();
  const helpers: E2EHelpers = new E2EHelpers();

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

  When('the user selects the {sub-item} sub-menu item from the {item} sub-menu',
  (subItem, item) => {
    return sidebar.getSubItem(subItem, item).element.click();
  });

  Then('the user should see the {sub-item} item in the {item} sub-menu', (subItem, item) => {
    return sidebar.getSubItem(subItem, item).element.isDisplayed().then( isDisplayed => {
      expect(isDisplayed).to.equal(true);
    });
  });

  Then('the {item} sidebar item should be highlighted', (item) => {
    return sidebar.getItem(item).element.getAttribute('class').then( classList => {
      expect(helpers.hasClass(classList, 'active')).to.equal(true);
    });
  });

  Then('the Offline Units item in the Units sub-menu should not be visible', () => {
    const offlineUnits =  sidebar.getSubItem('Offline Units', 'Units');

    return offlineUnits.element.isDisplayed().then( isDisplayed => {
      expect(isDisplayed).to.equal(false);
    });
  });

  Then('the user should see the {item} page', (item) => {
    const expectedUrl = new RegExp(sidebar.getItem(item).path);

    return browser.getCurrentUrl().then( url => {
      expect(expectedUrl.test(url)).to.equal(true);
    });
  });
})
