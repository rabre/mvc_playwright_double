import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://web.facebook.com/');
  await page.getByTestId('royal_email').click();
  await page.getByTestId('royal_email').fill('mihajabrice@gmail.com');
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('Konect');
  await page.locator('#passContainer div').nth(1).click();
  await page.getByTestId('royal_pass').click();
  await page.getByTestId('royal_pass').fill('Konecta@2024');
  await page.getByTestId('royal_login_button').click();
  await page.goto('https://web.facebook.com/');
});