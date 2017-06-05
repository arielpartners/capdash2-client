import {AppState} from '../../../../page-objects/app-state.po';
import {defineSupportCode} from 'cucumber';

import { expect } from 'chai';

defineSupportCode(({Given}) => {
  const appState: AppState = new AppState();

  Given('logged in as {user} using {email}:', (user, email) => {
    return appState.logInAs(user, email);
  });
});
