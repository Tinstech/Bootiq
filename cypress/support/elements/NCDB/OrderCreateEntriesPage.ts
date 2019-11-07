import routes from '../../testRoutes';

interface OrderCreateEntriesPageProps {
  goToOrderDetailPage: () => void;
  filterTestedItem: () => void;
  selectFilteredItem: () => void;
}

const OrderCreateEntriesPage = (): OrderCreateEntriesPageProps => {
  const filterSurnameInput = () => {
    return cy.get('#filter-form\\:surname');
  };
  const filterDateOfBirthInput = () => {
    return cy.get('#filter-form\\:birthDate_input');
  };

  const filterButton = () => {
    return cy.get('#filter-form\\:j_id_7f');
  };

  const cardSelectedEntriesButton = () => {
    return cy.get('#submitForm').find('a');
  };

  const availableEntriesTable = () => {
    return cy.get('#entriesSelectForm\\:cardOwnerList_data');
  };

  const selectedEntriesTable = () => {
    return cy.get('#chosenItemsForm\\:j_id_65');
  };

  const goToOrderDetailPage = () => {
    cardSelectedEntriesButton().click({ force: true });
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.orderDetailPage);
  };

  const checkEntriesTableContainsTestedItem = () => {
    availableEntriesTable()
      .should('contain', 'Cypress')
      .and('contain', 'Test');
  };

  const checkSelectedItemsTableContainsTestedItem = () => {
    selectedEntriesTable()
      .should('contain', 'Cypress')
      .and('contain', 'Test');
  };

  const selectItemButton = () => {
    return cy.get('#entriesSelectForm\\:cardOwnerList\\:j_id_7k').find('a');
  };

  const filterTestedItem = () => {
    filterDateOfBirthInput().type('29.5.1988');
    filterSurnameInput().type('Test');
    filterButton().click();
    checkEntriesTableContainsTestedItem();
  };

  const selectFilteredItem = () => {
    selectItemButton().click({ force: true });
    checkSelectedItemsTableContainsTestedItem();
  };

  return { goToOrderDetailPage, filterTestedItem, selectFilteredItem };
};

export { OrderCreateEntriesPage };
