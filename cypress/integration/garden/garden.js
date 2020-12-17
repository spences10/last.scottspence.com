/* global cy */
import {
  Given,
  Then,
  When,
} from 'cypress-cucumber-preprocessor/steps'

Given('I am on the Garden page', () => {
  cy.visit('/garden')
})

Then('I will see the content', () => {
  cy.contains('A Digital Garden')
  cy.contains('Hi people')
})

When('I hover over the "Link boxes"', () => {
  //TODO: This doesn't work
  // cy.get('a').trigger('mouseenter')
})

When('I click on one of the "Link boxes"', () => {
  cy.get('article').eq(0).click()
})

Then('I will be taken to the selected post', function () {
  cy.url().should('include', '/2020/')
})
