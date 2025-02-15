import {expect} from "@playwright/test";

const login = async ({ page }) => {
    const body = (page.locator('body'));

    await page.goto('/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(body).toContainText(/Email/);
    await page.fill('#email', 'admin@admin.com');
    await page.fill('#password', 'password');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(body).toContainText(/You're logged in!/);
}

export { login };
