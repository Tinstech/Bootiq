import 'cypress-file-upload';
import routes from './testRoutes';

declare global {
  namespace Cypress {
    interface Chainable {
      pathEq: (productURL: string, path: string) => Chainable<boolean>;
      uploadFile: (
        filename: string,
        input: string,
        mimeType: string,
      ) => Chainable<boolean>;
      logInUser: (
        productURL: string,
        usercredential: string,
      ) => Chainable<boolean>;
      signOut: (productURL: string) => Chainable<boolean>;
    }
  }
}

export const pathEq = (productURL: string, path: string) => {
  cy.location({ timeout: 5000 }).should(loc => {
    expect(loc.href).to.include(productURL + path);
  });
};

export const uploadFile = (
  filename: string,
  input: string,
  mimeType: string,
) => {
  cy.fixture(filename, 'base64').then(fileContent => {
    cy.get(input).upload(
      { fileContent, fileName: filename, mimeType: mimeType },
      { subjectType: 'input' },
    );
  });
};

export const logInUser = (productURL: string, usercredential: string) => {
  cy.get('#j_username')
    .type(usercredential)
    .get('#j_password')
    .type(usercredential)
    .get('#j_id_1y')
    .click();
  // .pathEq(productURL, routes.dashboardPage);
};

export const signOut = (productURL: string) => {
  cy.get('#profile-links')
    .find('a')
    .click({ force: true })
    .pathEq(productURL, routes.loginPage);
};

export const generateRandomUsername = () => {
  let text = '';
  const possible = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < 5; i++)
    text += possible.charAt(Cypress._.floor(Math.random() * possible.length));
  return `Cypress${text}`;
};

Cypress.Commands.add('pathEq', pathEq);
Cypress.Commands.add('uploadFile', uploadFile);
Cypress.Commands.add('signOut', signOut);
Cypress.Commands.add('logInUser', logInUser);
