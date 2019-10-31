import 'cypress-file-upload';

declare global {
  namespace Cypress {
    interface Chainable {
      pathEq: (path: string) => Chainable<boolean>;
    }
  }
}

export const pathEq = (path: string) => {
  cy.location({ timeout: 5000 }).should(loc => {
    expect(loc.href).to.include(Cypress.config().baseUrl + path);
  });
};

Cypress.Commands.add('pathEq', pathEq);
