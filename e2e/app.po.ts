import { browser, element, by } from 'protractor';

export class Capdash2Page {
  navigateTo() {
    return browser.get('/');
  }

  getTextByCss(selector) {
    return element(by.css(selector)).getText();
  }
}
