import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

// Navigating to input form validation page
Given(`the User is on the input form validation page`, () => {
  cy.visit(
    "https://testpages.eviltester.com/styled/validation/input-validation.html"
  );
});

// Navigating to notifications validation page
Given(`the User is being tested on alerts`, () => {
  cy.visit(
    "https://testpages.eviltester.com/styled/alerts/fake-alert-test.html"
  );
});

// Asserting redirect
Then("the User should have been redirected to {string}", (expectedPath) => {
  cy.url().should("include", expectedPath);
});
