/* global cy */
import {
  Given,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the Home page', () => {
  cy.visit('/')
})

Then('I will see the content', () => {
  cy.contains('Scott Spence')
  cy.contains('Hi people')
})

When('I hover over the "Link boxes"', () => {
  //TODO: This doesn't work
  // cy.get('a').trigger('mouseenter')
})

When('I click on one of the "Link boxes"', () => {
  cy.get('a[href*="posts"]').click()
})

Then('I will be taken to the selected page', function () {
  cy.url().should('include', '/posts/')
})

// When('I click on one of the "Link boxes"', () => {
//   cy.get('a[href*="page-2"]').click()
// })

// Then('I will be taken to the selected post', function () {
//   cy.url().should('include', '/page-2/')
// })
