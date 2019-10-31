import routes from '../testRoutes';

class DashboardPage {
  orderCreateButton() {
    return cy.get('#shortcutButtonsBar').find('a');
  }

  goToCreateNewOrdersPage() {
    this.orderCreateButton().click();
    cy.pathEq(routes.orderCreatePage);
  }
}

export default DashboardPage;
