import { Capdash2Page } from './app.po';
import {} from 'jasmine';

describe('capdash2 App', () => {
  let page: Capdash2Page;

  beforeEach(() => {
    page = new Capdash2Page();
  });

  it('should display login screen', () => {
    page.navigateTo();
    page.getTextByCss('.btn-success').then(text => {
      expect(text).toEqual('Sign me in');
    });
  });
});
