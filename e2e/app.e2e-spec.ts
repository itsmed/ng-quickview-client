import { SuperheroBookingAgencyPage } from './app.po';

describe('superhero-booking-agency App', () => {
  let page: SuperheroBookingAgencyPage;

  beforeEach(() => {
    page = new SuperheroBookingAgencyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
