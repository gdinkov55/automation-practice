class RegisterPage {

        populateFirstName(firstname) {
            cy.get('#AccountFrm_firstname').type(firstname)
        }
        populateLastName(lastname) {
            cy.get('#AccountFrm_lastname').type(lastname)
        }
        populateEmail(email) {
            cy.get('#AccountFrm_email').type(email)
        }
        populateZone(zone) {
            cy.get('#AccountFrm_zone_id').select(zone)
        }
        populateAddress1(addressline1) {
            cy.get('#AccountFrm_address_1').type(addressline1)
        }
        populateCity(city) {
            cy.get('#AccountFrm_city').type(city)
        }
        populatePostCode(postcode) {
            cy.get('#AccountFrm_postcode').type(postcode)
        }
        populateLoginName(loginname) {
            cy.get('#AccountFrm_loginname').type(loginname)
        }
        populatePassword(password) {
            cy.get('#AccountFrm_password').type(password)
        }
        populateConfirm(confirm) {
            cy.get('#AccountFrm_confirm').type(confirm)
        }
        populateNewsletter(newsletter) {
            cy.get('#AccountFrm_newsletter1').check(newsletter)
        }
        populateAgree(agree) {
            cy.get('#AccountFrm_agree').check(agree)
        }
        populateContinue(next) {
            cy.get('.col-md-2 > .btn').click(next)
        }
        populateFinal(final) {
            cy.get('.mb40 > .btn').click(final)
        }


}

export default RegisterPage;