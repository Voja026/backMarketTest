/// <reference types="cypress" />

describe('Creating account on Back Market', () => {
    
    it('Creating account', () => {
    cy.visit('https://preprod.backmarket.fr/')
    cy.title().should('eq', 'Back Market – le (super) marché du reconditionné' )
    cy.get('._1Hy3iZ0THBmZ6r_sT34Sf6').click()
    cy.title().should('eq', 'Rejoignez Back Market | Back Market' )
    cy.wait(5000)
    cy.get('#email-signup').type('slow.typing@email.com', { delay: 100 })
    .should('have.value', 'slow.typing@email.com')
    cy.get('#firstName-signup').type('Vojislav')
    cy.get('#lastName-signup').type('Andelkovic')
    cy.get('#password-signup').type('Wildcodeschool123')
    cy.get('[data-test=signup-submit-button]').click()
    cy.url().should('contain','dashboard/orders')
    cy.get('._2widA810d2j5Lui3YSvHeH').click()
    cy.get('._36Jahm3PBECczuvCPC6vFq').click()
    cy.title().should('contain.html','https://preprod.backmarket.fr/register')
    })
})
