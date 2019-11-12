import routes from '../../testRoutes';

interface OrderListPageProps {
  deleteLastOrderAndCardHolder: () => void;
  openNewestOrderDetail: () => void;
}

const OrderListPage = (): OrderListPageProps => {
  const deleteLastOrderButton = () => {
    return cy.get('#j_id_8e\\:orderList\\:0\\:deleteButton');
  };
  const deleteLastOrderAndCardHolderButton = () => {
    return cy.get('#orderDeleteDialogForm\\:j_id_a4').find('span');
  };
  const newestOrderDetail = () => {
    return cy
      .get('#j_id_8e\\:orderList_data')
      .find('tr')
      .eq(0)
      .find('td')
      .last()
      .find('span');
  };

  const deleteLastOrderAndCardHolder = () => {
    deleteLastOrderButton().click();
    deleteLastOrderAndCardHolderButton().click({ force: true });
  };

  const openNewestOrderDetail = () => {
    newestOrderDetail().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.orderDetailPage);
  };

  return { deleteLastOrderAndCardHolder, openNewestOrderDetail };
};

export { OrderListPage };
