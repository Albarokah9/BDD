Feature: Search functionality on Zero WebAppSecurity

  As a user
  I want to use the search functionality
  So that I can find relevant information on the website

  Scenario: Search for a valid term
    Given I open the homepage
    When I log into my account
    And I search for "online banking"
    Then I should see search results related to "Zero - Free Access to Online Banking"
