Feature: Application Lifecycle Management

  @tests:KP-1234 @id:alm-1
  Scenario: Create a new project
    Given I have a project with a feature file
    When I run the feature file
    Then I should see the results