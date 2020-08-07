import "cypress-iframe";
import utils from "../support/utils";

describe("Booking inquiry form design", () => {
  before(() => {
    cy.fixture("shared-password-login").then((fixture) => {
      cy.clearCookies();
      cy.visit("/");

      cy.get("input[type=password]").clear().type(fixture.password_valid);
      cy.get("form").submit();
    });
  });

  it("should match expected design", () => {
    cy.fixture("booking-inquiry").then((fixture) => {
      utils.screenSizes.forEach((screenSize) => {
        utils.setViewPortToScreenSize(screenSize);

        const devEnv = Cypress.env("DEV_ENV");
        cy.visit("/");
        cy.visit(fixture.talent_booking_url, { failOnStatusCode: !devEnv });

        cy.location("pathname", {
          timeout: 10000,
          failOnStatusCode: !devEnv
        }).should("include", fixture.talent_booking_url);

        cy.get(".container > div > div > span:first")
          .should("have.text", fixture.talent_full_name);

        cy.wait(5000);

        cy.compareSnapshot(`booking-inquiry-form-${screenSize}`, 0.25);
      });
    });
  });
});