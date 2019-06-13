import {userBuilder} from '../../support/generate'

describe('test', () => {
    it('test login', () => {
        const user = userBuilder()
        cy.visit('/')
            .get('#user-account')
            .click()
            .get('#mail')
            .type("tester@bootiq.io")
            .should('have.value', 'tester@bootiq.io')
            .get('#password')
            .type("bIq123")
            .should('have.value', 'bIq123')
            .get('#loginButton')
            .click()
            .getByText("Produkty")
            .xpath("(//a[contains(@href, '/profile')])[1]")
            .click()
            
    })

    it('test register', () => {
        const user = userBuilder()
        cy.visit('/')
            .get('#user-account')
            .click()
            .get('#mail')
            .type(user.username)
            .get('#password')
            .type(user.password)
            .should('have.value', 'bIq123')
            .get('#loginButton')
            .click()
            .getByText("Produkty")
            .xpath("(//a[contains(@href, '/profile')])[1]")
            .click()
            
    })
    it.only('error page', () => {
        cy.server()
        cy.route({
            method: 'POST',
            url: 'http://middleware-bm.develop.cluster.ba.dev.biq.lan/api/v1/security/sign-in',
            status: 404,
            response: {},
        })
        cy.visit('/')
            .get('#user-account')
            .click()
            .get('#mail')
            .type("tester@bootiq.io")
            .should('have.value', 'tester@bootiq.io')
            .get('#password')
            .type("bIq123")
            .should('have.value', 'bIq123')
            .get('#loginButton')
            .click()
            .getByText("Produkty")
            .xpath("(//a[contains(@href, '/profile')])[1]")
            .click()
            
    })
    
})