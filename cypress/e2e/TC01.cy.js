
/// <reference types="cypress" />
import TestFilters from '../support/filterTests.js'

describe('template spec', () => {
  

it('Validate Page Title',()=>{
  cy.visit('https://wikipedia.org', { retries: 3, delay: 5000 })
  cy.title().should('eq','Wikipedia')
})


it('Search for Google Wiki Page', () => {
  // Wait for the search input field to be visible
  cy.visit('https://wikipedia.org', { retries: 3, delay: 5000 })
  cy.get('#searchInput').should('be.visible').type('google')
  cy.get('button[type="submit"]').click()
})

it('Validate Google Wiki Page has opened', () => {
  cy.visit('https://wikipedia.org', { retries: 3, delay: 5000 })
  cy.get('h1#firstHeading').contains('Google')
  cy.title().should('eq', 'Google - Wikipedia')
})

})