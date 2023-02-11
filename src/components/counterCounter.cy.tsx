import React from 'react'
import Counter from './counter'

describe('<Counter />', () => {

  beforeEach(() => {
    cy.mount(<Counter/>)
  })

  it('decrements counter', () => {
    cy.get('[data-cy=decrement]').click()
    cy.get('[data-cy=counter]').should('have.text', '-1')
  })

  it('increments counter', () => {
    cy.get('[data-cy=increment]').click()
    cy.get('[data-cy=counter]').should('have.text', '1')
  })

})