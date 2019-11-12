import routes from '../../testRoutes';

interface OrderCreateInsuranceEntriesPageProps {
  fillInUserData: () => void;
  goToOrderDetailPage: () => void;
}

const OrderCreateInsuranceEntriesPage = (): OrderCreateInsuranceEntriesPageProps => {
  const addressInputsPlaceholder = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:j_id_5f').find('span');
  };

  const addressLine1Input = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:address1');
  };

  const addressLine2Input = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:address2');
  };

  const addressCityInput = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:city');
  };

  const addressZipCodeInput = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:zipCode');
  };

  const emailInputPlaceholder = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:j_id_5t').find('span');
  };

  const emailInput = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:emailInput');
  };

  const birthNumberInputPlaceholder = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:j_id_62').find('span');
  };

  const birthNumberInput = () => {
    return cy.get('#insuranceEntriesTable\\:0\\:birthNumberInput');
  };

  const orderInsurancesButton = () => {
    return cy.get('.shortcut-button').eq(1);
  };

  const fillInAddress = () => {
    addressInputsPlaceholder().click();
    addressLine1Input().type('Buckingham');
    addressLine2Input().type('Palace');
    addressCityInput().type('London');
    addressZipCodeInput().type('SW1A 1AA');
  };

  const fillInEmail = () => {
    emailInputPlaceholder().click();
    emailInput().type('cypresstest@gmail.com');
  };

  const fillInBirthNumber = () => {
    birthNumberInputPlaceholder().click();
    birthNumberInput().type('880529/0010');
  };

  const fillInUserData = () => {
    fillInAddress();
    fillInEmail();
    fillInBirthNumber();
  };

  const goToOrderDetailPage = () => {
    orderInsurancesButton().click();
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.orderDetailPage);
  };

  return {
    fillInUserData,
    goToOrderDetailPage,
  };
};

export { OrderCreateInsuranceEntriesPage };
