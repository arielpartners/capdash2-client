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

  getElement (name, getChild) {
    switch (name) {
      case 'mega-menu':
        return getChild ? this.dropdownHeader : this.megaMenu;
      case 'notifications':
        return getChild ? this.mediaList : this.notificationsMenu;
      case 'languages':
        return getChild ? this.languagesList : this.languagesMenu;
      case 'user':
        return getChild ? this.logout : this.userMenu;
    }
  }

  navigateTo () {
    return browser.get('/');
  }

}
