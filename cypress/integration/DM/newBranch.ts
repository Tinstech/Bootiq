import {
  BranchesPage,
  LogInDMPage,
  ProvidersPage,
} from '../../support/elements/DM';
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
  it('create new provider then create new branch', () => {
    ProvidersPage().newDiscountProvider();
    cy.uploadFile(
      'snoop_dogg.jpg',
      '#provider_logo-fileInput',
      'image/jpg',
    ).uploadFile('snoop_dogg.jpg', '#provider_image-fileInput', 'image/jpg');
    BranchesPage().newBranch();
  });
});
