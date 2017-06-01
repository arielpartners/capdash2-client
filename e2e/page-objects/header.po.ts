import { browser, element, by } from 'protractor';

export class HeaderPage {
  megaMenu = element(by.css('.dropdown-lg'));
  dropdownHeader = element(by.css('.dropdown-header'));
  notificationMenu = element(by.css('.bell'));
  mediaList = element(by.css('.media-list'));
  userMenu = element(by.css('.navbar-user'));
  logout = element(by.css('.logout'));

  clickMegaMenu () {
    return this.megaMenu.click();
  }

  clickNotificationMenu () {
    return this.notificationMenu.click();
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
