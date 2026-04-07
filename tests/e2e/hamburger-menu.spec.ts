import { test, expect } from "@playwright/test";

// Small device viewports where hamburger MUST be visible (breakpoint ≤640px)
const MOBILE_VIEWPORTS = [
  { name: "iPhone SE", width: 320, height: 568 },
  { name: "iPhone 14", width: 375, height: 812 },
  { name: "iPhone 14 Pro Max", width: 414, height: 896 },
  { name: "Galaxy S21", width: 360, height: 800 },
  { name: "Breakpoint edge (640px)", width: 640, height: 900 },
];

// Desktop viewports where hamburger MUST be hidden
const DESKTOP_VIEWPORTS = [
  { name: "Desktop 1024", width: 1024, height: 768 },
  { name: "Desktop 1440", width: 1440, height: 900 },
];

test.describe("Hamburger menu visibility on mobile devices", () => {
  for (const vp of MOBILE_VIEWPORTS) {
    test(`hamburger is visible at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      const hamburger = page.locator("button.nav-hamburger");
      await expect(hamburger).toBeVisible();
    });
  }
});

test.describe("Hamburger menu hidden on desktop", () => {
  for (const vp of DESKTOP_VIEWPORTS) {
    test(`hamburger is hidden at ${vp.name} (${vp.width}px)`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      const hamburger = page.locator("button.nav-hamburger");
      await expect(hamburger).toBeHidden();
    });
  }
});

test.describe("Hamburger menu open/close behavior", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");
  });

  test("clicking hamburger opens the mobile menu overlay", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");
    const menu = page.locator("#mobile-menu");

    // Menu should not exist initially
    await expect(menu).toHaveCount(0);

    // Open menu
    await hamburger.click();
    await expect(menu).toBeVisible();

    // Verify aria-expanded is true
    await expect(hamburger).toHaveAttribute("aria-expanded", "true");

    // Verify body scroll is locked
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("hidden");
  });

  test("clicking hamburger again closes the menu", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");

    // Open then close
    await hamburger.click();
    await expect(page.locator("#mobile-menu")).toBeVisible();

    await hamburger.click();
    await expect(page.locator("#mobile-menu")).toHaveCount(0);

    // Verify aria-expanded is false
    await expect(hamburger).toHaveAttribute("aria-expanded", "false");

    // Verify body scroll is unlocked
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("");
  });

  test("clicking a nav link closes the menu and unlocks scroll", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");

    // Open menu
    await hamburger.click();
    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    // Click the first link (Work)
    await menu.locator("a.mobile-menu-link").first().click();

    // Menu should close
    await expect(menu).toHaveCount(0);

    // Body scroll should be unlocked
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("");
  });

  test("clicking 'Let's talk' CTA closes the menu", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");

    // Open menu
    await hamburger.click();
    const cta = page.locator("a.mobile-menu-cta");
    await expect(cta).toBeVisible();

    // Click CTA
    await cta.click();

    // Menu should close
    await expect(page.locator("#mobile-menu")).toHaveCount(0);

    // Body scroll should be unlocked
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("");
  });

  test("menu background is fully opaque #0a0a0a", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");
    await hamburger.click();

    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    const bg = await menu.evaluate((el) => getComputedStyle(el).backgroundColor);
    // #0a0a0a = rgb(10, 10, 10)
    expect(bg).toBe("rgb(10, 10, 10)");

    // Ensure no backdrop-filter
    const backdrop = await menu.evaluate((el) => getComputedStyle(el).backdropFilter);
    expect(backdrop).toBe("none");
  });

  test("all nav links are present in mobile menu", async ({ page }) => {
    await page.locator("button.nav-hamburger").click();
    const menu = page.locator("#mobile-menu");

    await expect(menu.locator("a")).toHaveCount(4); // Work, Experience, About, Let's talk
    await expect(menu.locator("text=Work")).toBeVisible();
    await expect(menu.locator("text=Experience")).toBeVisible();
    await expect(menu.locator("text=About")).toBeVisible();
    await expect(menu.locator("text=Let's talk")).toBeVisible();
  });

  test("mobile menu has correct z-index stacking for iOS WebKit", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");
    await hamburger.click();

    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    // mobile-menu z-index: 999
    const menuZIndex = await menu.evaluate((el) => getComputedStyle(el).zIndex);
    expect(menuZIndex).toBe("999");

    // nav z-index: 1000
    const nav = page.locator("nav.nav");
    const navZIndex = await nav.evaluate((el) => getComputedStyle(el).zIndex);
    expect(navZIndex).toBe("1000");

    // hamburger z-index: 1001
    const hamburgerZIndex = await hamburger.evaluate((el) => getComputedStyle(el).zIndex);
    expect(hamburgerZIndex).toBe("1001");
  });

  test("mobile menu has GPU layer promotion (translateZ) and isolation", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");
    await hamburger.click();

    const menu = page.locator("#mobile-menu");
    await expect(menu).toBeVisible();

    const styles = await menu.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        isolation: cs.isolation,
        transform: cs.transform,
      };
    });

    expect(styles.isolation).toBe("isolate");
    // translateZ(0) computes to a matrix3d or matrix with no translation
    expect(styles.transform).not.toBe("none");
  });

  test("nav has solid background with no backdrop-filter", async ({ page }) => {
    const nav = page.locator("nav.nav");

    const styles = await nav.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        backgroundColor: cs.backgroundColor,
        backdropFilter: cs.backdropFilter,
      };
    });

    // #0a0a0a = rgb(10, 10, 10)
    expect(styles.backgroundColor).toBe("rgb(10, 10, 10)");
    expect(styles.backdropFilter).toBe("none");
  });

  test("scroll lock applies to both body and documentElement", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");

    // Open menu
    await hamburger.click();
    await expect(page.locator("#mobile-menu")).toBeVisible();

    const openOverflows = await page.evaluate(() => ({
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow,
    }));
    expect(openOverflows.body).toBe("hidden");
    expect(openOverflows.html).toBe("hidden");

    // Close via nav link
    await page.locator("#mobile-menu a.mobile-menu-link").first().click();
    await expect(page.locator("#mobile-menu")).toHaveCount(0);

    const closedOverflows = await page.evaluate(() => ({
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow,
    }));
    expect(closedOverflows.body).toBe("");
    expect(closedOverflows.html).toBe("");
  });

  test("CTA link clears overflow on both body and documentElement", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");
    await hamburger.click();

    const cta = page.locator("a.mobile-menu-cta");
    await expect(cta).toBeVisible();
    await cta.click();

    await expect(page.locator("#mobile-menu")).toHaveCount(0);

    const overflows = await page.evaluate(() => ({
      body: document.body.style.overflow,
      html: document.documentElement.style.overflow,
    }));
    expect(overflows.body).toBe("");
    expect(overflows.html).toBe("");
  });

  test("rapid open/close does not leave scroll locked", async ({ page }) => {
    const hamburger = page.locator("button.nav-hamburger");

    // Rapid toggles
    for (let i = 0; i < 5; i++) {
      await hamburger.click();
    }

    // 5 clicks = odd = menu open
    await expect(page.locator("#mobile-menu")).toBeVisible();
    let overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("hidden");

    // One more click to close
    await hamburger.click();
    await expect(page.locator("#mobile-menu")).toHaveCount(0);
    overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe("");
  });
});
