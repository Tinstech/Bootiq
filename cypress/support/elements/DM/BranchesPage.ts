import routes from '../../testRoutes';

interface BranchesPageProps {
  newBranch: () => void;
}

const BranchesPage = (): BranchesPageProps => {
  const saveProviderButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const addBranchButton = () => {
    return cy.get('#addBranch');
  };

  const firstAddressLineInput = () => {
    return cy.get('#branch_address_address1');
  };

  const addressCityInput = () => {
    return cy.get('#branch_address_city');
  };

  const postalCodeInput = () => {
    return cy.get('#branch_address_postalCode');
  };

  const latitudeInput = () => {
    return cy.get('#branch_latitude');
  };

  const longitudeInput = () => {
    return cy.get('#branch_longitude');
  };

  const offersAllDiscountsCheckbox = () => {
    return cy.get('#branch_dynamicDiscountLinking');
  };

  const saveBranchButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const deleteDiscountProvider = () => {
    return cy.get('#deleteProvider');
  };

  const newBranch = () => {
    saveProviderButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersDetail);
    addBranchButton().click();
    firstAddressLineInput().type('test');
    addressCityInput().type('city');
    postalCodeInput().type('12345');
    latitudeInput().type('47');
    longitudeInput().type('47');
    offersAllDiscountsCheckbox().click();
    saveBranchButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersDetail);
    deleteDiscountProvider().click();
  };

  return { newBranch };
};

export { BranchesPage };
