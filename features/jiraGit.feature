Feature: Git-based and Jira-based Items

  @tests:req-managing-items
  Scenario: View Git-based Items page
    Given User is on landing page
    And User is on the Git-based Items page
    Then User should see the Git-based Items page
    
  @tests:KP7514A2-2
  Scenario: View Jira-based Items page
    Given User is on landing page
    And User is on the Jira-based Items page
    Then User should see the Git-based Items page