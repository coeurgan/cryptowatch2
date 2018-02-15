import { AppPage } from './app.po';

describe('cryptowatch2 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to CRYPTOWATCH 2!');
  });
});
