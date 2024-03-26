import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the User is being tested on input", () => {
  cy.visit(
    "https://testpages.eviltester.com/styled/validation/input-validation.html"
  );
});

Given("the User typed 'William' into the '#firstname'", () => {
  cy.get("#firstname").type("William");
});

Given("the User typed 'Shakespeare' into the '#surname'", () => {
  cy.get("#surname").type("Shakespeare");
});

Given("the User typed '52' into the '#age'", () => {
  cy.get("#age").type("52");
});

Given("the User selected 'France' from the '#country' option", () => {
  cy.get("#country").select("France");
});

Given(
  "the User typed  'William Shakespare passed away April 23rd 1616' into the '#notes'",
  () => {
    cy.get("#notes").type("William Shakespare passed away April 23rd 1616");
  }
);

When("the User clicks submit", () => {
  cy.get("form").submit();
});

Then(
  "the User should have been redirected to '/validate/input-validation'",
  () => {
    cy.url().should("include", "/validate/input-validation");
  }
);

Then("the text validation should be visible", () => {
  cy.contains("Surname provided is too short").should("be.visible");
});
