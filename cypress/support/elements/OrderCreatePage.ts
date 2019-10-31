import routes from '../testRoutes';

class OrderCreatePage {
  cardIssuerInput() {
    return cy.get('#j_id_43\\:j_id_46\\:cardIssuerAutoComplete_input');
  }
  onlineOrderingOption() {
    return cy.get('[data-item-value="2018"]');
  }
  cardIssuerSubmitButton() {
    return cy.get('#j_id_43\\:j_id_4q');
  }

  goToActionSelectionPage() {
    this.cardIssuerInput().type('Online ordering');
    this.onlineOrderingOption().click({ force: true });
    this.cardIssuerSubmitButton().click();
    cy.pathEq(routes.actionSelectionPage);
  }
}

export default OrderCreatePage;
