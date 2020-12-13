/// <reference types="cypress" />

describe('Navigation Test Set', () => {

  it('Navigate to practice page', () => {

    cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

    //Check header contains correct text
    cy.get('h1').should('have.text','Practice Page')

  })

  it('Choose from dynamic dropdown', () => {

    //Type into dynamic dropdown, iterate matches then select country
    cy.get('#autocomplete').type('united')
    //Get matching elements, then click if equal to United Kingdom (UK)
    cy.get('.ui-menu-item div').each(($el,index,$list) => {

        if ($el.text()=== "United Kingdom (UK)") {

            $el.click()
        }
    
    })  
  })

  it('Choose from static dropdown', () => {

    //Choose Option1 and assert it's chosen
    cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')

  })
                   
  it('Access a checkbox', () => {

    //Check first checkbox and ensure it's checked
    cy.get('#checkBoxOption1').check().should('be.checked')
    //Uncheck first checkbox and ensure it's unchecked
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    
  })

})
