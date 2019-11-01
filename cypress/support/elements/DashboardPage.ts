import routes from '../testRoutes';

interface DashboardPageProps {
  goToCreateNewOrdersPage: () => void;
}

const DashboardPage = (): DashboardPageProps => {
  const orderCreateButton = () => {
    return cy.get('#shortcutButtonsBar').find('a');
  };

  const goToCreateNewOrdersPage = () => {
    orderCreateButton().click();
    cy.pathEq(routes.orderCreatePage);
  };
  return { goToCreateNewOrdersPage };
};

export { DashboardPage };
