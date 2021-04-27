/// <reference types="cypress" />

describe('Connection on a existing account Back Market', () => {
    
    it('Connection with existing account', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.title().should('eq', 'Rejoignez Back Market | Back Market' )
    cy.wait(3000)
    cy.get('#email-signin').click().type('slow.typing@email.com')
    cy.get('#email-signin').should('have.value', 'slow.typing@email.com' )
    cy.get('#password-signin').type('Wildcodeschool123')
    cy.get('[data-test=copy-wrap]').click({ multiple: true })
    cy.wait(5000)
    cy.title().should('contain', 'Back Market')
    })
})
