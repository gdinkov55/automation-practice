class RegisterPage {

        populateFirstName(firstname) {
            cy.get('#AccountFrm_firstname').type(firstname)
        }


}

export default RegisterPage;