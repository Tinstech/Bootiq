import routes from '../../testRoutes';

interface CardHolderSelectionPageProps {
  goToCardOwnerFormPage: () => void;
  chooseExistingCardHolder: () => void;
}

const CardHolderSelectionPage = (): CardHolderSelectionPageProps => {
  const createNewCardHolderButton = () => {
    return cy
      .get('#j_id_43')
      .find('a')
      .eq(1);
  };

  const chooseExistingCardHolderButton = () => {
    return cy
      .get('#j_id_43')
      .find('a')
      .eq(0);
  };
  const goToCardOwnerFormPage = () => {
    createNewCardHolderButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.cardOwnerFormPage);
  };
  const chooseExistingCardHolder = () => {
    chooseExistingCardHolderButton().click();
  };
  return { goToCardOwnerFormPage, chooseExistingCardHolder };
};

export { CardHolderSelectionPage };
