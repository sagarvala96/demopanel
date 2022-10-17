var functions = require('./Function')
var functions1 = require('./Edelivery_function')

var email = functions.email();
var number = functions.number();

it('Edelivery - New Data', () => {

    cy.contains("Edelivery").click({
        force: true
    })
    cy.wait(functions.wait())

    
    cy.get(':nth-child(1) > .col-sm-8 > .form-control').type(functions.string())
    cy.wait(functions.wait())

    cy.get(':nth-child(2) > .col-sm-8 > .form-control').type(email)
    cy.wait(functions.wait())

    cy.get('.phone_code_dropdown > .ng-select-container > .ng-value-container > .ng-input').click({force: true})
    cy.wait(functions.wait())
    cy.contains(functions.country()).click({force: true})
    cy.wait(functions.wait())

    cy.get('#addressAutofill').type(functions.city(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
    cy.wait(functions.wait())

    cy.get('.store_delivery_id_dropdown > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true})
    cy.wait(functions.wait())
    cy.contains(functions.delivery_business()).click({force: true})
    cy.wait(functions.wait())
    
    cy.get('.input-group > .form-control').type(number)
    cy.wait(functions.wait())

    cy.get('.d-flex > .btn').click({force: true})
    cy.wait(functions.wait())
    
    cy.screenshot()
    cy.wait(functions.wait())
    cy.wait(functions.wait())
})

// it('Home Page ', () => {

//     cy.viewport(functions.resolution())
//     cy.visit(functions.baseURL())
//     cy.wait(5000)
// })

// it('Edelivery - Already Added Data ', () => {

//     cy.contains("Edelivery").click({
//         force: true
//     })
//     cy.wait(functions.wait())

    
//     cy.get(':nth-child(1) > .col-sm-8 > .form-control').type(functions.string())
//     cy.wait(functions.wait())

//     cy.get(':nth-child(2) > .col-sm-8 > .form-control').type(functions.email())
//     cy.wait(functions.wait())

//     cy.get('.phone_code_dropdown > .ng-select-container > .ng-value-container > .ng-input').click({force: true})
//     cy.wait(functions.wait())
//     cy.contains(functions.already_added_country()).click({force: true})
//     cy.wait(functions.wait())

//     cy.get('#addressAutofill').type(functions.already_added_city(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
//     cy.wait(functions.wait())

//     cy.get('.store_delivery_id_dropdown > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true})
//     cy.wait(functions.wait())
//     cy.contains(functions.delivery_business()).click({force: true})
//     cy.wait(functions.wait())
    
//     cy.get('.input-group > .form-control').type(functions.number())
//     cy.wait(functions.wait())

//     cy.get('.d-flex > .btn').click({force: true})
//     cy.screenshot()
//     cy.wait(functions.wait())
//     cy.wait(functions.wait())
// })



it('Edelivery - Admin Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Admin_Panel())
    cy.wait(5000)
    
    cy.get(':nth-child(1) > .form-control').type(functions1.admin_id())
    cy.get(':nth-child(2) > .form-control').type(functions1.admin_password())
    cy.get('.btn').click({force: true})

    cy.wait(functions.wait())
    cy.screenshot()
    cy.wait(functions.wait())

})

it('Edelivery - Store Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Store_panel())
    cy.wait(5000)
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
    })
    
    cy.get(':nth-child(1) > .col-sm-8 > .form-control').type(email)
    cy.get(':nth-child(2) > .col-sm-8 > .form-control').type(functions1.password())
    cy.get('.btn').click({force: true})

    cy.wait(functions.wait())
    cy.screenshot()
    cy.wait(functions.wait())

})

it('Edelivery - User Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.User_panel())
    cy.wait(5000)
    
    cy.get('.toggle-btn > .primary-btn').click({force: true})
    cy.get('#sign-in-popup > .custom-model-inner > .custom-model-wrap > .signin-box > .signin-container > form.ng-pristine > .form-field--inputEmail > .form-control').type(email)
    cy.get('.form-field--inputPassword > .form-control').type(functions1.password())
    cy.contains("Submit").click({force: true})

    cy.wait(functions.wait())
    cy.screenshot()
    cy.wait(functions.wait())

})