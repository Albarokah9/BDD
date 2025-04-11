const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the homepage', () => {
    cy.visit('http://zero.webappsecurity.com/login.html');
});

When('I logged into my account and searched for "online banking."', () => {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
    cy.get('#account_summary_tab > a').should('contain', 'Account Summary')
    cy.get('#searchTerm', { timeout: 10000 }).type('Online Banking {enter}')
    cy.url().should('include', 'search.html')
    cy.get('h2').should('contain.text', 'Search Results:')
    
});

Then('I should see search results related to "Zero - Free Access to Online Banking"', () => {
    cy.get('#searchTerm', { timeout: 10000 }).type('Online Banking {enter}')
    cy.url().should('include', 'search.html')
    cy.get('h2').should('contain.text', 'Search Results:')
    cy.get('ul').should('contain', 'li');
});


// Atribut	Format Cypress	Contoh
// id=	    #idName	        cy.get('#user-name')
// class=	  .className	    cy.get('.btn-primary')
// type=	  [type="value"]	cy.get('[type="text"]')

// Atribut lain	[atribut="value"]	cy.get('[data-test="login-button"]')
// Gabungan	tagname#idName.className[type="value"]	cy.get('input#user-name[type="text"]')
// Gabungan lain	tagname.className#idName[type="value"]	cy.get('input.btn-primary#user-name[type="text"]')
