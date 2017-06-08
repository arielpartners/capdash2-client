import { browser, element, by } from 'protractor';
import { E2EHelpers } from '../support/e2eHelpers';

const helpers = new E2EHelpers();

export class HeaderPage {
  items = {
    'Mega-menu': {
      element: element(by.css('.dropdown-lg')),
      children: {
        'Mega-menu Header': {
          element: element(by.css('.dropdown-header'))
        }
      }
    },
    'Notifications': {
      element: element(by.css('.bell')),
      children: {
        'Media List': {
          element: element(by.css('.media-list'))
        }
      }
    },
    'Languages': {
      element: element(by.css('.navbar-language')),
      children: {
        'Languages List': {
          element: element(by.css('.languages-menu'))
        }
      }
    },
    'User': {
      element: element(by.css('.navbar-user')),
      children: {
        'Logout': {
          element: element(by.css('.logout'))
        }
      }
    }
  }

  getItem(item) {
    return helpers.getItem(item, this.items);
  }

  getChild(item) {
    return helpers.getChild(item, this.items);
  }

  navigateTo () {
    return browser.get('/');
  }

  logout() {
    return browser.getCurrentUrl().then( url => {
      if (!/login/.test(url)) {
        return this.getItem('User').element.click().then(() => {
          return this.getItem('Logout').element.click();
        });
      }
    });
  }

}
