// @ts-check
import { test, expect } from '@playwright/test';

test('has laracasts', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toContainText(/Laracasts/);
});

test('log in', async ({ page }) => {
    const body = (page.locator('body'));

    await page.goto('/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await expect(body).toContainText(/Email/);
    await page.fill('#email', 'admin@admin.com');
    await page.fill('#password', 'password');
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(body).toContainText(/You're logged in!/);
});
