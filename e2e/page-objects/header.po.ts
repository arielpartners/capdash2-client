import { browser, element, by } from 'protractor';

export class HeaderPage {
  megaMenuDropdownEl = element(by.css('.dropdown-lg'));
  dropdownHeader = element(by.css('.dropdown-header'));
  userDropdownEl = element(by.css('.navbar-user'));
  logoutEl = element(by.css('.logout'));

  clickMegaMenu () {
    return this.megaMenuDropdownEl.click();
  }

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
