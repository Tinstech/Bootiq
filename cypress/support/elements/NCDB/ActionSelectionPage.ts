import routes from '../../testRoutes';

interface ActionSelectionPageProps {
  goToCardTypeSelectionPage: () => void;
  goToOrderCreateEntriesPage: () => void;
}

const ActionSelectionPage = (): ActionSelectionPageProps => {
  const orderNewPlasticCardButton = () => {
    return cy
      .get('#j_id_55')
      .find('a')
      .eq(1);
  };

  const orderInsuranceButton = () => {
    return cy
      .get('#j_id_55')
      .find('a')
      .eq(5);
  };

  const goToCardTypeSelectionPage = () => {
    orderNewPlasticCardButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.cardTypeSelectionPage);
  };

  const goToOrderCreateEntriesPage = () => {
    orderInsuranceButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.orderCreateEntriesPage);
  };

  return { goToCardTypeSelectionPage, goToOrderCreateEntriesPage };
};

export { ActionSelectionPage };
