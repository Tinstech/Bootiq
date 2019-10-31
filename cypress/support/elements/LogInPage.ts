import routes from '../testRoutes';

class LogInPage {
  userAccountInput() {
    return cy.get('#j_username');
  }

  USERCREDENTIAL = 'gts';

  userPasswordInput() {
    return cy.get('#j_password');
  }

  logInSubmitButton() {
    return cy.get('#j_id_1y');
  }

  logInUser() {
    this.userAccountInput().type(this.USERCREDENTIAL);
    this.userPasswordInput().type(this.USERCREDENTIAL);
    this.logInSubmitButton().click();
    cy.pathEq(routes.dashboardPage);
  }
}

export default LogInPage;
