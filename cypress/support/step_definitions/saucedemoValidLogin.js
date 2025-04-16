import LoginPageSaucedemo from "../page_objects/saucedemoValidLogin.page";

const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");


Given('I visit the website {string}', (URL) => {
    cy.visit(URL);
});

When('I fill in the username with {string}', (username) => {
    LoginPageSaucedemo.fillUsername(username);
});
When('I fill in the password with {string}', (password) => {
    LoginPageSaucedemo.fillPassword(password);
});
When('I click on the login button', () => {
    LoginPageSaucedemo.signIn();
});
Then('I should see the text "PRODUCTS" on the page', () => {
    LoginPageSaucedemo.verifyLogin();
});
