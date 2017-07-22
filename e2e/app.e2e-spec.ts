import { AngolarePage } from './app.po';

describe('angolare App', () => {
  let page: AngolarePage;

  beforeEach(() => {
    page = new AngolarePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
