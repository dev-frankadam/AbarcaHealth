import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the User typed  'William' into the '#firstname'", () => {
  cy.get("#firstname").type("William");
});

Given("the User typed  'Shakespeare' into the '#surname'", () => {
  cy.get("#surname").type("Shakespeare");
});

Given("the User typed  '52' into the '#age'", () => {
  cy.get("#age").type("52");
});

Given("the User selected 'France' from the '#country' dropdown", () => {
  cy.get("#country").select("France");
});

Given(
  "the User typed 'William Shakespare passed away April 23rd 1616' into the '#notes'",
  () => {
    cy.get("#notes").type("William Shakespare passed away April 23rd 1616");
  }
);

Given("the User typed  'Jane' into the '#firstname'", () => {
  cy.get("#firstname").type("Jane");
});

Given("the User typed  'Eyre' into the '#surname'", () => {
  cy.get("#surname").type("Eyre");
});

Given("the User typed  '18' into the '#age'", () => {
  cy.get("#age").type("18");
});

Given("the User selected 'Chad' from the '#country' dropdown", () => {
  cy.get("#country").select("Chad");
});

Given("the User typed  'Jane Eyre was not from Chad' into the '#notes'", () => {
  cy.get("#notes").type("Jane Eyre was not from Chad");
});
