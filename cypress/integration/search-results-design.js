import "cypress-iframe";
import utils from "../support/utils";

describe("Search result design", () => {
  before(() => {
    cy.fixture("shared-password-login").then((fixture) => {
      cy.clearCookies();
      cy.visit("/");

      cy.get("input[type=password]").clear().type(fixture.password_valid);
      cy.get("form").submit();
    });
  });

  it("should match expected design", () => {
    cy.fixture("search").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        const devEnv = Cypress.env("DEV_ENV");
        cy.visit("/", { failOnStatusCode: !devEnv });

        cy.get(`input[placeholder="${fixture.search_input_placeholder_text}"`)
          .first()
          .type(fixture.search_input_text, {
            force: true,
          });

        cy.location("pathname", {
          timeout: 10000,
          failOnStatusCode: !devEnv
        }).should("include", fixture.search_results_url);

        cy.wait(8000);

        cy.compareSnapshot(`search-result-${screenSize}`, 0.25);
      });
    });
  });
});
