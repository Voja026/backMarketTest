/// <reference types="cypress" />

describe('Creating account on Back Market', () => {
    
    it('Discconect from the account', () => {
    cy.visit('https://preprod.backmarket.fr/')
    cy.title().should('eq', 'Back Market – le (super) marché du reconditionné' )
    cy.get('[data-test=user-icon-link]').click()
    cy.contains('Déconnexion').click()
    cy.title().should('contain', 'Rejoignez Back Market | Back Market')
    })
})
