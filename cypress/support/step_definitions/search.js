import LoginPage from "../page_objects/login.page";
import SearchPage from "../page_objects/search.page";

const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I open the homepage", () => {
  LoginPage.visit();
  // cy.visit('http://zero.webappsecurity.com/login.html');
});

When("I log into my account", () => {
  LoginPage.fillUsername("username");
  LoginPage.fillPassword("password");
  LoginPage.signIn();

  // cy.get('#user_login').type('username')
  // cy.get('#user_password').type('password')
  // cy.contains('Sign in').click()
  // cy.get('#account_summary_tab > a').should('contain', 'Account Summary')
  // cy.get('#searchTerm', { timeout: 10000 }).type('Online Banking {enter}')
  // cy.url().should('include', 'search.html')
  // cy.get('h2').should('contain.text', 'Search Results:')
});

When('I search for "online banking"', () => {
  SearchPage.enterSearchTerm("online banking");

  // cy.get('#searchTerm', { timeout: 10000 }).type('online banking{enter}');
});

Then(
  'I should see search results related to "Zero - Free Access to Online Banking"',
  () => {
    SearchPage.verifySearchPageLoaded();
    SearchPage.verifyResultContainsText("Zero - Free Access to Online Banking");

    // cy.get('#searchTerm', { timeout: 10000 }).type('Online Banking {enter}')
    // cy.url().should('include', 'search.html')
    // cy.get('h2').should('contain.text', 'Search Results:')
    // cy.get('ul').should('contain', 'li');
  },
);

// Atribut	Format Cypress	Contoh
// id=	    #idName	        cy.get('#user-name')
// class=	  .className	    cy.get('.btn-primary')
// type=	  [type="value"]	cy.get('[type="text"]')

// Atribut lain	[atribut="value"]	cy.get('[data-test="login-button"]')
// Gabungan	tagname#idName.className[type="value"]	cy.get('input#user-name[type="text"]')
// Gabungan lain	tagname.className#idName[type="value"]	cy.get('input.btn-primary#user-name[type="text"]')

// Keyword	        Termasuk Apa	                Fungsi
// Feature	        Header BDD / Gherkin Syntax	    Menjelaskan fitur atau fungsi besar yang sedang diuji
// Scenario	        Test Case	                    Satu alur pengujian spesifik untuk fitur tertentu
// Given	        Precondition	                Menjelaskan kondisi awal sebelum aksi dilakukan
// When	            Action	                        Menjelaskan aksi utama pengguna
// Then	            Expected Result	                Menjelaskan hasil yang diharapkan setelah aksi
// And / But	    Connector	                    Digunakan untuk menyambung beberapa langkah yang sejenis dengan Given / When / Then
