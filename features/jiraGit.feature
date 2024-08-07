Feature: Git-based and Jira-based Items

  @tests:req-managing-items
  Scenario: View Git-based Items page
    Given User is on landing page
    And User is on the Git-based Items page
    Then User should see the Git-based Items page
    
  @tests:YOUR-EXISTING-JIRA-ISSUE-KEY-FROM-THE-TC-CREATED-ON-STEP-7
  Scenario: View Jira-based Items page
    Given User is on landing page
    And User is on the Jira-based Items page
    Then User should see the Git-based Items page  
