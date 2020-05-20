import { generateRandomUsername } from '../../commands';

interface CategoriesPageProps {
  newCategory: () => void;
  editAndDeleteCategory: () => void;
}

const CategoriesPage = (): CategoriesPageProps => {
  const settingsSection = () => {
    return cy.get('.nav-top-item').last();
  };

  // const categoriesSection = () => {
  //   return cy.get('.current').last();
  // };

  const addCategoryButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const nameInput = () => {
    return cy.get('#category_name');
  };

  const englishNameInput = () => {
    return cy.get('#category_categoryL10ns_0_name');
  };

  const editCategoryButton = () => {
    return cy.get('#shortcut-button-2');
  };

  const saveCategoryButton = () => {
    return cy.get('#shortcut-button-0');
  };

  const deleteCategoryButton = () => {
    return cy.get('.shortcut-button').last();
  };

  const newCategory = () => {
    const USERNAME = generateRandomUsername();
    settingsSection().click();
    cy.get('a[href="/categories/search"]').click();
    addCategoryButton().click();
    nameInput().type(USERNAME);
    englishNameInput().type(USERNAME);
    saveCategoryButton().click();
  };

  const editAndDeleteCategory = () => {
    editCategoryButton().click();
    cy.uploadFile('snoop_dogg.jpg', '#category_image-fileInput', 'image/jpg');
    saveCategoryButton().click();
    deleteCategoryButton().click();
  };

  return { newCategory, editAndDeleteCategory };
};

export { CategoriesPage };
