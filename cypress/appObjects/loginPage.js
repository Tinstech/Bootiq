import HomePage from "./homePage";

class LoginPage {
    constructor() {
        this.homepage = new HomePage();
    }

    goToLogin() {
        const user = this.homepage.userAccount()
        user.click()
        const login = this.homepage.loginBtn()
        login.click()
    }


    fillEmail(value) {
        const field = this.homepage.logEmail();
        field.clear();
        field.type(value);

        return this;
    }

    fillPassword(value) {
        const field = this.homepage.logPassword();
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = this.homepage.login();
        button.click();
    }

    waitForLoginCompleted() {
        const toast = this.homepage.toast()
        toast.should('be.visible', 6000)
        const toast2 = this.homepage.toast()
        toast2.should('not.be.visible', 6000)
    }
}

export default LoginPage;