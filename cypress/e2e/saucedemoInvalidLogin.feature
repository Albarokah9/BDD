Feature: Logging into the Saucedemo Website

        As an invalid user,
        I want to log in to the Saucedemo website.

    Scenario: Logging in with invalid credentials
        Given I visited the website "https://www.saucedemo.com/"
        When I fill the username with "locked_out_user"
        And I fill the password with "secret_sauce"
        And  Then I click on the login button
        Then I will see the message "Epic sadface: Sorry, this user has been locked." on the page.