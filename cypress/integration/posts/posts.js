/* global cy */
import {
  Given,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the Posts page', () => {
  cy.visit('/posts')
})

Then('I will see the content', () => {
  cy.contains('Scott Spence')
})

When('I hover over the "Link boxes"', () => {
  //TODO: This doesn't work
  // cy.get('a').trigger('mouseenter')
})

When('I click on one of the "Link boxes"', () => {
  cy.get('h2').eq(1).click()
})

Then('I will be taken to the selected post', function () {
  cy.url().should('include', '/2020/')
})
