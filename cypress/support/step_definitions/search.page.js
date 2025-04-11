const URL = "http://zero.webappsecurity.com/login.html"; 
const USERNAME = '#user_login';
const PASSWORD = '#user_password';
const SIGN_IN = 'Sign in';


class searchPage {
    static visitHomepage() {
        cy.visit(URL);
    }
    static fillUsername(username) {
        cy.get(USERNAME).type(username);
    }
    static fillPassword(password) {
        cy.get(PASSWORD).type(password);
    }
    static sigIn() {
        cy.contains(SIGN_IN).click();
    }  
}

export default searchPage;
