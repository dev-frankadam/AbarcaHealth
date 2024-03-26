import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the User is being tested on alerts", () => {
  cy.visit(
    "https://testpages.eviltester.com/styled/alerts/fake-alert-test.html"
  );
});

Given("the User clicked '#fakealert'", () => {
  cy.get("#fakealert").click();
});

Then("the text 'I am a fake alert box!' should be visible", () => {
  cy.contains("I am a fake alert box!").should("be.visible");
});

Then("the text 'I am a fake alert box!' should not be visible", () => {
  cy.contains("I am a fake alert box!").should("not.exist");
});
