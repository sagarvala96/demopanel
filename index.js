// <reference types="cypress" />
var functions = require('./Function')


describe('Demo', () => {

    beforeEach(() => {
        cy.restoreLocalStorage();
    });
    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Home Page ', () => {

        cy.viewport(functions.resolution())
        cy.visit(functions.baseURL())
        cy.wait(5000)
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
    })

    //require('./Eber')
    //require('./Edelivery')
    require('./Eservice')
})