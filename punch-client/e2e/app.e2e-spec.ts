import { PunchClientPage } from './app.po';

describe('punch-client App', function() {
  let page: PunchClientPage;

  beforeEach(() => {
    page = new PunchClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
