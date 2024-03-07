describe('Login to OrangeHRM website',function(){

    it('Validate Page Title', () => {
        // Load fixture data
        cy.fixture('testdata').then(function (testdata) {
            // Once fixture data is loaded, set it to a variable
            this.testdata = testdata;
    
            // Visit the page and perform login actions inside the callback function
            cy.visit('https://opensource-demo.orangehrmlive.com/', { retries: 3, delay: 5000 }).then(() => {
                // Use the loaded fixture data inside the callback function
                cy.get('[name="username"]').type(this.testdata.username);
                cy.get('[name="password"]').type(this.testdata.password);
                cy.get('[type="submit"]').click();
                
           //     cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module[data-v-7b563373][data-v-f0c5131f]').contains(this.testdata.welcomeText);
            });
        });
    });
    





})