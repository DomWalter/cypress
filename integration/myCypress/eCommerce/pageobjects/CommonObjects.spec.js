class CommonObjects{

getSortBy()

    {
    return cy.get('.sortPagiBar > #productsSortForm > .select > #uniform-selectProductSort > #selectProductSort')
    }

findAddtoCompare()

    {
    return cy.get('.add_to_compare')
    }

findCompare()

    {
    return cy.get('.bottom-pagination-content > .compare-form > .btn > span')
    }

findAddtoCart()

    {
   return cy.contains('Add to cart')
    }

findGoCheckout()

    {
   return cy.get('.button-medium > span')
    }

/* findCart()

    {
     return cy.get('b')
    } */

}

export default CommonObjects;