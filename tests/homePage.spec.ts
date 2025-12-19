import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/HomePage';
import { LoginPage } from '../Pages/LoginPage';

test.describe('HomePage Tests', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    //homePage = new HomePage(page);
    //loginPage = new LoginPage(page);
    
    // Navigate to login and authenticate
    //await page.goto('https://automationexercise.com/');
    //await loginPage.login('standard_user', 'secret_sauce');
  });

  test('HomePage validation', async ({ page }) => {
    await page.goto('https://automationexercise.com/');
    await page.getByText('Automation').nth(3).click();
  await page.locator('.right').first().click();
  //await page.locator('.right').first().click();
  //await page.locator('.right').first().click();
  await page.getByRole('heading', { name: 'Features Items' }).click();
  await page.getByRole('heading', { name: 'Category' }).click();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: ' Men' }).click();
  await page.getByRole('link', { name: ' Kids' }).click();
  await page.locator('div').filter({ hasText: 'Rs. 500 Blue Top Add to cart' }).nth(4).click();
  await page.getByRole('heading', { name: 'Brands' }).click();
  await page.getByRole('heading', { name: 'recommended items' }).click();
  await page.locator('#scrollUp').click();
  await page.getByRole('heading', { name: 'Subscription' }).click();
  await page.getByRole('textbox', { name: 'Your email address' }).click();
  await page.getByText('Copyright © 2021 All rights').click();
  await page.getByRole('link', { name: 'Website for automation' }).click();
  console.log('HomePage validation test completed successfully.');
});
});