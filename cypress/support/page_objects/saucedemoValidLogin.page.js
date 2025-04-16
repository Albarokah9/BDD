const URL = "https://www.saucedemo.com/";
const USERNAME = "#user-name";
const PASSWORD = "#password";
const SIGN_IN = "#login-button";
const ASSERTION_LOGIN = "#header_container";

class LoginPageSaucedemo {
  static visit() {
    cy.visit(URL);
  }
  static fillUsername(username) {
    cy.get(USERNAME).type(username);
  }
  static fillPassword(password) {
    cy.get(PASSWORD).type(password);
  }
  static signIn() {
    cy.get(SIGN_IN).click(); 
  }
  static verifyLogin() {
    cy.get(ASSERTION_LOGIN).should("be.visible");
  }
}

export default LoginPageSaucedemo;
