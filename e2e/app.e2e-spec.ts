import { browser, element, by } from 'protractor';

describe('ArkApp', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('should have a title', () => {
    browser.getTitle().then(title => expect(title).toEqual('T69 Mobile'));
  });
});
