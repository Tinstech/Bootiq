import { generateRandomUsername } from '../../commands';
import routes from '../../testRoutes';

interface ProvidersAccountsPageProps {
  newProviderUser: () => void;
}

const ProvidersAccountsPage = (): ProvidersAccountsPageProps => {
  const saveProviderButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const addUserAccountButton = () => {
    return cy.get('#addUsers');
  };

  const addPersonalAccountButton = () => {
    return cy.get('#shortcut-button-2');
  };

  const usernameInput = () => {
    return cy.get('#provider_account_username');
  };

  const passwordInput = () => {
    return cy.get('#provider_account_passwordUpdate');
  };

  const passwordConfirmationInput = () => {
    return cy.get('#provider_account_passwordConfirm');
  };

  const firstNameInput = () => {
    return cy.get('#provider_account_firstName');
  };

  const lastNameInput = () => {
    return cy.get('#provider_account_lastName');
  };

  const emailInput = () => {
    return cy.get('#provider_account_email');
  };

  const shopTypeCheckbox = () => {
    return cy.get('#provider_account_shopType_1');
  };

  const assigningBranchesCheckbox = () => {
    return cy.get('#provider_account_dynamicBranchLinking');
  };

  const saveUserAccountButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const backToProvidersDetailButton = () => {
    return cy.get('#shortcut-button-1');
  };

  const deleteProviderButton = () => {
    return cy.get('#deleteProvider');
  };

  const newProviderUser = () => {
    const USERNAME = generateRandomUsername();
    saveProviderButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersDetail);
    addUserAccountButton().click();
    addPersonalAccountButton().click();
    usernameInput().type(USERNAME);
    passwordInput().type('123456');
    passwordConfirmationInput().type('123456');
    firstNameInput().type('test');
    lastNameInput().type('testtt');
    emailInput().type('test@test.com');
    shopTypeCheckbox().click();
    assigningBranchesCheckbox().click();
    saveUserAccountButton().click();
    backToProvidersDetailButton().click();
    deleteProviderButton().click();
  };

  return { newProviderUser };
};

export { ProvidersAccountsPage };
