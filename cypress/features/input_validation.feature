Feature: User can successfully submit a form

  Scenario: User can successfully complete the form
    Given the User is being tested on input
     And the User typed  'William' into the '#firstname'
     And the User typed  'Shakespeare' into the '#surname'
     And the User typed  '52' into the '#age'
     And the User selected 'France' from the '#country' dropdown
     And the User typed  'William Shakespare passed away April 23rd 1616' into the '#notes'
    When the User clicks submit
    Then the User should have been redirected to '/validate/input-validation'

  Scenario: Surname does not meet the character limit
    Given the User is being tested on input
     And the User typed  'Jane' into the '#firstname'
     And the User typed  'Eyre' into the '#surname'
     And the User typed  '18' into the '#age'
     And the User selected 'Chad' from the '#country' dropdown
     And the User typed  'Jane Eyre was not from Chad' into the '#notes'
    When the User clicks submit
    Then the text 'Surname provided is too short' should be visible