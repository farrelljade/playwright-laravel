import {expect} from '@playwright/test';
import {login} from "./login.js";

const profile = async ({ page }) => {
    const body = (page.locator('body'));

    // await login({ page });

    // await page.click('text="Mikel Farrell"');
    // await page.click('text="Profile"');
    // await expect(body).toContainText(/Profile Information/);

    await page.getByRole('button', { name: 'Mikel Farrell' }).click();
    await page.getByRole('link', { name: 'Profile' }).click();
    await expect(body).toContainText(/Profile Information/);
}

export { profile };
