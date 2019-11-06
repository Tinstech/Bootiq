import routes from '../testRoutes';

interface DashboardPageProps {
  goToCreateNewOrdersPage: () => void;
  openOrderListPage: () => void;
}

const DashboardPage = (): DashboardPageProps => {
  const orderCreateButton = () => {
    return cy.get('#shortcutButtonsBar').find('a');
  };

  const goToCreateNewOrdersPage = () => {
    orderCreateButton().click();
    cy.pathEq(routes.orderCreatePage);
  };

  const openOrderListPage = () => {
    cy.get('#main-nav')
      .find('a[href="/pages/orders/orderList.jsf"]')
      .eq(0)
      .click()
      .get('#main-nav')
      .find('a[href="/pages/orders/orderList.jsf"]')
      .eq(1)
      .click()
      .pathEq(routes.orderListPage);
  };

  return { goToCreateNewOrdersPage, openOrderListPage };
};

export { DashboardPage };
