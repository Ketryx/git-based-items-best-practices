Feature: Sample app

  @tests:WGT-1 @tests:WGT-3
  Scenario: View landing page - existing TC1 in jira
    Given User is on landing page
    Then Page has title "React App"

  @tests:WGT-2
  Scenario: Incorporate Git-based items
    Given User is on landing page
    Then Page has title "React App"

  @implements:GBI-3
  Scenario: Implementing existing TC2 from Jira
    Given User is on landing page
    Then Page has title "React App"
