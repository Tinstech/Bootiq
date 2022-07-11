// 2. dashboard and  click button to New Order...

import { LoginPage } from "../../support/elements/MyTest/loginPage";


const loginPage = new LoginPage()

// login on Page 

before(() => {

  loginPage.navigate();
  loginPage.enterUsername();
  loginPage.enterPassword();
  loginPage.clickLogin();

})

it('dashboard  and choose ISIC new card', () => {
  

  cy.log('click the button new order')
  cy.contains('.shortcut-button', 'New Order').click();

  cy.log('verification order detail page')
  cy.get('h3').should('contain.text', 'Order Detail')

  
  cy.log('choose field card issuer')
  cy.contains('label', 'Card Issuer')
    .siblings('span')
    .find('input:visible')
    .type('Card Issuing{enter}')

  
  cy.log('create and fill order name')
  cy.contains('label', 'Order name')
    .siblings('input')
    .type('robot test')

  cy.log('submit order detail page')
  cy.contains('.button', 'OK').click();

});

















