import routes from '../../testRoutes';

interface LogInDMPageProps {
  logInDMAdmin: () => void;
}

const LogInDMPage = (): LogInDMPageProps => {
  const ADMIN_CREDENTIAL = Cypress.env('ER_USER_CREDENTIAL');

  const usernameField = () => {
    return cy.get('.text-input').first();
  };

  const passwordField = () => {
    return cy.get('.text-input').last();
  };

  const signInButton = () => {
    return cy.get('.button');
  };

  const logInDMAdmin = () => {
    usernameField().type(ADMIN_CREDENTIAL);
    passwordField().type(ADMIN_CREDENTIAL);
    signInButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersPage);
  };

  return { logInDMAdmin };
};

export { LogInDMPage };
