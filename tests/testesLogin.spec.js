// @ts-login
import { test, expect } from '@playwright/test';

test('Login Incorreto', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('usuarioErrado');
  await page.locator('[data-test="password"]').fill('seret-sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

});

test('Login Correto', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');

});


