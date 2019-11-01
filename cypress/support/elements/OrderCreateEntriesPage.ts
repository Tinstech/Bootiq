import routes from '../testRoutes';

interface OrderCreateEntriesPageProps {
  goToOrderDetailPage: () => void;
}

const OrderCreateEntriesPage = (): OrderCreateEntriesPageProps => {
  const cardSelectedEntriesButton = () => {
    return cy.get('#submitForm').find('a');
  };

  const goToOrderDetailPage = () => {
    cardSelectedEntriesButton().click();
    cy.pathEq(routes.orderDetailPage);
  };
  return { goToOrderDetailPage };
};

export { OrderCreateEntriesPage };
