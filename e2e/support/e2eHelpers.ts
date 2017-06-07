import { browser, element, by } from 'protractor';

import { LoginPage } from '../page-objects/login.po';
import { HeaderPage } from '../page-objects/header.po';

const loginPage: LoginPage = new LoginPage();
const headerPage: HeaderPage = new HeaderPage();

export class E2EHelpers {

  getItem(item, items) {
    return item in items ? items[item] : this.findItem(item, items);
  }

  findItem(item, items) {
    for (const menuItem in items) {
      if (items[menuItem].subItems) {
        if (items[menuItem].subItems[item]) {
          return items[menuItem].subItems[item];
        } else {
          const found = this.findItem(item, items[menuItem].subItems);
          if (found) {
            return found;
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
