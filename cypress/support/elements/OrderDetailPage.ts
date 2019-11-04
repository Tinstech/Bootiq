interface OrderDetailPageProps {
  filterTestedItem: () => void;
}

const OrderDetailPage = (): OrderDetailPageProps => {
  const filterNameInput = () => {
    return cy.get('#filter-form\\:name');
  };
  const filterSurnameInput = () => {
    return cy.get('#filter-form\\:surname');
  };
  const filterDateOfBirthInput = () => {
    return cy.get('#filter-form:\\birthDate_input');
  };

  const filterButton = () => {
    return cy.get('#filter-form\\:j_id_7f');
  };

  const filterTestedItem = () => {
    filterNameInput().type('Cypress');
    filterSurnameInput().type('Test');
    filterDateOfBirthInput().type('29.5.1988');
    filterButton().click();
  };

  return { filterTestedItem };
};

export { OrderDetailPage };
