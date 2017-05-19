import { browser, element, by } from 'protractor';

export class Capdash2Page {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getTextByCss(selector) {
    return element(by.css(selector)).getText();
  }
}
