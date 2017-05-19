import { browser } from 'protractor';
import { Capdash2Page } from '../app.po';
import { defineSupportCode } from 'cucumber';
import {} from 'jasmine';

defineSupportCode(function ({Given}) {
  let page: Capdash2Page = new Capdash2Page();

  Given(/^I am on login page$/, () => {
    page.navigateTo();
    return page.getTitle().then(title => {
      expect(title).toEqual("something");
    });
  });
})
