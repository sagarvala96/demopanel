var functions = require('./Function')
var functions1 = require('./Eservice_function')

var email = functions.email();
var number = functions.number();

it('Eservice - New Data ', () => {

    cy.contains("Eservice").click({
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
    cy.contains(functions.service()).click({force: true})
    cy.wait(functions.wait())

    cy.get('.input-group > .form-control').type(number)
    cy.wait(functions.wait())

    cy.get('.d-flex > .btn').click({force: true})
    cy.screenshot()
    cy.wait(functions.wait())
    cy.wait(functions.wait())
})

// it('Home Page ', () => {

//     cy.viewport(functions.resolution())
//     cy.visit(functions.baseURL())
//     cy.wait(5000)
// })

// it('Eservice - Already Added Data ', () => {

//     cy.contains("Eservice").click({
//         force: true
//     })
//     cy.wait(functions.wait())
    
//     cy.get(':nth-child(1) > .col-sm-8 > .form-control').type(functions.string())
//     cy.wait(functions.wait())

//     cy.get(':nth-child(2) > .col-sm-8 > .form-control').type(email)
//     cy.wait(functions.wait())

//     cy.get('.phone_code_dropdown > .ng-select-container > .ng-value-container > .ng-input').click({force: true})
//     cy.wait(functions.wait())
//     cy.contains(functions.already_added_country()).click({force: true})
//     cy.wait(functions.wait())

//     cy.get('#addressAutofill').type(functions.already_added_city(),{force: true}).first().focus().wait(1000).type("{downarrow} {enter}").wait(4000)
//     cy.wait(functions.wait())

//     cy.get('.store_delivery_id_dropdown > .ng-select-container > .ng-value-container > .ng-input > input').click({force: true})
//     cy.wait(functions.wait())
//     cy.contains(functions.service()).click({force: true})
//     cy.wait(functions.wait())

//     cy.get('.input-group > .form-control').type(number)
//     cy.wait(functions.wait())

//     // cy.get('.d-flex > .btn').click({force: true})
//     cy.screenshot()
//     cy.wait(functions.wait())
//     cy.wait(functions.wait())
// })

it('Eservice - Admin Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Admin_Panel())
    cy.wait(5000)

    cy.get('#mat-input-0').type(functions1.admin_id())
    cy.get('#mat-input-1').type(functions1.admin_password())
    cy.get('.mb-1').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eservice - Company Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.Company_panel())
    cy.wait(5000)

    cy.get('#mat-input-0').type(number)
    cy.get('#mat-input-1').type(functions1.password())
    cy.get('.mb-1').click({force: true})
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})

it('Eservice - User Panel ', () => {

    cy.viewport(functions.resolution())
    cy.visit(functions1.User_panel())
    cy.wait(5000)

    cy.get('.nav-link').click({force: true})
    cy.wait(functions.wait())
    cy.get('.border-0').type(functions1.user_country_code())
    cy.wait(functions.wait())
    cy.get(':nth-child(1) > .form-control').type(number)
    cy.wait(functions.wait())
    cy.get(':nth-child(2) > .form-control').type(functions1.password())
    cy.wait(functions.wait())
    cy.get('.btn-danger').click({force: true})
    cy.wait(functions.wait())
    cy.wait(functions.wait())

    cy.screenshot()
    cy.wait(functions.wait())

})