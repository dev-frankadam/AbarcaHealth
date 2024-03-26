import { Then } from "@badeball/cypress-cucumber-preprocessor";

//validation
Then(`the text {string} should be visible`, (value) => {
  //fill in the glue code that gets this step definition working

  cy.contains(value).should("be.visible");
});

Then(`the text {string} should not be visible`, (value) => {
  //fill in the glue code that gets this step definition working

  cy.contains(value).should("be.visible");
});
