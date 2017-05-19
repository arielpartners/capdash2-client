import { Capdash2Page } from './app.po';
import {} from 'jasmine';

describe('capdash2 App', () => {
  let page: Capdash2Page;

  beforeEach(() => {
    page = new Capdash2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    page.getParagraphText().then(text => {
      expect(text).toEqual('cd works!');
    });
  });
});
