import { browser, element, by } from 'protractor';

export class LoginPage {

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  enterEmail(email) {
    const emailField = element(by.css('input[type=email]'));

    emailField.sendKeys(email);
  }

  enterPassword(password) {
    const passwordField = element(by.css('input[type=password]'));

    passwordField.sendKeys(password);
  }

  signIn() {
    const btn = element(by.buttonText('Sign me in'));

    btn.click();
  }
}
