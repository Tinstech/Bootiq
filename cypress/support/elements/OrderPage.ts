interface OrderPageProps {
  deleteOrderAndCardHolder: () => void;
}

const OrderPage = (): OrderPageProps => {
  const deleteOrderButton = () => {
    return cy.get('#j_id_8e\\:orderList\\:0\\:deleteButton');
  };
  const deleteOrderAndCardHolderButton = () => {
    return cy.get('#orderDeleteDialogForm\\:j_id_a4');
  };

  const deleteOrderAndCardHolder = () => {
    deleteOrderButton().click();
    deleteOrderAndCardHolderButton().click();
  };
  return { deleteOrderAndCardHolder };
};

export { OrderPage };
