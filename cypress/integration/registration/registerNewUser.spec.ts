describe('Register user', () => {
  beforeEach('preserve Cookies', () => {
    Cypress.Cookies.preserveOnce(
      'JSESSIONID',
      'ncdb_locale',
      'oam.Flash.RENDERMAP.TOKEN'
    );
  });
  after('clear all cookies', () => {
    cy.clearCookies();
  });

  it('Log in, go to Dashboard', () => {
    cy.visit('http://docker-01.alive.gts.biq.lan:8080').loginGTS();
  });

  it('Go to Create New Order page', () => {
    cy.get('#shortcutButtonsBar')
      .find('a')
      .click()
      .url()
      .should('include', 'orders/orderCreate.jsf');
  });

  it('go to Action Selection page', () => {
    cy.get('#j_id_43\\:j_id_46\\:cardIssuerAutoComplete_input')
      .click()
      .get('[data-item-value="2018"]')
      .click({ force: true })
      .get('#j_id_43\\:j_id_4q')
      .click()
      .url()
      .should('include', 'orders/wizard/actionSelection');
  });
  it('go to Card Type Selection page', () => {
    cy.get('#j_id_55')
      .find('a')
      .eq(1)
      .click()
      .url()
      .should('include', 'orders/wizard/cardTypeSelection');
  });
  it('go to Card Holder Selection page', () => {
    cy.get('#j_id_43')
      .find('a')
      .eq(0)
      .click()
      .url()
      .should('include', 'orders/wizard/cardHolderSelection');
  });
  it('go to Card Owner form page', () => {
    cy.get('#j_id_43')
      .find('a')
      .eq(1)
      .click()
      .url()
      .should('include', 'cardOwners/cardOwnerForm');
  });
  it('fill in the form, go to Order Create Entries page', () => {
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
      cy.get('#j_id_d6\\:updateCardOwner').click();
      cy.url().should('include', 'orders/wizard/cardHolderSelection');
      cy.get('#j_id_43')
        .find('a')
        .eq(0)
        .click();
    }
    cy.url().should('include', 'orders/orderCreateEntries');
  });
});
