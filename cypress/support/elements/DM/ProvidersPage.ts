import { generateRandomUsername } from '../../commands';
import routes from '../../testRoutes';

interface ProvidersPageProps {
  newDiscountProvider: () => void;
  saveAndDeleteDiscountProvider: () => void;
}

const ProvidersPage = (): ProvidersPageProps => {
  const addDiscountProviderButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const providerNameInput = () => {
    return cy.get('#provider_name');
  };

  const providerSubtitleInput = () => {
    return cy.get('#provider_subtitle');
  };

  const providerShortDescriptionInput = () => {
    return cy.get('#provider_shortDescription');
  };

  const providerDescriptionInput = () => {
    return cy.get('#provider_description');
  };

  const providerSubtitleInputEN = () => {
    return cy.get('#provider_providerL10ns_0_subtitle');
  };

  const providerShortDescriptionInputEN = () => {
    return cy.get('#provider_providerL10ns_0_shortDescription');
  };

  const providerDescriptionInputEN = () => {
    return cy.get('#provider_providerL10ns_0_description');
  };

  const contractValidSinceInput = () => {
    return cy.get('#provider_contractValidSince');
  };

  const providerOrderInput = () => {
    return cy.get('#provider_providerOrder');
  };

  const providerBillingNameInput = () => {
    return cy.get('#provider_billingName');
  };

  const providerAdressInput = () => {
    return cy.get('#provider_billingAddress_address1');
  };

  const providerCityInput = () => {
    return cy.get('#provider_billingAddress_city');
  };

  const providerPostalCodeInput = () => {
    return cy.get('#provider_billingAddress_postalCode');
  };

  const saveDiscountProviderButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const deleteProviderButton = () => {
    return cy.get('#shortcut-button-5');
  };

  const newDiscountProvider = () => {
    const USERNAME = generateRandomUsername();
    addDiscountProviderButton().click();
    providerNameInput().type(USERNAME);
    providerSubtitleInput().type('Test');
    providerShortDescriptionInput().type('Test');
    providerDescriptionInput().type('Test');
    providerSubtitleInputEN().type('Test');
    providerShortDescriptionInputEN().type('Test');
    providerDescriptionInputEN().type('Test');
    contractValidSinceInput().type('01.04.2020');
    providerOrderInput().type('1');
    providerBillingNameInput().type('Franta');
    providerAdressInput().type('hrasok');
    providerCityInput().type('cibula');
    providerPostalCodeInput().type('12345');
  };

  const saveAndDeleteDiscountProvider = () => {
    saveDiscountProviderButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersDetail);
    deleteProviderButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersPage);
  };

  return { newDiscountProvider, saveAndDeleteDiscountProvider };
};

export { ProvidersPage };
