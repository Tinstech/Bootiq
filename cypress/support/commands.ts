import 'cypress-file-upload';
import routes from './testRoutes';

declare global {
  namespace Cypress {
    interface Chainable {
      pathEq: (path: string) => Chainable<boolean>;
      uploadFile: (
        filename: string,
        input: string,
        mimeType: string
      ) => Chainable<boolean>;
      signOut: () => Chainable<boolean>;
    }
  }
}

export const pathEq = (path: string) => {
  cy.location({ timeout: 5000 }).should(loc => {
    expect(loc.href).to.include(Cypress.env('NCDB_BASE_URL') + path);
  });
};

export const uploadFile = (
  filename: string,
  input: string,
  mimeType: string
) => {
  cy.fixture(filename, 'base64').then(fileContent => {
    cy.get(input).upload(
      { fileContent, fileName: filename, mimeType: mimeType },
      { subjectType: 'input' }
    );
  });
};

export const signOut = () => {
  cy.get('#profile-links')
    .find('a')
    .click({ force: true })
    .pathEq(routes.loginPage);
};

Cypress.Commands.add('pathEq', pathEq);
Cypress.Commands.add('uploadFile', uploadFile);
Cypress.Commands.add('signOut', signOut);
