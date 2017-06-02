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

  getElement (name, getChild) {
    const element = getChild ? 'child' : 'parent';

    switch (name) {
      case 'mega-menu':
        return this.megaMenu[element];
      case 'notifications':
        return this.notificationsMenu[element];
      case 'languages':
        return this.languagesMenu[element];
      case 'user':
        return this.userMenu[element];
    }
  }

  navigateTo () {
    return browser.get('/');
  }

}
