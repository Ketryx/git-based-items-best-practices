Feature: Git-based Items

  @id:jira-sync @tests:req-managing-items
  Scenario: View Git-based Items page
    Given User is on landing page
    And User is on the Git-based Items page
    Then User should see the Git-based Items page