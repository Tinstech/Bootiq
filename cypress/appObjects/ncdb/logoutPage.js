import HomePage from "./homePage";

class LogoutPage {
    constructor() {
        this.homepage = new HomePage();
    }

    Logout() {
        const user = this.homepage.logout()
        user.click()
    }

}

export default LogoutPage;