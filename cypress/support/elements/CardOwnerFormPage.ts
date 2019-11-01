// import Pages from './Pages';
import { CardHolderSelectionPage } from '../../support/elements';
import routes from '../testRoutes';

interface CardOwnerFormPageProps {
  fillInAndSubmitForm: () => void;
  submitExistingUserModalDialog: () => void;
  checkPathIsOrderCreateEntries: () => void;
}

const CardOwnerFormPage = (): CardOwnerFormPageProps => {
  const nameInput = () => {
    return cy.get('#name');
  };
  const surnnameInput = () => {
    return cy.get('#surname');
  };
  const birthDateInput = () => {
    return cy.get('#birthDate_input');
  };
  const organizationNameInput = () => {
    return cy.get('#j_id_9h\\:organizationAutocomplete_input');
  };
  const organizationFormButton = () => {
    return cy.get('.image-button-text').contains('Save');
  };
  const existingUserModalDialogIsVisible = () => {
    return cy.get('#j_id_d3').should('have.attr', 'aria-hidden', 'false');
  };
  const updateCardOwnerButton = () => {
    return cy.get('#j_id_d6\\:updateCardOwner');
  };

  const fillInAndSubmitForm = () => {
    nameInput().type('Cypress');
    surnnameInput().type('Test');
    birthDateInput().type('29.05.1988');
    organizationNameInput().type('Cypress Testing');
    organizationFormButton().click();
  };

  const submitExistingUserModalDialog = () => {
    if (existingUserModalDialogIsVisible()) {
      updateCardOwnerButton().click();
      cy.pathEq(routes.cardHolderSelectionPage);
      CardHolderSelectionPage().chooseExistingCardHolder();
    }
  };

  const checkPathIsOrderCreateEntries = () => {
    cy.pathEq(routes.orderCreateEntriesPage);
  };
  return {
    fillInAndSubmitForm,
    submitExistingUserModalDialog,
    checkPathIsOrderCreateEntries
  };
};

export { CardOwnerFormPage };
