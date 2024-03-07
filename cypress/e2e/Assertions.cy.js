describe("Assertion  POC" ,() =>{

it("Implicit assertions", ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/', { retries: 3, delay: 5000 }).then(() => {
    //should and

    cy.url().should('include', 'orangehrmlive.com')
    cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain', 'orangehrm')

    cy. url(). should('include', 'orangehrmlive.com')
    .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .should('contain', 'orangehrm')

    cy. url(). should('include', 'orangehrmlive.com')
    .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    .and('contain', 'orangehrm')
    .and('not.contain', 'orangssssehrm')

    cy.get('. orangehrm-login-branding > img'). should('be. visible')
    cy.get('. orangehrm-login-branding > img'). should('exist')

    cy.xpath("//a"). should( 'have. length', '5') // No of links

})

})

})