import { browser, element, by } from 'protractor';

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

}
