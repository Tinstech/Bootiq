import { userBuilder } from "./generate";

Cypress.Commands.add('createUser', (overrides) => {
    const user = userBuilder(overrides)
    cy.request({
        url: Cypress.env('bookmallSignup'),
        method: 'POST',
        body: user,
    }).then((response) => {
        if (response.status === 200) {
            return user
        }
    })
})

Cypress.Commands.add('login', {
    
})