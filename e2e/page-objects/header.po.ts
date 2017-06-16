import { browser, element, by } from 'protractor';
import { E2EHelpers } from '../support/e2eHelpers';

const helpers = new E2EHelpers();

export class HeaderPage {
  items = {
    'Mega-menu': {
      element: element(by.css('.dropdown-lg')),
      children: {
        'Mega-menu Header': {
          element: element(by.cssContainingText('h4', 'APP'))
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
          element: element(by.css('div.language'))
        }
      }
    },
    'User': {
      element: element(by.css('.navbar-user')),
      children: {
        'Edit Profile': {
          element: element(by.cssContainingText('a', 'Edit Profile')),
          path: '/app/extra/profile'
        },
        'Work Orders Schedule': {
          element: element(by.cssContainingText('a', 'Work Orders Schedule')),
          path: '/app/work_orders/work_orders/calendar'
        },
        'CapApp Setting': {
          element: element(by.cssContainingText('a', 'CapApp Setting')),
          path: '/app/settings/settings/app_settings'
        },
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
