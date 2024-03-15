import searchPage from './search.page';
const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given("I am on the bank homepage", function () {
    searchPage.visit();

});

Given('Users are on the main page of the Zero Bank website', function ()  {
    searchPage.visit();

})

When('The user enters the keyword "online" into the search box.', function () {
    searchPage.searchh()

})

Then("The search results will include all entities related to {string}, such as {string}, {string}", function (string, string2, string3) {
    cy.get('h2').should('be.visible');
});

Then("The system will perform a search based on the keyword {string} entered by the user", function (string) {
    cy.get(':nth-child(4) > :nth-child(1) > a').should('be.visible');
    cy.get(':nth-child(2) > a').should('be.visible');

});
