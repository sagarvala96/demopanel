var functions = require('./Function')
var functions1 = require('./Eber_function')

var email = functions.email();
var number = functions.number();

it('Eber - New Data ', () => {

    cy.contains("Eber").click({
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

    cy.get('#eber_addressAutofill').type(functions.city(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
    cy.wait(functions.wait())

    cy.get('.store_delivery_id_dropdown > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true})
    cy.wait(functions.wait())
    cy.contains(functions.vehicle_type()).click({force: true})
    cy.wait(functions.wait())

    cy.get('.input-group > .form-control').type(number)
    cy.wait(functions.wait())

    cy.get('.d-flex > .btn').click({force: true})
    cy.screenshot()
    cy.wait(functions.wait())
    cy.wait(functions.wait())
})

// it('Eber - Already Added Data ', () => {

//     cy.contains("Eber").click({
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

//     cy.get('#eber_addressAutofill').type(functions.already_added_city(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
//     cy.wait(functions.wait())

//     cy.get('.store_delivery_id_dropdown > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true})
//     cy.wait(functions.wait())
//     cy.contains(functions.vehicle_type()).click({force: true})
//     cy.wait(functions.wait())

//     cy.get('.input-group > .form-control').type(functions.number())
//     cy.wait(functions.wait())

//     // cy.get('.d-flex > .btn').click({force: true})
//     cy.screenshot()
//     cy.wait(functions.wait())
//     cy.wait(functions.wait())
// })



it('Eber - Admin Panel ', () => {

    cy.wait(functions.wait())
    cy.wait(functions.wait())

    cy.viewport(functions.resolution())
    cy.visit(functions1.Admin_Panel())
    cy.wait(5000)

    cy.get('#e').type(functions1.admin_id())
    cy.get('#Password').type(functions1.admin_password())
    cy.get(':nth-child(2) > .btn').click({force: true})

    cy.wait(functions.wait())
    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eber - User Panel ', () => {
    
    cy.viewport(functions.resolution())
    cy.visit(functions1.User_panel())
    cy.wait(5000)
    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
    })
    console.log("hello")

    cy.contains("RIDER SIGN IN").click({force: true})

    cy.get('#phone').type(number)
    cy.get('[name="password"]').type(functions1.password())
    cy.get('button > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())   

})

it('Eber - Driver Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.User_panel())
    cy.wait(5000)

    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false
    })

    cy.get(':nth-child(1) > form > .btn').click({force: true})

    cy.get(':nth-child(2) > input').type(email)
    cy.get(':nth-child(3) > input').type(functions1.password())
    cy.get('button > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())   

})

it('Eber - Corporate Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Corporate_panel())
    cy.wait(functions.wait())

    cy.get('#email').type(email)
    cy.get('#Password').type(functions1.password())
    cy.get(':nth-child(2) > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eber - Partner Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Partner_panel())
    cy.wait(functions.wait())

    cy.get('#email').type(email)
    cy.get('#Password').type(functions1.password())
    cy.get(':nth-child(2) > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eber - Dispatcher Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Dispatcher_panel())
    cy.wait(functions.wait())

    cy.get('#email').type(email)
    cy.get('#Password').type(functions1.password())
    cy.get(':nth-child(2) > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eber - Hotel Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Hotel_panel())
    cy.wait(functions.wait())

    cy.get('#email').type(email)
    cy.get('#Password').type(functions1.password())
    cy.get(':nth-child(2) > .btn').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})