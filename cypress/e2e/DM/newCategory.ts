import { CategoriesPage, LogInDMPage } from '../../support/elements/DM';
import routes from '../../support/testRoutes';

describe('Create new discount provider', () => {
  beforeEach('preserve cookies', () => {
    Cypress.Cookies.preserveOnce('PHPSESSID');
  });
  after('clear cookies', () => {
    cy.clearCookies();
  });

  it('log in as admin', () => {
    cy.visit(`${Cypress.env('DM_BASE_URL')}${routes.adminDMLoginPage}`);
    LogInDMPage().logInDMAdmin();
  });

  it('create and edit category', () => {
    CategoriesPage().newCategory();
    CategoriesPage().editAndDeleteCategory();
  });
});
