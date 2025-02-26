// @ts-compra
import { test, expect } from '@playwright/test';


test('Compra completa', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="primary-header"]')).toContainText('Swag Labs');
  
    await page.locator('[data-test="add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.getByText('Name (A to Z)Name (A to Z)').click();
    await page.locator('[data-test="product-sort-container"]').selectOption('za');
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();
  
    await page.locator('[data-test="firstName"]').fill('Vioti');
    await page.locator('[data-test="lastName"]').fill('Papito');
    await page.locator('[data-test="postalCode"]').fill('02543000');
    await page.locator('[data-test="continue"]').click();
    
    await expect(page.locator('[data-test="total-label"]')).toContainText('Total: $45.33');
    await page.locator('[data-test="finish"]').click();
    await expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!');
    
  });