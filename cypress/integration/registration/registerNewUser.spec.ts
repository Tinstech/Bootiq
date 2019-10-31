import Pages from '../../support/elements/Pages';

describe('Register user', () => {
  beforeEach('preserve cookies', () => {
    Cypress.Cookies.preserveOnce(
      'JSESSIONID',
      'ncdb_locale',
      'oam.Flash.RENDERMAP.TOKEN'
    );
  });
  after('clear all cookies', () => {
    cy.clearCookies();
  });

  it('log in, go to Dashboard', () => {
    cy.visit('http://docker-01.alive.gts.biq.lan:8080');
    Pages().logInPage.logInUser();
  });
  it('go to Create New Orders page', () => {
    Pages().dashboardPage.goToCreateNewOrdersPage();
  });
  it('go to Action Selection page', () => {
    Pages().orderCreatePage.goToActionSelectionPage();
  });
  it('go to Card Type Selection page', () => {
    cy.get('#j_id_55')
      .find('a')
      .eq(1)
      .click()
      .pathEq('/pages/orders/wizard/cardTypeSelection');
  });
  it('go to Card Holder Selection page', () => {
    cy.get('#j_id_43')
      .find('a')
      .eq(0)
      .click()
      .pathEq('/pages/orders/wizard/cardHolderSelection');
  });
  it('go to Card Owner form page', () => {
    cy.get('#j_id_43')
      .find('a')
      .eq(1)
      .click()
      .pathEq('/pages/cardOwners/cardOwnerForm');
  });
  it('fill in the form, go to Order Create Entries and Order Detail page', () => {
    cy.fixture('snoop_dogg.jpg', 'base64')
      .then(fileContent => {
        cy.get('#photoFileUpload_input').upload(
          { fileContent, fileName: 'snoop-dogg.jpg', mimeType: 'image/jpg' },
          { subjectType: 'input' }
        );
      })
      .get('#name')
      .type('Cypress')
      .get('#surname')
      .type('Test')
      .get('#birthDate_input')
      .type('29.05.1988')
      .get('#j_id_9h\\:organizationAutocomplete_input')
      .type('Cypress Testing')
      .get('.image-button-text')
      .contains('Save')
      .click();
    if (cy.get('#j_id_d3').should('have.attr', 'aria-hidden', 'false')) {
      cy.get('#j_id_d6\\:updateCardOwner')
        .click()
        .pathEq('/pages/orders/wizard/cardHolderSelection')
        .get('#j_id_43')
        .find('a')
        .eq(0)
        .click();
    }
    cy.pathEq('/pages/orders/orderCreateEntries')
      .get('#submitForm')
      .find('a')
      .click()
      .pathEq('/pages/orders/orderDetail');
  });
});
