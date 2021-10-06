import RegisterPage from '../../support/PageObject/RegisterPage'
import HomePage from '../../support/PageObject/HomePage'
const home = new HomePage(),
    register = new RegisterPage();


describe('Test store', () => {
    beforeEach(() => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login')
    })

    it('Register', () => {
        // const uuid = () => Cypress._.random(0, 1e6)
        // const id = uuid()
        let id = home.getRandomNumber();
        cy.log(id)
        const testname = `testname_nexo${id}@mailinator.com`
        cy.log(testname)
        const andibulmorkov = `andibulmorkov${id}`
        cy.log(andibulmorkov)
        cy.log('This is our first test!!!')
        // cy.get('#accountFrm > fieldset > .btn')
        // .should('be.visible')
        // .click()
        home.goToRegister();

        cy.get('.maintext')
        .should('have.text', ' Create Account')

        // Populate register form
        // cy.get('#AccountFrm_firstname').type('jeki jeki')
        register.populateFirstName('jeki jeki;')
        // cy.get('#AccountFrm_lastname').type('hans')
        register.populateLastName('hans')
        // cy.get('#AccountFrm_email').type(testname)
        register.populateEmail(testname)
        // cy.get('#AccountFrm_zone_id').select('Essex')
        register.populateZone('Essex')
        // cy.get('#AccountFrm_address_1').type('na naisi ferodo')
        register.populateAddress1('na naisi ferodo')
        // cy.get('#AccountFrm_city').type('pernik')
        register.populateCity('pernik')
        // cy.get('#AccountFrm_postcode').type('1000')
        register.populatePostCode('1000')
        // cy.get('#AccountFrm_loginname').type(andibulmorkov)
        register.populateLoginName(andibulmorkov)
        // cy.get('#AccountFrm_password').type('morkov')
        register.populatePassword('morkov')
        // cy.get('#AccountFrm_confirm').type('morkov')
        register.populateConfirm('morkov')
        // cy.get('#AccountFrm_newsletter1').check()
        register.populateNewsletter()
        // cy.get('#AccountFrm_agree').check()
        register.populateAgree()
        // cy.get('.col-md-2 > .btn').click()
        register.populateContinue()
        // cy.get('.mb40 > .btn').click()
        register.populateFinal()
    })
})