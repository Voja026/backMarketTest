/// <reference types="cypress" />

describe('Creating account on Back Market', () => {
    
    it('Discconect from the account', () => {
    cy.visit('https://preprod.backmarket.fr/')
    cy.title().should('eq', 'Back Market – le (super) marché du reconditionné' )
    cy.get('._2uwHBcO7tJFnx16rFCurMs').click()
    cy.get('._36Jahm3PBECczuvCPC6vFq').click
    cy.title().should('contain', 'Rejoignez Back Market | Back Market')
    })
})
