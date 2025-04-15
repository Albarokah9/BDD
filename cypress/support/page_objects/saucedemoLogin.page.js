const URL = "https://www.saucedemo.com/";
const USERNAME = "#user-name";
const PASSWORD = "#password";
const SIGN_IN = "#login-button";

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
    cy.get("#header_container").should("be.visible");
  }
}

export default LoginPageSaucedemo;
