import {expect, test} from '@playwright/test';
import {login} from './fixtures/login.js';
import {profile} from "./fixtures/profile.js";

test('has profile details', async ({ page }) => {
    await login({ page });

    await profile({ page });
})
