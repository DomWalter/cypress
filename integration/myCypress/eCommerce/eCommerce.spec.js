/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
//Import class containing objects common to pages
import CommonObjects from '../eCommerce/pageobjects/CommonObjects.spec'
import 'cypress-iframe'

describe('eCommerce Test Set', () => {

  //Instantiate new instance of CommonObjects class as 'co' to be able to use methods
  const co = new CommonObjects()

  var pricetxt = null
  
   
it('hits homepage then chooses next page', () => {

  cy.visit('http://automationpractice.com/index.php')

  //cy.contains('Women').click()
  cy.get('.sf-menu > :nth-child(3)').click()
 
})

it('selects filter options', () => {

  //Click 'small' - TODO- replace method with one in commands.js
  cy.get('#layered_id_attribute_group_1').check().should('be.checked')

  //Select random colour using custom command in support/commands.js
  cy.randSelector('.color-option')
   
  ///Select product ordering option
  co.getSortBy().select('price:asc')

})

it('will click Add to Compare then go to Compare page', () => {

  //Store price for validation later
  cy.get('.right-block > .content_price > .price').then(($price) => {
  // store the element's text
  pricetxt = $price.text()
  })

  
//Click add to compare then click comparison button
  co.findAddtoCompare().click()
  co.findCompare().click()

})

it('will click Add to Cart then Proceed to Checkout', () => {

 //Click 'Add to cart' button then checkout
 //Had to add a second click plus wait to allow DOM reload, and time for checkout button to render
 co.findAddtoCart().click().click().wait(2000)

 co.findGoCheckout().click({force:true})

  //Ensure total in checkout is as expected
  cy.get('#total_product').then(($price2) => {
  const price2txt = $price2.text()
  expect(pricetxt).to.contain(price2txt)
  })

})


})