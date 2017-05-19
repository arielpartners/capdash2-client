import { Capdash2Page } from '../app.po';
import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';

defineSupportCode(function ({Then}) {
  let page: Capdash2Page = new Capdash2Page();

  Then(/^I see button to sign in$/, () => {
    return page.getTextByCss('.btn-success').then(text => {
      expect(text).toEqual('Sign me in');
    });
  });
})
