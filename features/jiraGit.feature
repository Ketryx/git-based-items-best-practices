Feature: Git-based and Jira-based Items

    @tests:YOUR-EXISTING-JIRA-ISSUE-KEY-FROM-THE-RQ-CREATED-ON-STEP-7
    Scenario: View Jira-based Items page
        Given User is on landing page
        And User is on the Jira-based Items page
        Then User should see the Git-based Items page
