import { browser, element, by } from 'protractor';

export class HeaderPage {
  megaMenu = {
    parent: element(by.css('.dropdown-lg')),
    child: element(by.css('.dropdown-header'))
  }

  notificationsMenu = {
    parent: element(by.css('.bell')),
    child: element(by.css('.media-list'))
  }

  languagesMenu = {
    parent: element(by.css('.navbar-language')),
    child: element(by.css('.languages-menu'))
  }

  userMenu = {
    parent: element(by.css('.navbar-user')),
    child: element(by.css('.logout'))
  }

  getElement (name, elementType) {

    switch (name) {
      case 'mega-menu':
        return this.megaMenu[elementType];
      case 'notifications':
        return this.notificationsMenu[elementType];
      case 'languages':
        return this.languagesMenu[elementType];
      case 'user':
        return this.userMenu[elementType];
    }
  }

  navigateTo () {
    return browser.get('/');
  }

}
