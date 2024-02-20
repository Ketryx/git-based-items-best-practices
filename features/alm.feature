Feature: Application Lifecycle Management

  @tests:req-managing-items @tests:sw-sync-with-jira
  Scenario: View ALM page
    Given User is on landing page
    And User is on the ALM page
    Then User should see the ALM page