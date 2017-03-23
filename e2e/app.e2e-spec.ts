import { NgrxSamplePage } from './app.po';

describe('ngrx-sample App', () => {
  let page: NgrxSamplePage;

  beforeEach(() => {
    page = new NgrxSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
