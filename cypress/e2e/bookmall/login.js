import LoginPage from '../../appObjects/loginPage';
import HomePage from '../../appObjects/homePage';

describe('test', () => {
    it('test login', () => {
        const log = new LoginPage
        const home = new HomePage
        cy.createUser().then(user => {
            cy.visit('/')
            home.userAccount()
                .click()
            log.fillEmail(user.email)
            log.fillPassword(user.password)
            log.submit()
            log.waitForLoginCompleted()
        })
    })
})