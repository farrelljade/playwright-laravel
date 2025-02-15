import { test } from '@playwright/test';
import { login } from './fixtures/login.js'

test('log in', async ({ page }) => {
    await login({ page });
});
