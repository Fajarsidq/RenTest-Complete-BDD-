Feature: login to application

    as a valid user
    I want to login into application

    Scenario: valid login
        Given I open Login page
        When I submit Login
        Then I should see homepage