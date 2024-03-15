Feature: searchbox test
    as a valid user
    I want to use the search feature

    Background: 
        Given I am on the bank homepage

    Scenario: I want to search for data with the search feature
        Given Users are on the main page of the Zero Bank website
        When The user enters the keyword "online" into the search box.
        Then The system will perform a search based on the keyword "online" entered by the user
        Then The search results will include all entities related to "online", such as "online banking", "online transactions"
