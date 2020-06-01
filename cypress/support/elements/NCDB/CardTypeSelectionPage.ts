import routes from '../../testRoutes';

interface CardTypeSelectionPageProps {
  goToCardHolderSelectionPage: () => void;
}

const CardTypeSelectionPage = (): CardTypeSelectionPageProps => {
  const chooseISICCardButton = () => {
    return cy.get('#j_id_43').find('a').eq(0);
  };

  const validityDropbox = () => {
    return cy.get('.ui-autocomplete-input').first();
  };

  const newYear = () => {
    return cy.get('.ui-menu-item').last();
  };

  const continueButton = () => {
    return cy.get('#cardTypeSelectionForm\\:j_id_4d');
  };

  const goToCardHolderSelectionPage = () => {
    chooseISICCardButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.validitySelection);
    validityDropbox().click();
    newYear().click();
    continueButton().click();
  };

  return { goToCardHolderSelectionPage };
};

export { CardTypeSelectionPage };
