import routes from '../../testRoutes';

interface CardTypeSelectionPageProps {
  goToPersonalDataPage: () => void;
}

const CardTypeSelectionPage = (): CardTypeSelectionPageProps => {
  const orderISICCardButton = () => {
    return cy.get('a[data-card-type="ISIC"]').find('.cardOrderButtonLabel');
  }

  const goToPersonalDataPage = () => {
    orderISICCardButton().click();
    cy.pathEq(Cypress.env('OO2_BASE_URL'), routes.personalDataPage);
  }

  return { goToPersonalDataPage };
};

export { CardTypeSelectionPage };

