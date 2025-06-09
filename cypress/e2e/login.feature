Feature: Login to Website zero.webappsecurity.com

    As a valid user
    I want to login into Website

    Scenario: Valid login
        Given I open login page
        When I submit login
        Then I should see homepage