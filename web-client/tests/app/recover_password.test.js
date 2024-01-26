const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/recover_password");
});

test('should display "Car Inspect" logo', async ({ page }) => {
  await expect(page.locator("text=Car Inspect")).toBeVisible();
});

test("should display subtitle with correct text", async ({ page }) => {
  await expect(
    page.locator(
      "text=Se uma conta existir com o e-mail digitado, você receberá um link para criar uma nova senha"
    )
  ).toBeVisible();
});

test("should display an email input field", async ({ page }) => {
  await expect(page.locator('input[placeholder="E-mail"]')).toHaveCount(1);
});

// test('should display a "Enviar" button', async ({ page }) => {
//   await expect(page.locator('button[text="Enviar"]')).toHaveCount(1);
// });

// test("should have a valid form submission", async () => {
//   await page.fill('input[placeholder="Digite sua nova senha"]', "password123");
//   await page.click("text=Redefinir senha");

//   await page.waitForNavigation();
//   await expect(page.locator('data-testid="success-page"')).toBeVisible();
// });
