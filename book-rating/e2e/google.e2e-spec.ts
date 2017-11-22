import { browser } from 'protractor';
import { GoogleResultsPage } from './google-results.po';
import { GooglePage } from './google.po';


describe('Google Search', () => {
  let resultsPage: GoogleResultsPage;

  beforeAll(() => browser.waitForAngularEnabled(false));

  beforeAll(() => {
    const page = new GooglePage();
    page.navigateTo();
    resultsPage = page.doSearch('AngularJS');
  });

  it('should display 10 results', () => {
    const results = resultsPage.getResults();
    expect(results.count()).toBe(10);
  });

  it('should display Angular.io as first result', () => {
    const firstResult = resultsPage.getResults().first();
    const linkContainer = firstResult.$('cite._Rm');
    expect(linkContainer.getText()).toContain('angular.io');
  });

  afterAll(() => browser.waitForAngularEnabled(true));



});
