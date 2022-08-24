///<reference types="cypress" />  


describe('Web Elements',()=>{

it('First Test',()=>{

//tag name
cy.get('input')

//by ID
cy.get('#twotabsearchtextbox')

//by className
cy.get('.nav-input nav-progressive-attribute')

//by attribute name
cy.get('[placeholder]')

//by attribuıte name and value
cy.get('[placeholder=Email]')

//by class value
cy.get('[class="navLeftFooter nav-sprite-v1"]')

//by tag name and attribute with value
cy.get('input [placeholder=Email]')
cy.get('input [type="hidden"]')

//two different attribute or more
cy.get('[placeholder=Email][type="hidden"]#twotabsearchtextbox')

cy.contains('crid').click()





})








})