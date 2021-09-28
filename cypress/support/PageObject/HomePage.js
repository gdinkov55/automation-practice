class HomePage {

    goToRegister() {
        cy.get('#accountFrm > fieldset > .btn')
        .should('be.visible')
        .click()
    }

    getRandomNumber() {
        const uuid = () => Cypress._.random(0, 1e6)
        return uuid()
    }

}

export default HomePage;