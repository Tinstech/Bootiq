import routes from '../../testRoutes';

interface ActionSelectionPageProps {
  goToCardTypeSelectionPage: () => void;
}

const ActionSelectionPage = (): ActionSelectionPageProps => {
  const orderNewPlasticCardButton = () => {
    return cy
      .get('#j_id_55')
      .find('a')
      .eq(1);
  };

  const goToCardTypeSelectionPage = () => {
    orderNewPlasticCardButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.cardTypeSelectionPage);
  };

  return { goToCardTypeSelectionPage };
};

export { ActionSelectionPage };

