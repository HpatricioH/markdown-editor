import { test, expect } from '@playwright/test'

test('Header component', async ({ page }) => {
  // Navigate to your application
  await page.goto('http://localhost:3000')

  // Check if the header is rendered when the page loads
  const header = await page.$('#header')
  expect(header).toBeTruthy()

  // Check if the delete modal will show when a user is unauthorized
  await page.click('#unauthorize-delete-button')
  const alertModal = await page.$('#deleteModal')
  expect(alertModal).toBeTruthy()
})
