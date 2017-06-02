import { browser, element, by } from 'protractor';

export class HeaderPage {
  megaMenu = element(by.css('.dropdown-lg'));
  dropdownHeader = element(by.css('.dropdown-header'));
  notificationsMenu = element(by.css('.bell'));
  mediaList = element(by.css('.media-list'));
  languagesMenu = element(by.css('.navbar-language'));
  languagesList = element(by.css('.languages-menu'));
  userMenu = element(by.css('.navbar-user'));
  logout = element(by.css('.logout'));

  clickMegaMenu () {
    return this.megaMenu.click();
  }

  clickNotificationsMenu () {
    return this.notificationsMenu.click();
  }

  clickLanguagesMenu () {
    return this.languagesMenu.click();
  }

  clickUserMenu () {
    return this.userMenu.click();
  }

  clickLogout () {
    return this.logout.click();
  }

  navigateTo () {
    return browser.get('/');
  }

}
