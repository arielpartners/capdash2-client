import { browser, element, by } from 'protractor';

const APP_HEADER = by.css('.app-header');
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

}
