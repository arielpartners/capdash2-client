import { browser, element, by } from 'protractor';
import { LoginPage } from '../page-objects/login.po';
import { AppState } from '../page-objects/app-state.po';

const appState: AppState = new AppState();
const loginPage: LoginPage = new LoginPage();

export class E2EHelpers {
  confirmLogin () {
    return browser.getCurrentUrl().then(url => {
      if (/login/.test(url)) {
        loginPage.login('sample_user@hra.nyc.gov', 'password');
      }
    });
  }

  // TODO: Hard coding user for now pending way of using Examples
  confirmLoggedInAs () {
    appState.logInAs('John Doe', 'sample_user@dhs.nyc.gov');
    return browser.getCurrentUrl().then(url => {
      if (/login/.test(url)) {
        loginPage.login('sample_user@hra.nyc.gov', 'password');
      }
    });
  }
}
