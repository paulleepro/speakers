import "cypress-iframe";
import utils from "../support/utils";

describe("Search", () => {
  before(() => {
    cy.fixture("shared-password-login").then((fixture) => {
      cy.clearCookies();
      cy.visit("/");

      cy.get("input[type=password]").clear().type(fixture.password_valid);
      cy.get("form").submit();
    });
  });

  it("should return expected results", () => {
    cy.fixture("search").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        cy.visit("/");

        cy.get(`input[placeholder="${fixture.search_input_placeholder_text}"`)
          .first()
          .type(fixture.search_input_text, {
            force: true
          });

        cy.location("pathname", {
          timeout: 10000
        }).should("include", fixture.search_results_url);

        fixture.search_expected_results.forEach((result) => {
          cy.get(`a[href="${result[1]}"] > div > div > span`).first().should("have.text", result[0]);
        });
      });
    });
  });
});