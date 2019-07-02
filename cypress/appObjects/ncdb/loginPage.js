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


    fillUsername(value) {
        const field = this.homepage.logUsername();
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
        const toast = this.homepage.profile()
        toast.should('be.visible', 6000)
    }

    waitForLoginPage() {
        const field = this.homepage.logUsername()
        field.should('be.visible', 6000)
    }
}

export default LoginPage;