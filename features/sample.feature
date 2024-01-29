Feature: Sample app

  @tests:ATP-3
  Scenario: View landing page
    Given User is on landing page
    Then Page has title "React App"
