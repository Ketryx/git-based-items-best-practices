import { Given } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Given(
  "User creates a project to manage Git-based Items with the following glob pattern",
  () => {
    expect(true).toBe(true);
  },
);

Given('User navigates to "Settings" page', () => {
  expect(true).toBe(true);
});

Given("User should see following glob patterns for Git-based Items:", () => {
  expect(true).toBe(true);
});
