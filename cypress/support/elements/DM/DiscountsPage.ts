import { generateRandomUsername } from '../../commands';
import routes from '../../testRoutes';

interface DiscountsPageProps {
  newDiscount: () => void;
}

const DiscountsPage = (): DiscountsPageProps => {
  const saveProviderButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const addDiscountButton = () => {
    return cy.get('#addDiscount');
  };

  const discountValueInput = () => {
    return cy.get('#discount_value');
  };

  const discountNameInput = () => {
    return cy.get('#discount_name');
  };

  const discountNameInputEN = () => {
    return cy.get('#discount_discountL10ns_0_name');
  };

  const cardTypesCheckbox1 = () => {
    return cy.get('#discount_cardTypes_0');
  };

  const cardTypesCheckbox2 = () => {
    return cy.get('#discount_cardTypes_1');
  };

  const cardTypesCheckbox3 = () => {
    return cy.get('#discount_cardTypes_2');
  };

  const cardTypesCheckbox4 = () => {
    return cy.get('#discount_cardTypes_3');
  };

  const cardTypesCheckbox5 = () => {
    return cy.get('#discount_cardTypes_4');
  };

  const discountValidSinceInput = () => {
    return cy.get('#discount_validSince');
  };

  const categoryDropdownBox = () => {
    return cy.get('.custom-combobox-toggle.ui-corner-right');
  };

  const AvaibleAtAllBranchesCheckbox = () => {
    return cy.get('#discount_dynamicBranchLinking');
  };

  const example = () => {
    return cy.get('.ui-menu-item:nth-child(2)').first();
  };

  const newDiscount = () => {
    const USERNAME = generateRandomUsername();
    saveProviderButton().click();
    cy.pathEq(Cypress.env('DM_BASE_URL'), routes.providersDetail);
    addDiscountButton().click();
    discountValueInput().type('50');
    discountNameInput().type(USERNAME);
    discountNameInputEN().type('test');
    cardTypesCheckbox1().click();
    cardTypesCheckbox2().click();
    cardTypesCheckbox3().click();
    cardTypesCheckbox4().click();
    cardTypesCheckbox5().click();
    discountValidSinceInput().type('01.04.2020');
    categoryDropdownBox().click({ force: true });
    example().click();
    // cy.get('#discountCategory')
    //   .select('Doprava', { force: true })
    //   .should('have.value', '1');
    AvaibleAtAllBranchesCheckbox().click();
  };

  return { newDiscount };
};

export { DiscountsPage };
