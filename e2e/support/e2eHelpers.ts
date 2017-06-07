import { browser, element, by } from 'protractor';

import { LoginPage } from '../page-objects/login.po';
import { HeaderPage } from '../page-objects/header.po';

const loginPage: LoginPage = new LoginPage();
const headerPage: HeaderPage = new HeaderPage();

export class E2EHelpers {

  getItem(item, items) {
    return item in items ? items[item] : this.findItem(item, items);
  }

  findItem(itemToFind, items) {
    for (const menuItem in items) {
      if (items.hasOwnProperty(menuItem)) {
        const subItems = items[menuItem];
        for (const subItem in subItems) {
          if (subItems[itemToFind]) {
            return subItems[itemToFind];
          } else {
            if (subItems[subItem].element && !subItems[subItem].path) {
              if (subItems[subItem][itemToFind]) {
                return subItems[subItem][itemToFind];
              }
            }
          }
        }
      }
    }
  }

  confirmLogin () {
    return browser.getCurrentUrl().then(url => {
      if (/login/.test(url)) {
        loginPage.login('sample_user@hra.nyc.gov', 'password');
      }
    });
  }

  logout() {
    return browser.getCurrentUrl().then( url => {
      if (!/login/.test(url)) {
        return headerPage.getElement('user', 'parent').click().then(() => {
          return headerPage.getElement('user', 'child').click();
        });
      }
    });
  }

  hasClass (classList, cssClass) {
    return classList.indexOf(cssClass) !== -1;
  }
}
