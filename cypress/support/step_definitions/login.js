// const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// Given("I open login page", () => {
//     cy.visit('http://zero.webappsecurity.com/login.html')
// })

// When('I submit login', () => {
//     cy.get('#user_login').type('username')
//     cy.get('#user_password').type('password')
//     cy.contains('Sign in').click()
// })

// Then('I should see homepage', () => {
//     cy.get('#account_summary_tab > a').should('be', 'visible')
// })

import LoginPage from './login.page'
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')

Given("I open login page", () => {
    LoginPage.visit()
    // cy.visit('http://zero.webappsecurity.com/login.html')
})

When('I submit login', () => {
    LoginPage.fillUsername('username')
    LoginPage.fillPassword('password')
    LoginPage.sigIn()
    // cy.get('#user_login').type('username')
    // cy.get('#user_password').type('password')
    // cy.contains('Sign in').click()
})

Then('I should see homepage', () => {
    cy.get('#account_summary_tab > a').should('contain', 'Account Summary')
    cy.get('#account_summary_tab > a').should('be.visible')
})

