import routes from '../testRoutes';

interface LogInPageProps {
  logInUser: () => void;
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
  const USERCREDENTIAL = 'gts';

  const logInUser = () => {
    userAccountInput().type(USERCREDENTIAL);
    userPasswordInput().type(USERCREDENTIAL);
    logInSubmitButton().click();
    cy.pathEq(routes.dashboardPage);
  };
  return { logInUser };
};

export { LogInPage };
