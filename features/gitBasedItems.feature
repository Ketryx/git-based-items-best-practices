Feature: Git-based Items

  Background:
    Given User is logged into Ketryx

  @tests:KP-456 @tests:md1-id
  Scenario: Glob patterns can be defined and properly saved when creating a new Project
    When User creates a project to manage Git-based Items with the following glob pattern
      |src/**/*.md|
      |test/**/*.md|
    And User navigates to "Settings" page
    Then User should see following glob patterns for Git-based Items:
      |src/**/*.md|
      |test/**/*.md|