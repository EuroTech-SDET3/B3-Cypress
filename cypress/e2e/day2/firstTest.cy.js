///<reference types="cypress" /> 


describe('First Test ',()=>{


    it('TC001 google testi',()=>{

        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').should('be.visible').type('cypress{enter}')
        cy.url().should('include','cypress')
        cy.get('[href="https://www.cypress.io/"] > .LC20lb')
          .should('have.text','JavaScript End to End Testing Framework | cypress.io testing ...')
          .click()





    })





})