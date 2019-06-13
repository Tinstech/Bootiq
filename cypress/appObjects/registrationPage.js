import HomePage from "./homePage";

class RegistrationPage {
    constructor() {
        this.homepage = new HomePage();
    }

    goToRegistration() {
        const user = this.homepage.userAccount()
        user.click()
        const registration = this.homepage.registrationBtn()
        registration.click()
    }


    fillEmail(value) {
        const field = this.homepage.regEmail();
        field.clear();
        field.type(value);

        return this;
    }

    fillPassword(value) {
        const field = this.homepage.regPassword();
        field.clear();
        field.type(value);

        return this;
    }

    fillConfrimPassword(value) {
        const field = this.homepage.regConfirmPassword();
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = this.homepage.register();
        button.click();
    }

    waitForRegistrationCompleted() {
        const toast = this.homepage.toast()
        toast.should('be.visible', 6000)
        const toast2 = this.homepage.toast()
        toast2.should('not.be.visible', 6000)
    }

    logout() {
        const user = this.homepage.userAccount()
        user.should('be.visible')
            .trigger('mouseover')
        const logout = this.homepage.logout()
        logout.should('be.visible')
            .click()
    }
}

export default RegistrationPage;