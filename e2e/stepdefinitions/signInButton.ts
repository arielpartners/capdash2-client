import { Capdash2Page } from '../app.po';
import { defineSupportCode } from 'cucumber';
import { expect } from 'chai';

defineSupportCode(function ({Then}) {
  let page: Capdash2Page = new Capdash2Page();

  Then(/^I see button to sign in$/, () => {
    return page.getTextByCss('.btn-success').then(text => {
      expect(text).to.equal('Sign me in');
    });
  });
})
