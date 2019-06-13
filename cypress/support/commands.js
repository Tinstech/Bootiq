import { userBuilder } from "./generate";


Cypress.Commands.add('createUser', (overrides) => {
    const user = userBuilder(overrides)
    cy.request({
        url: 'http://middleware-bm.develop.cluster.ba.dev.biq.lan/api/v1/security/sign-up',
        method: 'POST',
        body: user,
    }).then((response) => {
        if (response.status === 200){
            return user
        }
    })
})