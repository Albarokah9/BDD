import LoginPageSaucedemoInvalidLogin from "../page_objects/saucedemoInvalidLogin.page.js";
const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given('I visited the website {string}', (URL) => {
    cy.visit(URL);

    });
    
When('I fill the username with {string}', (username) => {
        LoginPageSaucedemoInvalidLogin.fillUsername(username);
    });
When('I fill the password with {string}', (password) => {
        LoginPageSaucedemoInvalidLogin.fillPassword(password);
    });
When('Then I click on the login button', () => {
        LoginPageSaucedemoInvalidLogin.signIn();
    });
Then('I will see the message "Epic sadface: Sorry, this user has been locked." on the page.', () => {
        LoginPageSaucedemoInvalidLogin.verifyLoginInvalid();
    });