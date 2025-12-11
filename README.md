# Ketryx - Git-based Configuration Items - How to Use Them

This repository serves as an example of **best practices** on how to maintain configuration items in a Git repository and incorporate them into Ketryx's Application Lifecycle Management.

## What are Git-based configuration items and why use them?

Git-based configuration items allow users to maintain configuration items in Git repositories, i.e., in source code, _rather than in_ or _in parallel with_ a task/issue management tool (e.g., Jira). This way, users can maintain configuration items in the same place where they maintain the source code.

## How to use Git-based configuration items?

In order to use Git-based configuration items, you need to:

- Associate a Git repository with a Ketryx project.
- Define file locations - _glob patterns_ - in the repository where configuration items are stored.

### Glob patterns

These glob patterns define the locations of configuration items within a Git repository. Ketryx will scan the repository for files that match these patterns and make them available in the project.

In the following example:

```
src/requirements/**/*.md
features/**/*.feature
!src/**/README.md
```

Ketryx will scan the repository for:

- All files with the `.md` extension in the `src/requirements/` directory and all its subdirectories
- All files with the `.feature` extension in the `features/` directory and all its subdirectories
- _Omit_ all `README.md` files in the `src/` directory and all its subdirectories

## Supported file formats and content parsing

Currently, Ketryx supports defining configuration items in **Markdown** files and **Cucumber** files (using Gherkin syntax). When extracting information from support files, Ketryx differentiates between two types of content: **metadata** and **main content**.

**Metadata** is used to:

- uniquely identify a configuration item
- define the configuration item type
- define traceability to other configuration items

**Main content** is the information that is used to describe a configuration item.

### Markdown files

Each markdown file is considered to be a single configuration item.

**Metadata** is defined in the front matter of a Markdown file:

```yaml
---
itemId: some-unique-string-1234
itemType: Software Item Spec
itemFulfills: KP-42
itemImplements: KP-43, KP-44
---
```

**Main content** is defined in the body of a Markdown file:

- The first heading of the main content is considered to be the title of the configuration item.
- The rest of the content is considered to be the description of the configuration item.

### Cucumber files

Every Scenario in a Cucumber file is considered to be a configuration item.

```gherkin
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

  @id:approving-git-based-items @tests:KP-789
  Scenario: Approving Git-based Items should work as expected
    When User has a project to manage Git-based Items with the following glob pattern
      |*.md|
    And User navigates to current project
    And User selects the item "Git based items"
    And User approves the selected 1 item
    Then State of "Git based items" item should be changed to "Closed"
    And User selects the item "Git based items"
    And User transitions the selected 1 item to "Resolved"
    Then State of "Git based items" item should be changed to "Resolved"
```

**Metadata** is defined in the tags of a Scenario. In the example above, the following tags are used:

- `@tests:KP-456` - Defines traceability to another configuration item (in this case `KP-456` is a Jira issue)
- `@tests:md1-id` - Defines traceability to another configuration item (in this case `md1-id` is another Git-based item)
- `@id:approving-git-based-items` - Defines the unique identifier of the configuration item

**Main content** is defined in the body of a Scenario:

- The name of the Scenario is considered to be the title of the configuration item.
- Scenario name, steps and tags are considered to be the description of the configuration item.

## Uniquely identifying a configuration item

As mentioned in the previous section, metadata is used to uniquely identify a configuration item. In Markdown files `itemId` field is used for this purpose, and Cucumber files we should use `@id`. These fields are a string that uniquely identifies a configuration item within a Git repository. It is strongly recommended to always define them, however, if it is not defined, Ketryx will use the local file path within the Git repository as the `itemId`.

**Warning:** The user should take care that `itemId` or `@id` are unique within the Git repository.

## Configuration item types

Configuration item types are used to define the type of configuration item. For Markdown files `itemType` field is used for this purpose and following values can be used:

```
Requirement
Software Item Spec
Hardware Item Spec
Task
Test Case
Test Execution
Anomaly
Complaint
Change Request
CAPA
Risk
```

In Cucumber files, the configuration item type is always `Test Case`.

## Traceability to other configuration items

Traceability to other configuration items is used to define the relationship between configuration items. Depending on the configuration item type, different fields are used for this purpose.

Here is the list of all possible fields that can be used in **Markdown** files:

```
itemAffects
itemContainsTests
itemFoundAnomaly
itemFulfills
itemHasParent
itemHasRootCause
itemImplements
itemIntroducesRisk
itemIsRiskControlledBy
itemExecutes
itemRelatesTo
itemIsRelatedTo
itemResolvedBy
itemResultsIn
itemTests
itemUses
itemTriggers
itemIsTriggeredBy
```

In **Cucumber** files, every tag that starts with `@tests:` is considered to be a traceability field and its always `itemTests`.

### Git-based configuration items traceability to Jira-based configuration items

In a **Markdown** file, it is possible to define traceability between Git-based and Jira-based configuration items. For example, it is possible to define that a Software Item Spec, whose content is managed in a Git repository, fulfills a Requirement that is managed in Jira. In order to do this, define the `itemFulfills` field in the metadata of the Software Item Spec. The value of the `itemFulfills` field must be the Jira issue key.

```yaml
---
itemFulfills: KP-42
itemHasParent: KP-40
---
```

For **Cucumber** files, its enough to use the Jira issue key as a tag, e.g. `@tests:KP-42`.

### Git-based configuration items traceability to other Git-based configuration items

In a **Markdown** file, it is possible to define traceability between Git-based configuration items. For example, it is possible to define that a Software Item Spec, whose content is managed in a Git repository, fulfills a Requirement that is also managed in the same Git repository. In order to do this, define the `itemFulfills` field in the metadata of the Software Item Spec. The value of the `itemFulfills` field must be the `itemId` of the Requirement.

```yaml
---
itemFulfills: some-unique-string-1234
itemHasParent: some-unique-string-1235
---
```

For **Cucumber** files, its enough to use the `@tests:` tag with the `itemId` of the Requirement, e.g. `@tests:some-unique-string-1234`.

### Jira-based configuration items traceability to Git-based configuration items

All configuration items that are managed in a Git repository and synced with Ketryx are automatically exposed in Jira select fields for item relations. Thus, if a configuration item is defined in a Git repository and synced with Ketryx, it will be available in the select field of the Jira issue. For example, if a Task, whose content is managed in Jira, implements a Software Item Spec that is managed in a Git repository, you can select the Software Item Spec from the Git repository in the select field of the Task issue.

## Versioning

Every Git-based configuration item is associated with a version of the Git repository. The version is determined by the release ref pattern or a branch that is defined during the project creation or editing process. For example, if the release ref pattern is set to `refs/tags/v#`, the version of the Git-based configuration item will be determined by the tag name. If the tag name is `v1.0.0`, the version of the Git-based configuration item will be `1.0.0`.
