import { browser, element, by } from 'protractor';

export class LoginPage {
  public emailInputField: any;
  public passwordInputField: any;
  public signinButton: any;

  constructor () {
    this.emailInputField = element(by.css('input[type=email]'));
    this.passwordInputField = element(by.css('input[type=password]'));
    this.signinButton = element(by.buttonText('Sign me in'));
  }

  navigateTo() {
    return browser.get('/');
  }

  enterEmail(email) {
    let emailField = this.emailInputField;

    emailField.sendKeys(email);
  }

  enterPassword(password) {
    let passwordField = this.passwordInputField;

    passwordField.sendKeys(password);
  }

  signIn() {
    this.signinButton.click();
  }
}
