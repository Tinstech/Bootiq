
// First Test : visit PAGE and  succesfull lOGIN (error)

context('Open Page with Login and pasword', () => {
  beforeEach(() => {
    cy.visit('https://ncdb.test.gts.bootiq-devel.eu/');
  });

  it('should fill login form and redirect to homepage', () => {

    // Fill the username
    cy.get('#j_username').type('gts').should('have.value', 'gts');

    // Fill the password
    cy.get('#j_password').type('gts').should('have.value', 'gts');

    // Go to the App 
    // (overovanie sa mi neda urobit lebo mi furt ta stranka sa odhlasi, kvoli tej chybe o ktorej sme sa bavili, nakoniec sa objavila znova error 
    cy.get('#j_id_1y').click();



  });






  it("newOrderIsicCard", () => {

    // 2. dashboard 
    // 3. click on New Order 
    // 4. pages orders : choose card + fill order name 
    // 5.  page order choose new plastic card 
    // 6. choose ISIC CARD CLICK 
    // 7. CHOOSE CARD VALIDITY 
    // 8: CHOOSE EXISTING CARD HOLDER 
    // 9. button new cardholder 
    // 10. fill personal data 
    // 11. save button 
    //12. go to orders a send order 

  })
});



