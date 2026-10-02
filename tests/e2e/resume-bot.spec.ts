import { test, expect } from "@playwright/test";

test.describe("Resume & Architecture Assistant Bot (RAG)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("trigger button is visible on page", async ({ page }) => {
    const trigger = page.locator(".resume-bot-trigger");
    await expect(trigger).toBeVisible();
    await expect(trigger).toContainText("Technical Q&A");
  });

  test("clicking trigger opens the assistant drawer", async ({ page }) => {
    const trigger = page.locator(".resume-bot-trigger");
    const drawer = page.locator("#resume-bot-drawer");

    await expect(drawer).not.toHaveClass(/is-open/);
    await trigger.click();
    await expect(drawer).toHaveClass(/is-open/);
    await expect(page.locator(".bot-title")).toContainText("Engineering & Architecture Q&A");
  });

  test("starter prompt chips populate and submit questions", async ({ page }) => {
    await page.locator(".resume-bot-trigger").click();

    // Check starter prompts are displayed
    const starterBtn = page.locator(".bot-starter-card").first();
    await expect(starterBtn).toBeVisible();
    await starterBtn.click();

    // Check message appears in chat
    const userMessage = page.locator(".user-bubble");
    await expect(userMessage).toBeVisible();

    // Wait for assistant response to stream in
    const assistantBubble = page.locator(".assistant-bubble");
    await expect(assistantBubble).toBeVisible();
    await expect(assistantBubble).not.toBeEmpty();
  });

  test("pressing Escape key closes the drawer", async ({ page }) => {
    const trigger = page.locator(".resume-bot-trigger");
    const drawer = page.locator("#resume-bot-drawer");

    await trigger.click();
    await expect(drawer).toHaveClass(/is-open/);

    await page.keyboard.press("Escape");
    await expect(drawer).not.toHaveClass(/is-open/);
  });
});
