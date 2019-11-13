import routes from '../../testRoutes';

interface OrderCreateEntriesPageProps {
  goToOrderDetailPage: () => void;
  selectFilteredItem: () => void;
  checkSelectedItemsListContainsSelectedUsename: () => void;
  goToCreateInsuranceEntriesPage: () => void;
  sortNewestAvailableItem: () => void;
}

const OrderCreateEntriesPage = (): OrderCreateEntriesPageProps => {
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

  const goToCreateInsuranceEntriesPage = () => {
    cardSelectedEntriesButton().click({ force: true });
    cy.pathEq(Cypress.env('NCDB_BASE_URL'), routes.orderCreateInsuranceEntries);
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

  const availableItemsListFirstUsername = () => {
    return cy
      .get('#entriesSelectForm\\:cardOwnerList_data')
      .find('tr[data-ri="0"]')
      .find('td')
      .eq(1);
  };

  const addFirstItemFromCardOwnerList = () => {
    cy.get('#entriesSelectForm\\:cardOwnerList\\:0\\:plusButton')
      .find('a')
      .click({
        force: true,
      });
  };

  const checkSelectedItemsListContainsSelectedUsename = () => {
    addFirstItemFromCardOwnerList();
    availableItemsListFirstUsername()
      .invoke('text')
      .then($txt => {
        const username1 = $txt.toString().trim();
        cy.get('#chosenItemsForm\\:j_id_65_data').should('contain', username1);
      });
  };
  const sortNewestAvailableItem = () => {
    cy.get('#entriesSelectForm\\:cardOwnerList\\:j_id_7s')
      .click({ force: true })
      .wait(1000);
  };

  const selectFilteredItem = () => {
    selectItemButton().click({ force: true });
    checkSelectedItemsTableContainsTestedItem();
  };

  return {
    goToOrderDetailPage,
    selectFilteredItem,
    sortNewestAvailableItem,
    checkSelectedItemsListContainsSelectedUsename,
    goToCreateInsuranceEntriesPage,
  };
};

export { OrderCreateEntriesPage };
