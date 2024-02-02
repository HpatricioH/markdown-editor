import { test, expect } from '@playwright/test'

test('Sidebar login button navigates to login page', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // open sidebar by clicking the hamburger menu in header component
  await page.click('#hamburger-menu')

  // check if the sidebar is rendered
  const sidebar = await page.$('#sidebar')
  expect(sidebar).toBeTruthy()

  // check if the login button is rendered
  const loginButton = await page.$('#login-button')
  expect(loginButton).toBeTruthy()

  // click the login button and navigate to the login page
  await loginButton?.click()

  // navigate to the login page
  await expect(page).toHaveURL('http://localhost:3000/login?callbackUrl=http%3A%2F%2Flocalhost%3A3000')

  await expect(page.locator('p')).toContainText('Please enter your username and password to log in.')

  // navigate back to the home page by clicking the logo
  const logo = await page.$('#login-page-logo')
  await logo?.click()

  await expect(page).toHaveURL('http://localhost:3000')
})
