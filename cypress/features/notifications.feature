Feature: User can view notifications

  Scenario: User view the fake alert notification
    Given the User is being tested on alerts
     And the User clicked '#fakealert'
    Then the text 'I am a fake alert box!' should be visible

  Scenario: User can close the fake alert notification
    Given the User is being tested on alerts
     And the User clicked '#fakealert'
     And the User clicked '#dialog-ok'
    Then the text 'I am a fake alert box!' should not be visible

#write the gherkin syntax for viewing and closing the `show modal dialog` box
