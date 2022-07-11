import {
  ActionSelectionPage,
  CardHolderSelectionPage,
  CardOwnerFormPage,
  CardTypeSelectionPage,
  DashboardPage,
  LogInPage,
  OrderCreateEntriesPage,
  OrderCreatePage,
  OrderDetailPage,
  OrderListPage
} from '../../support/elements/NCDB';

describe('New ISIC card and Insurance order', () => {
  before('Login', () => {
    cy.visit(Cypress.env('NCDB_BASE_URL'));
    LogInPage().logInERUser();
  });
  beforeEach('preserve cookies', () => {
    Cypress.Cookies.preserveOnce('JSESSIONID', 'ncdb_locale');
  });
  after('', () => {
    cy.clearCookies().signOut(Cypress.env('NCDB_BASE_URL'));
  });



  context('New ISIC card order', () => {
    context('Log in as NCDB user and proceed to new Card owner form', () => {
      //it('log in, go to Dashboard', () => {
      //cy.visit(Cypress.env('NCDB_BASE_URL'));
      //LogInPage().logInERUser();
      //});
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
    });
    context('Process the new Card order', () => {
      it('fill in the form, proceed to Order Create Entries page', () => {
        cy.uploadFile('snoop_dogg.jpg', '#photoFileUpload_input', 'image/jpg');
        CardOwnerFormPage().fillInAndSubmitForm();
        CardOwnerFormPage().checkPathIsOrderCreateEntries();
      });
      it('proceed to Order Detail page', () => {
        OrderCreateEntriesPage().goToOrderDetailPage();
      });
      it('send Order, process Order, sign Out Admin ER', () => {
        OrderDetailPage().checkOrderHistoryTabHasNoOrderedStatus();
        OrderDetailPage().sendOrder();
        OrderDetailPage().checkOrderHistoryTabHasOrderedStatus();
        OrderDetailPage().markPhotosAsAdjusted();
        OrderDetailPage().prepareOrderForProcessing();
        cy.signOut(Cypress.env('NCDB_BASE_URL'));
      });
    });
    context('Process order as Personalization center user ', () => {
      it('sign in as Personalization Center User', () => {
        cy.visit(Cypress.env('NCDB_BASE_URL'));
        LogInPage().logInPCUser();
      });
      it('Finish order processing', () => {
        DashboardPage().openOrderListPage();
        OrderListPage().openNewestOrderDetail();
        OrderDetailPage().processOrder();
        cy.signOut(Cypress.env('NCDB_BASE_URL'));
        cy.visit(Cypress.env('NCDB_BASE_URL'));
        LogInPage().logInERUser();
        DashboardPage().openOrderListPage();
        OrderDetailPage().finishOrderProcessing();
        cy.signOut(Cypress.env('NCDB_BASE_URL'));
      });
    });
  });






  // zakomentovany jeho druhy test ktory vlozit do prveho testu...


  //   context('New Insurance order ', () => {
  //     it('log in, go to Dashboard', () => {
  //       LogInPage().logInERUser();
  //     });
  //     it('go to Create New Orders page', () => {
  //       DashboardPage().goToCreateNewOrdersPage();
  //     });
  //     it('go to Action Selection page', () => {
  //       OrderCreatePage().goToActionSelectionPage();
  //     });
  //     it('go to Card Type Selection page', () => {
  //       ActionSelectionPage().goToOrderCreateEntriesPage();
  //     });
  //     it('add Selected Entries and proceed to Order Insurance Entries page', () => {
  //       OrderCreateEntriesPage().sortNewestAvailableItem();
  //       OrderCreateEntriesPage().checkSelectedItemsListContainsSelectedUsename();
  //       OrderCreateEntriesPage().goToCreateInsuranceEntriesPage();
  //     });
  //     it('fill in User data, proceed to Order Detail Page', () => {
  //       OrderCreateInsuranceEntriesPage().fillInUserData();
  //       OrderCreateInsuranceEntriesPage().goToOrderDetailPage();
  //     });
  //     it('send order, process order ', () => {
  //       OrderDetailPage().checkOrderHistoryTabHasNoOrderedStatus();
  //       OrderDetailPage().sendOrder();
  //       OrderDetailPage().checkOrderHistoryTabHasOrderedStatus();
  //       OrderDetailPage().processOrder();
  //     });
  //   });
});
