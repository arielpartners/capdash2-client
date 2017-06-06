import { browser, element, by } from 'protractor';

export class LoginPage {
  emailField = element(by.css('input[type=email]'));
  passwordField = element(by.css('input[type=password]'));
  loginHeader = element(by.css('.login-header'));

  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return browser.getTitle();
  }

  getTextByCss(selector) {
    return element(by.css(selector)).getText();
  }

  enterEmail(email) {
    this.emailField.sendKeys(email);
  }

  enterPassword(password) {
    this.passwordField.sendKeys(password);
  }

  signIn() {
    const btn = element(by.buttonText('Sign me in'));

    return btn.click();
  }

  login(email, password) {
    this.enterEmail(email);
    this.enterPassword(password);

    return this.signIn();
  }

  getField(field) {
    switch (field) {
      case 'email': return this.emailField;
      case 'password': return this.passwordField;
    }
  }

  getAlert(text) {
    return element(by.cssContainingText('.alert-danger', text));
  }
}
