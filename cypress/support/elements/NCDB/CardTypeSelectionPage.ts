import routes from '../../testRoutes';

interface CardTypeSelectionPageProps {
  goToCardHolderSelectionPage: () => void;
}

const CardTypeSelectionPage = (): CardTypeSelectionPageProps => {
  const chooseISICCardButton = () => {
    return cy
      .get('#j_id_43')
      .find('a')
      .eq(0);
  };
  const goToCardHolderSelectionPage = () => {
    chooseISICCardButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.cardHolderSelectionPage);
  };
  return { goToCardHolderSelectionPage };
};

export { CardTypeSelectionPage };
