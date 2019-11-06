import {
  ActionSelectionPage,
  CardHolderSelectionPage,
  CardOwnerFormPage,
  CardTypeSelectionPage,
  DashboardPage,
  LogInPage,
  OrderCreateEntriesPage,
  OrderCreatePage,
  OrderPage
} from '../../support/elements';
import routes from '../../support/testRoutes';

describe('New ISIC card order', () => {
  beforeEach('preserve cookies', () => {
    Cypress.Cookies.preserveOnce(
      'JSESSIONID',
      'ncdb_locale',
      'oam.Flash.RENDERMAP.TOKEN'
    );
  });
  after('', () => {
    cy.visit(`${Cypress.env('NCDB_BASE_URL')}${routes.orderPage}`);
    OrderPage().deleteLastOrderAndCardHolder();
    cy.clearCookies().signOut();
  });

  it('log in, go to Dashboard', () => {
    cy.visit(Cypress.env('NCDB_BASE_URL'));
    LogInPage().logInUser();
  });
  it('go to Create New Orders page', () => {
    DashboardPage().goToCreateNewOrdersPage();
  });
  it('go to Action Selection page', () => {
    OrderCreatePage().goToActionSelectionPage();
  });
  it('go to Card Type Selection page', () => {
    ActionSelectionPage().goToCardTypeSelectionPage();
  });
  it('go to Card Holder Selection page', () => {
    CardTypeSelectionPage().goToCardHolderSelectionPage();
  });
  it('go to Card Owner form page', () => {
    CardHolderSelectionPage().goToCardOwnerFormPage();
  });
  it('fill in the form, go to Order Create Entries page', () => {
    cy.uploadFile('snoop_dogg.jpg', '#photoFileUpload_input', 'image/jpg');
    CardOwnerFormPage().fillInAndSubmitForm();
    CardOwnerFormPage().checkPathIsOrderCreateEntries();
  });
  it('filter & select Tested Item, go to Order Detail page', () => {
    OrderCreateEntriesPage().filterTestedItem();
    OrderCreateEntriesPage().selectFilteredItem();
    OrderCreateEntriesPage().goToOrderDetailPage();
  });
});
