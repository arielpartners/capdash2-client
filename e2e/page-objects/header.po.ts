import { browser, element, by } from 'protractor';

export class HeaderPage {
  userDropdownEl = element(by.css('.navbar-user'));
  logoutEl = element(by.css('.logout'));

  clickUserDropdown () {
    return this.userDropdownEl.click();
  }

  clickLogout () {
    return this.logoutEl.click();
  }

  navigateTo () {
    return browser.get('/');
  }

}
