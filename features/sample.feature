Feature: Sample app

  @tests:MD-3
  Scenario: View landing page - existing TC in jira
    Given User is on landing page
    Then Page has title "React App"

  @tests:MD-5
  Scenario: Testing SW2
    Given User is on landing page
    Then Page has title "React App"

  @implements:MD-6
  Scenario: Implementing existing TC from Jira
    Given User is on landing page
    Then Page has title "React App"
