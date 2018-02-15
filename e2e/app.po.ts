import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getWelcomeText() {
    return element(by.css('app-root h1')).getText();
  }
}
