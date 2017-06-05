import {browser} from 'protractor';
import { expect } from 'chai';

export class AppState {
  logInAs(user, email) {
      browser.executeScript(function () {

        // Set Token
        (<any>window).store.dispatch(
          {
            type: 'LOAD_SUCCEEDED',
            meta: {
              itemType: 'user_token'
            },
            payload: {
              jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTM0Nzk4ODAsInN1YiI6MX0.zzUP-jvWM-_lhhoXt5Jfgd-fjA-JgxC5iYMriBgpgv4'
            }
          }
        );

        // Set User
        (<any>window).store.dispatch(
          {
            type: 'LOAD_SUCCEEDED',
            meta: {
              itemType: 'user'
            },
            payload: {
              email: arguments[1],
              name: arguments[0],
              profile_image: '/assets/img/user-rbs.jpg'
            }
          }
        );
    }, user);
      // browser.pause();
  }
}
