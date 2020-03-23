import {
  AdditionalProductsPage,
  CardOrdersPage,
  CardTypeSelectionPage,
  LogInOO2Page,
  OverviewPage,
  PersonalDataPage,
} from '../../support/elements/OO2';
import routes from '../../support/testRoutes';

describe('New ISIC card and Insurance order', () => {
  beforeEach('preserve cookies', () => {
    Cypress.Cookies.preserveOnce('oo_locale', 'PHPSESSID');
  });
  after('clear cookies', () => {
    cy.clearCookies();
  });

  it('go to Personal Data Page', () => {
    cy.visit(Cypress.env('OO2_BASE_URL'));
    CardTypeSelectionPage().goToPersonalDataPage();
  });
  it('fill in the form, upload pictures and proceed to Services Page', () => {
    cy.uploadFile('snoop_dogg.jpg', '#photoupload', 'image/jpg')
      .uploadFile(
        'snoop_dogg.jpg',
        '#documentupload_proof_of_study',
        'image/jpg',
      )
      .uploadFile(
        'snoop_dogg.jpg',
        '#documentupload_identity_card_applicant',
        'image/jpg',
      );
    PersonalDataPage().fillInAndSubmitPersonalDataForm();
  });
  it('choose an insurance and fill in the form then proceed to Overview Page', () => {
    AdditionalProductsPage().goToOverviewPage();
  });
  it('fill in delivery form, choose payment, proceed to Payment status page', () => {
    OverviewPage().fillInDeliveryMethod();
    OverviewPage().choosePaymentMethod();
    OverviewPage().submitOverviewPageForm();
  });
  it('proceed to Payment Success', () => {
    cy.url().then(url => {
      const urlPaymentSuccess = url.replace('failure', 'success');
      cy.visit(urlPaymentSuccess);
    });
    cy.get('.contentBoxContent')
      .eq(1)
      .find('h2')
      .should('contain', 'successful');
  });

  it('log in as admin', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.visit(`${Cypress.env('OO2_BASE_URL')}${routes.adminOO2LoginPage}`);
    LogInOO2Page().logInOO2Admin();
  });
  it('mark as paid order and validate order', () => {
    CardOrdersPage().orderExport();
  });
});
