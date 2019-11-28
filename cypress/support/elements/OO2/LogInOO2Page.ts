interface LogInOO2PageProps {
  logInOO2Admin: () => void;
}

const LogInOO2Page = (): LogInOO2PageProps => {
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

  const logInOO2Admin = () => {
    usernameField().type(ADMIN_CREDENTIAL);
    passwordField().type(ADMIN_CREDENTIAL);
    signInButton().click();
  };

  return { logInOO2Admin };
};

export { LogInOO2Page };
