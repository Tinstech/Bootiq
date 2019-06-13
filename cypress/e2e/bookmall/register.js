import { userBuilder } from '../../support/generate'
import RegistrationPage from '../../appObjects/registrationPage';


describe('test', () => {
    it('test register', () => {
        const user = userBuilder()
        const reg = new RegistrationPage()
        cy.visit('/')
        reg.goToRegistration()
        reg.fillEmail(user.email)
        reg.fillPassword(user.password)
        reg.fillConfrimPassword(user.password)
        reg.submit()
        reg.waitForRegistrationCompleted()
        reg.logout()
    })
})