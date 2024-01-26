Feature: Application Lifecycle Management

  @tests:KP-1234
  Scenario:
    Given I have a project with a feature file
    When I run the feature file
    Then I should see the results