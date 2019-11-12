interface OverviewPageProps {
  fillInDeliveryMethod: () => void;
  choosePaymentMethod: () => void;
  submitOverviewPageForm: () => void;
}

const OverviewPage = (): OverviewPageProps => {
  const streetInput = () => {
    return cy.get('#overviewForm_address_address1');
  };

  const cityInput = () => {
    return cy.get('#overviewForm_address_city');
  };

  const postalCodeInput = () => {
    return cy.get('#overviewForm_address_postalCode');
  };

  const creditCardButton = () => {
    return cy.get('#overviewForm_paymentMethod_1');
  };

  const agreementTOCButton = () => {
    return cy.get('#overviewForm_terms');
  };

  const agreementTOSButton = () => {
    return cy.get('#overviewForm_insuranceToS');
  };

  const overviewFormSubmitButton = () => {
    return cy.get('#overviewForm_submit');
  };

  const fillInDeliveryMethod = () => {
    streetInput().type('Buckingham Palace');
    cityInput().type('London');
    postalCodeInput().type('SW1A 1AA');
  };

  const choosePaymentMethod = () => {
    creditCardButton().click();
  };

  const chooseApplicantAgreemenets = () => {
    agreementTOCButton().click();
    agreementTOSButton().click();
  };

  const submitOverviewPageForm = () => {
    chooseApplicantAgreemenets();
    overviewFormSubmitButton().click();
  };

  return {
    fillInDeliveryMethod,
    choosePaymentMethod,
    submitOverviewPageForm
  };
};

export { OverviewPage };
