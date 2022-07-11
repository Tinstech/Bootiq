

export class LoginPage {

  navigate() {
    cy.visit('https://ncdb.test.gts.bootiq-devel.eu/');
  }

  enterUsername() {
    cy.get('#j_username').type('gts').should('have.value', 'gts');

  }
  enterPassword() {
    cy.get('#j_password').type('gts').should('have.value', 'gts');

  }
  clickLogin() {
    cy.get('[type="submit"]').click() // or ("{enter"}) ???? message for Martin 

  }

}


