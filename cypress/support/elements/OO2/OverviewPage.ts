interface OverviewPageProps {
  choosePaymentMethod: () => void;
  submitOverviewPageForm: () => void;
}

const OverviewPage = (): OverviewPageProps => {
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
    choosePaymentMethod,
    submitOverviewPageForm,
  };
};

export { OverviewPage };
