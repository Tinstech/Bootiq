import routes from '../../testRoutes';

interface AdditionalProductsPageProps {
  goToOverviewPage: () => void;
}

const AdditionalProductsPage = (): AdditionalProductsPageProps => {
  const travelInsuranceButton = () => {
    return cy.get('#form_insurance');
  };

  const supplementaryInsuranceOption1 = () => {
    return cy.get('#f_IA_c_L');
  };

  const supplementaryInsuranceOption2 = () => {
    return cy.get('#f_IA_c_Z');
  };

  const supplementaryInsuranceOption3 = () => {
    return cy.get('#f_IA_c_R');
  };

  const supplementaryInsuranceOption4 = () => {
    return cy.get('#f_IA_c_U');
  };

  const supplementaryInsuranceOption5 = () => {
    return cy.get('#f_IA_c_W');
  };

  const nationalIDNumberInput = () => {
    return cy.get('#form_birthNumber');
  };

  const streetInput = () => {
    return cy.get('#form_address_address1');
  };

  const cityInput = () => {
    return cy.get('#form_address_city');
  };

  const postalCodeInput = () => {
    return cy.get('#form_address_postalCode');
  };

  const formSubmitButton = () => {
    return cy.get('#form_submit');
  };

  const fillInsuredPersonsDetailsForm = () => {
    nationalIDNumberInput().type('980409/0010');
    streetInput().type('Buckingham Palace');
    cityInput().type('London');
    postalCodeInput().type('SW1A 1AA');
  };

  const chooseTravelInsuranceOptions = () => {
    travelInsuranceButton().click();
    supplementaryInsuranceOption1().click();
    supplementaryInsuranceOption2().click();
    supplementaryInsuranceOption3().click();
    supplementaryInsuranceOption4().click();
    supplementaryInsuranceOption5().click();
  };

  const goToOverviewPage = () => {
    chooseTravelInsuranceOptions();
    fillInsuredPersonsDetailsForm();
    formSubmitButton().click();
    cy.pathEq(Cypress.env('OO2_BASE_URL'), routes.overviewPage);
  };

  return { goToOverviewPage };
};

export { AdditionalProductsPage };
