///<reference types="cypress" /> 


describe('Login Test ', () => {


    it('TC001 positive scenario', () => {

        cy.visit('https://www.demoblaze.com/')
        cy.viewport('macbook-16')
        cy.get('#login2').click().wait(500)
        cy.get('#loginusername').type('username').wait(500)
        cy.get('#loginpassword').type('password').wait(500)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
            .click().wait(500)
        cy.get('#nameofuser')
            .should('be.visible')








    })





})