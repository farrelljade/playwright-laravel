import {test} from '@playwright/test';
import {login} from './fixtures/login.js';
import {profile} from "./fixtures/profile.js";

test('edit profile details', async ({ page }) => {
    await login({ page });

    await profile({ page });

    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('Mikel Farrell Test');
    await page.locator('form').filter({ hasText: 'NameEmailSave' }).getByRole('button').click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
})
