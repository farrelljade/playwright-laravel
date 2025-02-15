import {expect} from "@playwright/test";

const login = async ({ page }) => {
    const body = (page.locator('body'));

    await page.goto('/');

    // await expect(body).toContainText(/Log in/);
    // await page.click('text="Log in"');
    // await expect(body).toContainText(/Email/);
    // await page.fill('#email', 'admin@admin.com');
    // await page.fill('#password', 'password');
    // await page.click('text="Log in"');
    // await expect(body).toContainText(/You're logged in!/);

    await page.getByRole('link', { name: 'Log in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('admin@admin.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('password');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(body).toContainText(/You're logged in!/);
}

export { login };
