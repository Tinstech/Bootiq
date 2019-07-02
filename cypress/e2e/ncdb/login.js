import LoginPage from '../../appObjects/ncdb/loginPage';
import LogoutPage from '../../appObjects/ncdb/logoutPage';

describe('test', () => {
    it('test login', () => {
        const log = new LoginPage
        const logout = new LogoutPage
        cy.visit(Cypress.env('NcdbDockerUrl'))
        log.waitForLoginPage()
        log.fillUsername(Cypress.env('NcdbDockerUser'))
        log.fillPassword(Cypress.env('NcdbDockerPassword'))
        log.submit()
        log.waitForLoginCompleted()
        logout.Logout()
        log.waitForLoginPage()
    })
})