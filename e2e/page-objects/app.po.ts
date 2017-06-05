import { browser, element, by } from 'protractor';

const APP_HEADER = by.css('.app-header');
const APP_SIDEBAR = by.css('.sidebar');
export class Capdash2Page {

  navigateTo() {
    return browser.get('/');
  }

  getCurrentLocation() {
    return browser.getCurrentUrl();
  }

  getTextByCss(selector) {
    return element(by.css(selector)).getText();
  }

  getAppHeader() {
    return browser.wait(() => {
      return browser.isElementPresent(APP_HEADER);
    }, 3000).then(() => {
      return element(APP_HEADER);
    });
  }

  getAppSidebar() {
    return browser.wait(() => {
      return browser.isElementPresent(APP_SIDEBAR);
    }, 3000).then(() => {
      return element(APP_SIDEBAR);
    });
  }

}
