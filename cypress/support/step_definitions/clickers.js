import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

// Clicking a button with a selector
Given("the User clicked field", (selector) => {
  cy.get(selector).click();
});

// Submitting the form below
When("the User clicks submit button", () => {
  cy.get('button[type="submit"]').click();
});
