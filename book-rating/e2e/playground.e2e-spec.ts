import { browser, $ } from 'protractor';

fdescribe('E2E Playground', () => {

  beforeAll(() => browser.waitForAngularEnabled(false));

  it('should have an impressum link on the start page', () => {
    browser.get('http://www.setlog.com/de/');

    const secCopyright = $('section#copyright');
    expect(secCopyright.getText()).toContain('Impressum');
  });

  afterAll(() => browser.waitForAngularEnabled(true));
});
