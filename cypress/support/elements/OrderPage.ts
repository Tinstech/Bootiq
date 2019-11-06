interface OrderPageProps {
  deleteLastOrderAndCardHolder: () => void;
}

const OrderPage = (): OrderPageProps => {
  const deleteLastOrderButton = () => {
    return cy.get('#j_id_8e\\:orderList\\:0\\:deleteButton');
  };
  const deleteLastOrderAndCardHolderButton = () => {
    return cy.get('#orderDeleteDialogForm\\:j_id_a4').find('span');
  };

  const deleteLastOrderAndCardHolder = () => {
    deleteLastOrderButton().click();
    deleteLastOrderAndCardHolderButton().click({ force: true });
  };
  return { deleteLastOrderAndCardHolder };
};

export { OrderPage };
