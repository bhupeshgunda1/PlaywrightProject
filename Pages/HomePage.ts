import { test, expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';


export class HomePage extends BasePage {
  readonly homeTitle: Locator;
  readonly logoutButton: Locator;
  readonly userGreeting: Locator;

  constructor(page: Page) {
    super(page);
    this.homeTitle = page.locator('h1'); // Adjust selector as needed
    this.logoutButton = page.locator('[data-test="logout"]'); // Adjust selector
    this.userGreeting = page.locator('.user-greeting'); // Adjust selector
  }

  async isLoggedIn(): Promise<boolean> {
    return await this.logoutButton.isVisible();
  }

  async logout() {
    await this.logoutButton.click();
  }

  async getUserGreeting(): Promise<string | null> {
    return await this.userGreeting.textContent();
  }
}