import routes from '../testRoutes';

interface OrderCreatePageProps {
  goToActionSelectionPage: () => void;
}

const OrderCreatePage = (): OrderCreatePageProps => {
  const cardIssuerInput = () => {
    return cy.get('#j_id_43\\:j_id_46\\:cardIssuerAutoComplete_input');
  };
  const onlineOrderingOption = () => {
    return cy.get('[data-item-value="2018"]');
  };
  const cardIssuerSubmitButton = () => {
    return cy.get('#j_id_43\\:j_id_4q');
  };

  const goToActionSelectionPage = () => {
    cardIssuerInput().type('Online ordering');
    onlineOrderingOption().click({ force: true });
    cardIssuerSubmitButton().click();
    cy.pathEq(routes.actionSelectionPage);
  };
  return { goToActionSelectionPage };
};

export { OrderCreatePage };
