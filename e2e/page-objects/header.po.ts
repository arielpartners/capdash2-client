import { browser, element, by } from 'protractor';
import { E2EHelpers } from '../support/e2eHelpers';

const helpers = new E2EHelpers();

export class HeaderPage {
  items = {
    'Mega-menu': {
      element: element(by.css('.dropdown-lg')),
      'Mega-menu Header': {
        element: element(by.css('.dropdown-header'))
      }
    },
    'Notifications': {
      element: element(by.css('.bell')),
      'Media List': {
        element: element(by.css('.media-list'))
      }
    },
    'Languages': {
      element: element(by.css('.navbar-language')),
      'Languages List': {
        element: element(by.css('.languages-menu'))
      }
    },
    'User': {
      element: element(by.css('.navbar-user')),
      'Logout': {
        element: element(by.css('.logout'))
      }
    }
  }

  getItem(item) {
    return helpers.getItem(item, this.items);
  }
  navigateTo () {
    return browser.get('/');
  }

}
