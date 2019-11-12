interface LogInPageProps {
  logInERUser: () => void;
  logInPCUser: () => void;
}

const LogInPage = (): LogInPageProps => {
  const USER_ER_CREDENTIAL = Cypress.env('NCDB_USER_ER_CREDENTIAL');
  const USER_PC_CREDENTIAL = Cypress.env('NCDB_USER_PC_CREDENTIAL');
  const BASE_URL = Cypress.env('NCDB_BASE_URL');

  const logInERUser = () => {
    cy.logInUser(BASE_URL, USER_ER_CREDENTIAL);
  };

  const logInPCUser = () => {
    cy.logInUser(BASE_URL, USER_PC_CREDENTIAL);
  };

  return { logInERUser, logInPCUser };
};

export { LogInPage };
