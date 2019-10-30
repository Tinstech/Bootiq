import 'cypress-file-upload';

declare global {
  namespace Cypress {
    interface Chainable {
      pathEq: (path: string) => Chainable<boolean>;
      loginGTS: () => Chainable<boolean>;
    }
  }
}

export const pathEq = (path: string) => {
  cy.location({ timeout: 10000 }).should(loc => {
    expect(loc.href).to.eq(Cypress.config().baseUrl + path);
  });
};

export const loginGTS = () => {
  cy.get('#j_username')
    .type('gts')
    .get('#j_password')
    .type('gts')
    .get('#j_id_1y')
    .click()
    .url()
    .should('include', 'pages/dashboard');
};

Cypress.Commands.add('pathEq', pathEq);
Cypress.Commands.add('loginGTS', loginGTS);
