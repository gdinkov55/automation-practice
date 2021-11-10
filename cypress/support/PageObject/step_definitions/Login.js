import LoginPage from ''
const {
    Before,
    Given,
    Then,
    When
} = require("cypress-cucumber-preprocessor/Steps");

const login = new LoginPage();
    

Given('Navigate to main page', () => {
    cy.visit('')
})