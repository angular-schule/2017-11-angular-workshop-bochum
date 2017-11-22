import { $, $$ } from 'protractor';

export class GoogleResultsPage {
  getResults() {
    const resultsContainer = $('div.srg');
    return resultsContainer.$$('div.g');
  }
}
