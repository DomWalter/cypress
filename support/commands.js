// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })


Cypress.Commands.add("randSelector", (locator) => { 

    var randIndex = null

    //Get length of matching elements and store as maxIndex
    var maxIndex = Cypress.$(locator).length

    cy.log ('Length = ' + maxIndex)

    //Create random number starting from 0 up to and excluding maxIndex
    randIndex = Math.floor(Math.random() * maxIndex )

    cy.log ('Chosen Index = ' + randIndex)

    //Click on chosen element within 'locator'
    return cy.get(locator).eq(randIndex).click()

 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
