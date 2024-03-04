describe('Example to demonstrate the use each in Cypress',function(){


    // before(function () {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/')
    // })

    beforeEach(function () {
        cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
        })

        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('Validate successful Login', function () {
        cy.get('[name="username"]').type(this.testdata.username);
        cy.get('[name="password"]').type(this.testdata.password);
        cy.get('[type="submit"]').click();
    })

    it('Validate all the Quick Launch Texts', function () {
        // cy.visit('https://opensource-demo.orangehrmlive.com/', { retries: 3, delay: 5000 }).then(() => {
            // Use the loaded fixture data inside the callback function
            cy.get('[name="username"]').type(this.testdata.username);
            cy.get('[name="password"]').type(this.testdata.password);
            cy.get('[type="submit"]').click();
                   

        cy.get('[class="oxd-text oxd-text--p --text"]').each(($el, index) => {
            expect($el).to.contain(this.testdata.quickLaunch[index])
        })
    // });
    })


 
    });
    