import { browser, element, by } from 'protractor';
import { HeaderPage } from '../../../../page-objects/header.po';
import { E2EHelpers } from '../../../../support/e2eHelpers';

import { defineSupportCode } from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given, When, Then}) => {
  const header: HeaderPage = new HeaderPage();

  // Given the user is logged in: See logoutFeature_steps step 1

  When(/the user selects the Main Menu dropdown/, () => {
    return header.clickMegaMenu();
  });

  Then('the user should see the mega menu', () => {
    return header.dropdownHeader.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the mega menu', () => {
    return header.dropdownHeader.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });

  Then('the user should see the user dropdown menu', () => {
    return header.logoutEl.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  When(/the user selects the notification menu/, () => {
    return header.clickNotificationDropdown();
  });

  Then('the user should see the notification menu', () => {
    return header.mediaList.isPresent().then(present => {
      expect(present).to.equal(true);
    });
  });

  Then('the user should not see the notification menu', () => {
    return header.mediaList.isPresent().then(present => {
      expect(present).to.equal(false);
    });
  });
});
