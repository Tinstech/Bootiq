import routes from '../../testRoutes';

interface CardOrdersPageProps {
  orderExport: () => void;
}

const CardOrdersPage = (): CardOrdersPageProps => {
  const orderDetailButton = () => {
    return cy
      .get('.content-box-content')
      .find('tbody')
      .find('tr')
      .eq(0)
      .find('td')
      .last()
      .find('a')
      .eq(0);
  };

  const markAsPaidAndValidateButton = () => {
    return cy.get('.image-button-text').eq(0);
  };

  const exportToNCDBButton = () => {
    return cy.get('.shortcut-button');
  };

  const exportButton = () => {
    return cy.get('#validities_export_select_submit');
  };

  const orderExport = () => {
    orderDetailButton().click();
    cy.pathEq(Cypress.env('OO2_BASE_URL'), routes.adminCardOrdersDetail);
    markAsPaidAndValidateButton().should('contain', 'Mark as paid');
    markAsPaidAndValidateButton().click();
    markAsPaidAndValidateButton().should('contain', 'Validate');
    markAsPaidAndValidateButton().click();
    exportToNCDBButton().click();
    exportButton().click({ force: true });
  };

  return {
    orderExport,
  };
};

export { CardOrdersPage };
