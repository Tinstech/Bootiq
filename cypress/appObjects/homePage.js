class HomePage {

    userAccount() {
        return cy.get(`#user-account`)
    }

    toast() {
        return cy.xpath(`//div[contains(@class,'iziToast-wrapper iziToast-wrapper-topCenter')]`)
    }

    logout() {
        return cy.xpath(`//button[@class='ant-btn ant-btn-danger ant-btn-block']`)
    }

    registrationBtn() {
        return cy.get('#gotoRegistrationButton')
    }

    loginBtn() {
        return cy.get('#gotoLoginButton')
    }

    regEmail() {
        return cy.get(`#email`)
    }

    regPassword() {
        return cy.get(`#password`)
    }

    regConfirmPassword() {
        return cy.get(`#confirm`)
    }

    register() {
        return cy.get(`#registerButton`)
    }

    login() {
        return cy.get(`#loginButton`)
    }
    
    logEmail(){
        return cy.get(`#mail`)
    }
    
    logPassword(){
        return cy.get(`#password`)
    }
}
export default HomePage;