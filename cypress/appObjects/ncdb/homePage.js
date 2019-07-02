class HomePage {
    login() {
        return cy.get(`#j_id_1y`)
    }

    logUsername() {
        return cy.get(`#j_username`)
    }

    logPassword() {
        return cy.get(`#j_password`)
    }

    profile() {
        return cy.get(`#profile-links`)
    }

    logout() {
        return cy.get(`#profile-links a`)
    }
}
export default HomePage;