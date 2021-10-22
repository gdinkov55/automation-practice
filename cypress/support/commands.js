// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickButton', (locator) => {
    cy.get(locator).click()
})
Cypress.Commands.add('typeInput', (locator, input) => {
    cy.get(locator).type(input)
})
Cypress.Commands.add('selectLabel', (locator, label) => {
    cy.get(locator).select(label)
})
Cypress.Commands.add('personalDetails', (firstName, lastName, email, telephone = " ", fax = " ") => {
    cy.typeInput('#AccountFrm_firstname' , firstName)
    cy.typeInput('#AccountFrm_lastname', lastName)
    cy.typeInput('#AccountFrm_email', email)
    cy.typeInput('#AccountFrm_telephone', telephone)
    cy.typeInput('#AccountFrm_fax', fax)
})
Cypress.Commands.add('customLog', (message) => {
    cy.log(`katalizator: ${message}`)
})