import { AngularEventsPage } from './app.po';

describe('angular-events App', () => {
  let page: AngularEventsPage;

  beforeEach(() => {
    page = new AngularEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
