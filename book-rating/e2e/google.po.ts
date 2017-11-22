import { GoogleResultsPage } from './google-results.po';
import { browser, $ } from 'protractor';

export class GooglePage {
  navigateTo() {
    return browser.get('https://www.google.de/');
  }

  doSearch(searchString: string) {
    const form = $('form#tsf');
    const searchInput = form.$('input#lst-ib');

    searchInput.sendKeys(searchString);
    form.submit();

    return new GoogleResultsPage();
  }
}
