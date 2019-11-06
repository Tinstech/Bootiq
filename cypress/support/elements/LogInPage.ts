interface LogInPageProps {
  logInERUser: () => void;
  logInPCUser: () => void;
}

const LogInPage = (): LogInPageProps => {
  const userAccountInput = () => {
    return cy.get('#j_username');
  };
  const userPasswordInput = () => {
    return cy.get('#j_password');
  };
  const logInSubmitButton = () => {
    return cy.get('#j_id_1y');
  };

  const USER_ER_CREDENTIAL = Cypress.env('NCDB_USER_ER_CREDENTIAL');
  const USER_PC_CREDENTIAL = Cypress.env('NCDB_USER_PC_CREDENTIAL');

  const logInERUser = () => {
    cy.logInUser(USER_ER_CREDENTIAL);
  };

  const logInPCUser = () => {
    cy.logInUser(USER_PC_CREDENTIAL);
  };
  return { logInERUser, logInPCUser };
};

export { LogInPage };
