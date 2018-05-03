import { AppPage } from './app.po';

describe('protractor-e2e-practice App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Letslearn');
  });

  it('click three times', () => {
    page.navigateTo();

    expect(page.getPoints()).toBe('1');

    page.getPlus1Button().click();
    page.getPlus1Button().click();
    page.getPlus1Button().click();

    expect(page.getPoints()).toBe('4');

    page.getResetButton().click();

    expect(page.getPoints()).toBe('0');
  });
});
