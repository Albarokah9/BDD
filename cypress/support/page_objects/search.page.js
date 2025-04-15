const SEARCH_INPUT = "#searchTerm"; // konstanta yang difeniniskan untuk menyimpan selector css dari element input search di halaman web
const SEARCH_HEADER = "h2";
const SEARCH_RESULT_LIST = "ul";

class SearchPage {
  static enterSearchTerm(term) {
    cy.get(SEARCH_INPUT).type(`${term}{enter}`);
  }

  static verifySearchPageLoaded() {
    cy.url().should("include", "search.html");
    cy.get(SEARCH_HEADER).should("contain.text", "Search Results:");
  }

  static verifyResultContainsText(text) {
    cy.get(SEARCH_RESULT_LIST).should("contain.text", text);
  }
}

export default SearchPage;
