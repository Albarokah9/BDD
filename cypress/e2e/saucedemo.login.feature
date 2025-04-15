Feature: Login to Website Saucedemo
    As a valid user 
    I want to login to the website Saucedemo

    Scenario: Login with valid credentials
        Given I visit the website "https://www.saucedemo.com/"
        When I fill in the username with "standard_user"
        And I fill in the password with "secret_sauce"
        And I click on the login button
        Then I should see the text "PRODUCTS" on the page