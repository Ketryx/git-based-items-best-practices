Feature: Git-based Items

  Background:
    Given User is logged into Ketryx

  @tests:KP-456 @tests:req-cucumber-parser
  Scenario: Glob patterns can be defined and properly saved when creating a new Project
    When User creates a project to manage Git-based Items with the following glob pattern
      |src/**/*.feature|
      |test/**/*.feature|
    And User navigates to "Settings" page
    Then User should see following glob patterns for Git-based Items:
      |src/**/*.feature|
      |test/**/*.feature|